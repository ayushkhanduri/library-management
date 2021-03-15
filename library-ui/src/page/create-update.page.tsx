import React from 'react';
import { connect } from 'react-redux';
import { FormComponent } from '../components';
import { useParams } from 'react-router-dom';
import { History } from 'history';

type IProps = {
    history: History
} & ReturnType<typeof mapStateToProps>;

type IParams = {
    id: string
}
const CreateUpdate: React.FC<IProps> = (
    {
        selectedBook, history
    }
) => {
    const { id } = useParams<IParams>();
    return(
        <div className="create-update" style={{
            maxWidth: "550px",
            margin: "0 auto"
        }}>
            <h3 style={{textAlign: "center"}}> { !id ? "Add a book" : "Update" }</h3>
            <FormComponent history={history} selectedBook={selectedBook} paramsId={id}/>
        </div>
    )
}

const mapStateToProps = (state: Redux.Store) => (
    {
        selectedBook: state.book.selectedBook
    }
)

export const CreateUpdatePage = connect(mapStateToProps)(CreateUpdate);