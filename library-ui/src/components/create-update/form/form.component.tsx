import React, { useCallback } from 'react';
import { ButtonUI, InputUI } from '../../../presentational';
import { useForm, Controller } from 'react-hook-form';
import styles from './form.module.scss';

interface IProps {
    selectedBook?: BookType.Book;
};

export const FormComponent: React.FC<IProps> = ({
    selectedBook
}) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: selectedBook?.title || "",
            subtitle: selectedBook?.subtitle || "",
            author: selectedBook?.author || "",
            pages: selectedBook?.pages || "",
            description: selectedBook?.description || "",
            website: selectedBook?.website || "",
        }
    });

    const onSubmit = useCallback((values) => {
        console.log(values);
    }, []);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="title"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter title'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{ required: "Title is required" }}
            />

            <Controller
                name="subtitle"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter subtitle'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
            />

            <Controller
                name="author"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter author'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{
                    required: "Author is required"
                }}
            />

            <Controller
                name="pages"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter number of pages'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
            />

            <Controller
                name="description"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter description'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
                rules={{ required: "Description is required" }}
            />
            <Controller
                name="website"
                control={control}
                render={({ onChange, value }) =>
                    <InputUI placeholder={'Enter website'} value={value} onChange={(e) => onChange(e.target.value)} />
                }
            />
            
            <ButtonUI className={styles.btn_center} text={"submit"} type={'submit'}/>
        </form>
    )
}