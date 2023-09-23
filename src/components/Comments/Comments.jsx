import App from "../App/App";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function Comments() {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        let commentReducerInput = {
            commentText: comment
        }

        dispatch({
            type: 'STORE_COMMENT',
            payload: commentReducerInput
        });

        setComment('')
        history.push('/review')
    }

    return (
        <>
            <div>
                <h2>Any comments you want to leave?</h2>
                <p>Comments</p>
                <form onSubmit={handleSubmit}>
                    <input required value={comment} placeholder="Comment Here" type="text" onChange={(event) => setComment(event.target.value)}>
                    </input>
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Comments