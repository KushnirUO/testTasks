import React from "react";
import {Formik} from 'formik';
import {Thumb} from "./thumb";
import {validationsForm} from "../ModalForm/ValidationForm";
import {useDispatch} from "react-redux";
import {addBlock} from "../../store/blockSlice";
import './style.css'

export const Form = () => {
    const dispatch = useDispatch();
    const handleAction = ({title, text, link, file}) => {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            document = reader.result;
            dispatch(addBlock({
                title,
                text,
                link,
                file: document
            }));
        };
    }
    return (
        <div>
            <h1>Створення блоку</h1><br/>
            <Formik
                initialValues={{
                    title: '',
                    text: '',
                    link: '',
                    file: null,
                }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                    handleAction(values)
                    resetForm( '' )
                    document.getElementById("file").value = "";
                }}
                validationSchema={validationsForm}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) => (
                    <div className='form'>
                        <div className="group">
                            <input
                                className={`input`}
                                type={`text`}
                                name={`title`}
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <span className="bar"></span>
                            <label htmlFor={`title`}>Заголовок</label>
                            <div style={{color: '#950740'}}>{touched.title && errors.title &&
                                <p className={'error'}>{errors.title}</p>}</div>
                        </div>
                        <div className="group">
                            <input
                                className={`input`}
                                type={`text`}
                                name={`text`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                                required
                            />
                            <span className="bar"></span>
                            <label htmlFor={`text`}>Текст</label>
                            <div style={{color: '#950740'}}>{touched.text && errors.text &&
                                <p className={'error'}>{errors.text}</p>}</div>
                        </div>
                        <div className="group">
                            <input
                                className={`input`}
                                type={`text`}
                                name={`link`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.link}
                                required
                            />
                            <span className="bar"></span>
                            <label htmlFor={`link`}>Посилання</label>
                            <div style={{color: '#950740'}}>{touched.link && errors.link &&
                                <p className={'error'}>{errors.link}</p>}</div>
                        </div>
                        <div className="group">
                            <div className="file-label" htmlFor={`file`}>Зображення (до 1MB)</div>
                            <input
                                type={`file`}
                                id={`file`}
                                name={`file`}
                                accept=".jpg, .jpeg, .png"
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}
                                required
                            />
                            <span className="bar"></span>
                            <div style={{width: '200px', height: '200px'}}>
                                <Thumb file={values.file}/>
                            </div>
                            <div style={{color: '#950740'}}>{touched.file && errors.file && <p className={'error'}>{errors.file}</p>}</div>
                        </div>
                        <button
                            className='btn5'
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >
                            Створити
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}
