import {useDispatch} from 'react-redux';
import {removeBlock} from '../../store/blockSlice';
import {FaTree} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai';
import './style.css'

const BlockItem = ({id, title, text, link, file}) => {
    const dispatch = useDispatch();
    return (
        <div className="post-item">
            <div className="item-content">
                <div className="item-close">
                    <span onClick={() => dispatch(removeBlock({id}))}><AiFillCloseCircle size='50px'
                                                                                         color='#D1E8E2'/></span>
                </div>
                <a href={link} className='link2'>
                    <div className="item-icon group">
                        <img className='item-icon-file' src={file}/>
                    </div>
                    <div className="item-body">
                        <h1>{title}</h1>
                        <h3>{text}</h3>
                    </div>
                    <div className="item-footer">
                        <a href={link} className="link"><span>Детальніше</span></a>
                        <FaTree color='#2C3531' size='30px'/>

                    </div>
                </a>
            </div>
        </div>

    );
};

export default BlockItem;
