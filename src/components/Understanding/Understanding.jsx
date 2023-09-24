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
            type: 'STORE_UNDERSTANDING',
            payload: understandingReducerInput
        });

        setUnderstandingNumber('')
        history.push('/support')
    }

     const handleClick=()=>{
        history.push('/feeling')
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
                <button onClick={handleClick}>Back</button>
            </div>
        </>
    )
}

export default Understanding