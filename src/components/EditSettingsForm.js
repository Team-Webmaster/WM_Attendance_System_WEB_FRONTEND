import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { UserContext } from '../store/Context';
import UpdateIcon from '@mui/icons-material/Update';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const EditSettingsForm = ({ data, closeSettingsForm, reFetch }) => {

    const [input, setInput] = React.useState(data);
    const { userData } = React.useContext(UserContext);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newSettings = {
            ...input,
            adminId: userData.userId
        }
        axios.put('https://localhost:5001/api/Setting', newSettings)
            .then(res => {
                reFetch();
                closeSettingsForm();
                toast.success('Settings updated.', { position: toast.POSITION.TOP_CENTER, autoClose: 4000 });
            }).catch(err => {
                closeSettingsForm();
                toast.error('Settings update failed.', { position: toast.POSITION.TOP_CENTER, autoClose: 4000 });
            });
    }

    return (
        <Box
            component="form"
            onSubmit={submitHandler}
            autoComplete="true"
            sx={style}
            maxWidth="350px"
        >
            <UpdateIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography
                variant="h5"
                mb={2}
            >
                Update Settings
            </Typography>
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        label="No of Working Hours Per Day"
                        type="number"
                        size="small"
                        name="noOfWorkingHoursPerDay"
                        value={input.noOfWorkingHoursPerDay}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        label="No of Working Days Per Week"
                        type="number"
                        size="small"
                        name="noOfWorkingDaysPerWeek"
                        fullWidth
                        value={input.noOfWorkingDaysPerWeek}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        label="No of Annual Leaves"
                        size="small"
                        type="number"
                        name="noOfAnnualLeaves"
                        onChange={handleChange}
                        fullWidth
                        value={input.noOfAnnualLeaves}
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                >
                    <Button type="submit" variant="contained" size="large" >Save Changes</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditSettingsForm;