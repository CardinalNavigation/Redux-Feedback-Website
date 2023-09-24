import App from "../App/App";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { Container, Typography, Button, TextField, FormControl } from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

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
            <Container>
                <Typography
                    variant='h3'
                    color='primary'
                    gutterBottom>
                    How Are you Feeling today?
                </Typography>
                <Typography
                    variant='h6'
                    color="textSecondary">
                    How are you feeling on a scale of 1-10?
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        py: 3,
                    }} >
                        <TextField
                            id="standard-basic"
                            label="1-10"
                            variant="outlined" required
                            value={feelingNumber}
                            type="number"
                            size="medium"
                            onChange={(event) => setFeelingNumber(event.target.value)} />
                        <Button
                            variant="contained"
                            type='submit'
                          
                            endIcon={<ArrowForwardTwoToneIcon />}>
                            Next
                        </Button>
                    </FormControl>
                </form>
            </Container >
        </>
    )
}

export default Feeling