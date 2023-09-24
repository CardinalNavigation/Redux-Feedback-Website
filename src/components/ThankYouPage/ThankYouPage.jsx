import App from "../App/App";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function ThankYouPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'DATA_RESET',
        });
        history.push('/')

    }

    return (
        <>
            <h2>Thank You!</h2>
            <button onClick={handleClick}>Submit New Feedback</button>
        </>
    )
}

export default ThankYouPage;