import App from "../App/App";
import { useHistory } from "react-router-dom";

function Header() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/feeling')
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            {/* <div>
                <form onSubmit={nextPage}>
                    <button type='submit'>Submit Your Feedback!</button>
                </form>
            </div> */}
        </>
    )
}

export default Header