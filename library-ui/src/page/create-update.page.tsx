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
        <div className="create-update">
            <p>Create</p>
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