import {useDispatch} from 'react-redux';
import {removeBlock} from '../../store/blockSlice';
import './style.css'
import {FaTree} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Thumb} from "../InputForm/thumb";

const BlockItem = ({id, title, text, link, file}) => {
    const dispatch = useDispatch();
    file='https://placekitten.com/150/150'
    return (
        <div className="post-item">
            <div className="item-content">
                <div className="item-close">
                    <span onClick={() => dispatch(removeBlock({id}))}><AiFillCloseCircle size='50px'
                                                                                         color='#D1E8E2'/></span>
                </div>
                <a href={link}>
                    <div className="item-icon group">
                        <div style={{width: '150px', height: '150px'}}>
                            <img src={file}/>
                            {/*<Thumb file={file}/>*/}
                        </div>
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
