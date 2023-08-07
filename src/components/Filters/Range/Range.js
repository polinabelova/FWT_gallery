import React, {useState} from 'react'
import './Range.css'
export default function Range({from, before, theme}) {
    const [isShown, setIsShown] = useState(false);
    const [createdFrom, setCreatedFrom] = useState(String);
    const [createdBefore, setCreatedBefore] = useState(String);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    from(createdFrom)
    before(createdBefore)
    return (
        <div id={theme}>
            <div className='filter-created-container'>
                {(!createdFrom && !createdBefore) &&
                    (<text>Created</text>)}
                {(createdFrom || createdBefore) &&
                    (<text>{createdFrom} - {createdBefore}</text>)}
                <button className='filter-created-arrow' onClick={handleClick}>
                    <img src="down-arrow-2.png" alt=""></img>
                </button>
            </div>

            {
                isShown && (
                    <div className='input-block'>
                        <input className='created-input-1' value={createdFrom}
                            onChange={(e) => setCreatedFrom(e.target.value)} placeholder='from'></input>
                        <input className='created-input-2' value={createdBefore}
                            onChange={(e) => setCreatedBefore(e.target.value)} placeholder='before'></input>
                    </div>
                )}</div>
    )
}
