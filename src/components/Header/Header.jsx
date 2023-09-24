import App from "../App/App";
import { useHistory } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Header() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/feeling')
    }

    return (
        <>
            <Box sx={{ bgcolor: "primary.main" }} className='App-header'>
                <Typography
                    variant="h1"
                    className='App-title'>
                    Course Feedback
                </Typography>
                {/* <Typography variant="h4">Don't forget it!</Typography> */}
            </Box>
            {/* <div>
                <form onSubmit={nextPage}>
                    <button type='submit'>Submit Your Feedback!</button>
                </form>
            </div> */}
        </>
    )
}

export default Header