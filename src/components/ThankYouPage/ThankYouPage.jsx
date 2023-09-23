import App from "../App/App";
import { useHistory } from "react-router-dom";

function ThankYouPage() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/feeling')
    }

    return (
        <>
            <h2>Thank You!</h2>
            <button onClick={handleClick}>Submit New Feedback</button>
        </>
    )
}

export default ThankYouPage;