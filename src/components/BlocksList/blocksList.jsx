import {useSelector} from 'react-redux';
import BlockItem from '../BlockItem/blockItem';
import './style.css'
import React, {useState} from "react";

const BlocksList = () => {
    const [numPage, setNumPage] = useState(1);
    const blocks = useSelector(state => state.blocks.blocks);
    const countAll = blocks.length;
    let firstEl = countAll - numPage * 3;
    let btnDisable = firstEl <= 0 ? true : false;
    if (firstEl < 0) firstEl = 0;
    const lastEl = countAll;
    const arr = blocks.slice(firstEl, lastEl)
    return (
        <div className='posts'>
            <div className="post-wrap">
                {arr.map((block) => (
                    <BlockItem
                        key={block.id}
                        file={`https://placekitten.com/150/150`}
                        {...block}

                    />
                ))}
            </div>

            <div className='btnPagination'>
                <button className='paginBtn' onClick={() => setNumPage(numPage + 1)} disabled={btnDisable}>
                    Завантажити ще
                </button>
            </div>
        </div>

    );
};

export default BlocksList;
