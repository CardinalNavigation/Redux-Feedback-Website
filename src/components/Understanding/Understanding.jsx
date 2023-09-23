import App from "../App/App";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function Understanding() {

    const [understandingNumber, setUnderstandingNumber] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        let understandingReducerInput = {
            understandingNumber: understandingNumber
        }

        dispatch({
            type: 'FEEDBACK_TOSS',
            payload: understandingReducerInput
        });

        setUnderstandingNumber('')
        history.push('/support')
    }

    return (
        <>
            <div>
                <h2>How well are you understanding the content?</h2>
                <p>Understanding?</p>
                <form onSubmit={handleSubmit}>
                    <input required value={understandingNumber} placeholder="1-10" type="number" onChange={(event) => setUnderstandingNumber(event.target.value)}>
                    </input>
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Understanding