import App from "../App/App";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function Support() {

    const [supportNumber, setSupportNumber] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        let supportReducerInput = {
            supportNumber: supportNumber
        }

        dispatch({
            type: 'STORE_SUPPORT',
            payload: supportReducerInput
        });

        setSupportNumber('')
        history.push('/comments')
    }

    return (
        <>
            <div>
                <h2>How well are you being supported?</h2>
                <p>Support?</p>
                <form onSubmit={handleSubmit}>
                    <input required value={supportNumber} placeholder="1-10" type="number" onChange={(event) => setSupportNumber(event.target.value)}>
                    </input>
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Support