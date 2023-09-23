import App from "../App/App";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function Feeling() {

    const [feelingNumber, setFeelingNumber] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        let feelingReducerInput = {
            feelingNumber: feelingNumber
        }

        dispatch({
            type: 'STORE_FEELING',
            payload: feelingReducerInput
        });

        setFeelingNumber('')
        history.push('/understanding')
    }

    return (
        <>
            <div>
                <h2>How Are you Feeling today?</h2>
                <p>Feeling?</p>
                <form onSubmit={handleSubmit}>
                    <input required value={feelingNumber} placeholder="1-10" type="number" onChange={(event) => setFeelingNumber(event.target.value)}>
                    </input>
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Feeling