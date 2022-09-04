import React, {useState} from "react";
import {useSelector} from 'react-redux';
import BlockItem from '../BlockItem/blockItem';
import './style.css'

const BlocksList = () => {
    const [numPage, setNumPage] = useState(1);
    const [numPagePlus, setNumPagePlus] = useState(0);
    const blocks = useSelector(state => state.blocks.blocks);
    const countAll = blocks.length;
    const countPage = Math.ceil(countAll / 9);
    const handleClick = (page) => {
        setNumPagePlus(0)
        setNumPage(page)
    }
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    const btnDisable = (numPagePlus + numPage) === countPage ? true : false;
    const firstElPage = (numPage - 1) * 9;
    let lastElPage = (numPage + numPagePlus) * 9;
    if (lastElPage > countAll) lastElPage = countAll;
    const blocksReverse = blocks.slice(0, countAll).reverse();
    const blocksInfo = blocksReverse.slice(firstElPage, lastElPage);
    return (
        <div className='posts'>
            <div className="post-wrap">
                {blocksInfo.map((block) => (
                    <BlockItem
                        key={block.id}
                        {...block}
                    />
                ))}
            </div>
            <div className='btnPagination'>
                <button className='paginBtn' onClick={() => setNumPagePlus(numPagePlus + 1)} disabled={btnDisable}>
                    Завантажити ще
                </button>
            </div>
            <div className="pagination">
                {pages.map((page) => (
                    <div
                        className={page === numPage ||
                        page === numPage + numPagePlus ||
                        (page < numPagePlus + numPage && page > numPage) ? "paginationBtn pgactive" : "paginationBtn"}
                        onClick={() => handleClick(page)}>{page}</div>
                ))}
            </div>
        </div>
    );
};

export default BlocksList;
