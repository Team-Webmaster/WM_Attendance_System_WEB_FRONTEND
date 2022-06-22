import React, { useContext, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from '../store/Context';
import useFetch from '../hooks/useFetch';

const SendSMSForm = (props) => {

    const { data } = useFetch('https://localhost:5001/api/User');
    const [selected, setSelected] = useState([]);
    const [message, setMessage] = useState('');
    const { userData } = useContext(UserContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const msgData = JSON.stringify({
            senders: selected.map(user => `${user.value}`),
            message: message,
            apiKey: "62b362689360060033ac1459"
        });
        console.log(msgData);
        //   axios.post("https://meghaduta.dhahas.com/sms/sendSMS", msgData, {headers:{'Content-Type':'application/json'}})
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err));
    };

    console.log(selected);
    return (
        <Box
            id="SendSMSForm"
            component="form"
            onSubmit={submitHandler}
            autoComplete="true"
            sx={
                {
                    mt:"3%",
                    mx: "10%",
                    padding: 3,
                    boxShadow: 10
                }
            }
            maxWidth="400px"
        >
            <Grid
                container
                spacing={3}
                mb={2}
                mt={1}
            >
                <Grid
                    item
                    xs={12}
                >
                    <SendIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography
                        variant="h5"
                    >
                        SMS Notification
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        label="Message"
                        size='small'
                        fullWidth
                        placeholder='Type you message here...'
                        rows={4}
                        type='text'
                        multiline
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    {data && <MultiSelect
                        options={data.map((user) => {
                            return { label: user.name, value: user.telephone, userId: user.userId }
                        }).filter(user => user.userId !== userData.userId)}
                        value={selected}
                        onChange={setSelected}
                    />}
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Button size="medium"
                        type="submit"
                        variant="contained"
                        disabled={!selected.length > 0}
                    >
                        Send SMS
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SendSMSForm;