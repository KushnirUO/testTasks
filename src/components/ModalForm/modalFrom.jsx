import React, {useState} from "react";
import Modal from "../modal";
import {Form} from "../InputForm";
import {AiOutlinePlusCircle} from 'react-icons/ai';

export default function ModalFrom() {
    const [modalActive, setModalActive] = useState();
    return (
        <div>
            <div onClick={() => setModalActive(true)}>
                <div className='openModal'>
                    <AiOutlinePlusCircle size='70px' color='#116466'/>
                    <h4>Створити блок</h4>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <Form/>
            </Modal>
        </div>
    )
}