import React from 'react';
import { connect } from 'react-redux';
import { FormComponent } from '../components';

type IProps = ReturnType<typeof mapStateToProps>;

const CreateUpdate: React.FC<IProps> = (
    {
        selectedBook
    }
) => {
    return(
        <div className="create-update">
            <p>Create</p>
            <FormComponent selectedBook={selectedBook}/>
        </div>
    )
}

const mapStateToProps = (state: Redux.Store) => (
    {
        selectedBook: state.book.selectedBook
    }
)

export const CreateUpdatePage = connect(mapStateToProps)(CreateUpdate);