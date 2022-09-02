import './App.css';
import ModalFrom from "./components/ModalForm/modalFrom";
import React from 'react';
import {useDispatch} from 'react-redux';
import {addBlock} from './store/blockSlice';
import BlocksList from './components/BlocksList/blocksList';
export default function App() {
    const dispatch = useDispatch();
    const handleAction = ({title, text, link, file}) => {
        file='https://placekitten.com/640/360'
        dispatch(addBlock({title, text, link, file})) ;
    }
    return (
        <div>
            <ModalFrom handleAction={handleAction}/>
            <BlocksList/>
        </div>
    );
}