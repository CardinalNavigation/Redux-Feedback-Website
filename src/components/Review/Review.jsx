import App from "../App/App";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";



// Reivew is Going to Take In all of our Reducer Data
// It will also POST it to the Database when the Submit Button Is Clicked
function Review() {

    const feeling = useSelector(store => store.feelingData);
    const understanding = useSelector(store => store.understandingData);
    const support = useSelector(store => store.supportData);
    const comment = useSelector(store => store.commentData);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = () => {
        console.log("Button Clicked")
        let date = new Date()
        let dateToString = date.toISOString()
        let databasePackage = {
            feeling: Number(feeling.feelingNumber),
            understanding: Number(understanding.understandingNumber),
            support: Number(support.supportNumber),
            comments: comment.commentText,
            flagged: "false",
            date: dateToString
        }
        console.log(databasePackage)

        axios.post('/feedback', databasePackage)
            .then((result) => {
                console.log('POST /feedback success', result.data);
            })
            .catch((err) => {
                console.log('POST /feedback fail', err);
            })

        history.push('/thankyou')
    };

    return (
        <>
            <div>
                <h2>Review Your Feedback</h2>
                <section>Feelings:{feeling.feelingNumber}</section>
                <section>Understanding:{understanding.understandingNumber}</section>
                <section>Support:{support.supportNumber}</section>
                <section>Comments:{comment.commentText}</section>
                <button onClick={handleClick}>Submit</button>
            </div>
        </>
    )
}

export default Review