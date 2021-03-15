import React, { useCallback, useEffect } from 'react';
import { ButtonUI, InputUI } from '../../../presentational';
import { useForm, Controller } from 'react-hook-form';
import { HttpServiceInstance } from '../../../shared/http.service';
import { API_CONSTANTS } from '../../../shared/api.constant';
import { History } from 'history';
import { connect } from 'react-redux';
import { setSelectedBook } from '../../../actions/books.actions';
import { Validators } from '../../../shared/validators';
import styles from './form.module.scss';

type IProps = {
    selectedBook?: BookType.Book;
    paramsId?: string,
    history: History
} & typeof mapDispatchToProps;

const generateDefaultFormValuesFromBook = (selectedBook: BookType.Book) => {
    return {
        title: selectedBook?.title || "",
        subtitle: selectedBook?.subtitle || "",
        author: selectedBook?.author || "",
        pages: selectedBook?.pages || "",
        description: selectedBook?.description || "",
        website: selectedBook?.website || "",
    }
}
const Form: React.FC<IProps> = ({
    selectedBook, paramsId, history, setSelectedBook
}) => {
    const { control, handleSubmit, reset, errors } = useForm({
        mode: "all",
        defaultValues: generateDefaultFormValuesFromBook(selectedBook)
    });

    console.log(errors);

    const getSelectedBook = useCallback(async () => {
        try {
            const response = (await HttpServiceInstance.get(API_CONSTANTS.BOOK.FIND(paramsId)) as BookType.FindBookResponse);
            setSelectedBook(response.data);
        } catch (e) {
            console.log(e);
            history.push('/');
        }
    }, [paramsId]);

    useEffect(() => {
        const obj = generateDefaultFormValuesFromBook(selectedBook);
        console.log("reset");
        reset(obj);
    }, [selectedBook]);

    useEffect(() => {
        if (!selectedBook && paramsId) {
            getSelectedBook();
        }
        if (selectedBook && !paramsId) {
            setSelectedBook(null);
        }
    }, []);

    const updateBook = useCallback(async (values) => {
        try {
            const response = await HttpServiceInstance.put(API_CONSTANTS.BOOK.PUT, values);
            console.log(response);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }, []);

    const createBook = useCallback(async (values) => {
        try {
            const response = await HttpServiceInstance.post(API_CONSTANTS.BOOK.POST, values);
            console.log(response);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }, []);

    const onSubmit = useCallback((values) => {
        console.log(values);
        if (paramsId && selectedBook?.isbn) {
            const requestObject = {
                ...selectedBook,
                ...values
            };
            updateBook(requestObject);
        } else  {
            const requestObject = {
                isbn: null,
                ...values
            }
            createBook(requestObject);
        }
    }, [selectedBook]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="title"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI errorMessage={errors?.title?.message} name={name} placeholder={'Enter title'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{ required: "Author is required" }}
            />

            <Controller
                name="subtitle"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI name={name} placeholder={'Enter subtitle'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
            />

            <Controller
                name="author"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI name={name} errorMessage={errors?.author?.message} placeholder={'Enter author'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{
                    required: "Author is required"
                }}
            />

            <Controller
                name="pages"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI name={name} placeholder={'Enter number of pages'} value={value} onChange={(e) => Validators.OnlyNumbers(onChange, e.target.value) } />
                }
            />

            <Controller
                name="description"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI name={name} errorMessage={errors?.description?.message} placeholder={'Enter description'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{ required: "Description is required" }}
            />
            <Controller
                name="website"
                control={control}
                render={({ onChange, value, name }) =>
                    <InputUI name={name} placeholder={'Enter website'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
            />
            <ButtonUI text={"submit"} type={'submit'} />
        </form>
    )
}

const mapStateToProps = () => (
    {}
)
const mapDispatchToProps = {
    setSelectedBook
}
export const FormComponent = connect(mapStateToProps, mapDispatchToProps)(Form);