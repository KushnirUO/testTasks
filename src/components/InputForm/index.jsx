import React, {useEffect} from "react";
import {Formik} from 'formik';
import {Thumb} from "./thumb";
import {validationsForm} from "../ModalForm/ValidationForm";
import './style.css'

export const Form = (props) => {
    const {handleAction} = props
    return (
        <div>
            <h1>Створення блоку</h1><br/>
            <Formik
                initialValues={{
                    title: '',
                    text: '',
                    link: '',
                    file: '',
                }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                    handleAction(values)
                    resetForm({values: null})
                    console.log(values.file)
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
                            <input
                                type={`file`}
                                id={`file`}
                                name={`file`}
                                accept=".jpg, .jpeg, .png"
                                // value={values.file}
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}
                                required
                            />
                            <label htmlFor={`file`}></label>
                            <span className="bar"></span>
                            <div style={{color: '#950740'}}>{touched.file && errors.file && <p className={'error'}>{errors.file}</p>}</div>
                            <div style={{width: '200px', height: '200px'}}>
                                {/*<img src="" height="200" alt="Image preview..."/>*/}
                                <Thumb file={values.file}/>
                            </div>
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
