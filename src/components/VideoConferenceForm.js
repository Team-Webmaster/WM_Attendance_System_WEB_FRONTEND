import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';
import VideocamIcon from '@mui/icons-material/Videocam';
import { minuteDifference } from '../functions/timeDifference';

const VideoConferenceForm = () => {

    const [selected,setSelected] = useState([]);
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');

    let completeMsg;

    if(date&&time&&selected.length>0){
        completeMsg = minuteDifference(new Date(),new Date(date+'T'+time),true)<=0?
        <Typography sx={{ color: "red" }} >{'Conference can not be schedule for past times'}</Typography>:
        <Typography sx={{ color: "green" }} >{`Video Conference Start at ${time} of ${date}`}</Typography>
    }

    return (
        <Box
        id="videoConferenceForm"
            component="form"
            // onSubmit={submitHandler}
            autoComplete="true"
            sx={
                {
                    mx:"10%",
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
                    <VideocamIcon color="primary" sx={{fontSize:40}} />
                    <Typography
                        variant="h5"
                    >
                        Schedule Video Conference
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        id="outlined-select-date"
                        label="Select Date"
                        type="date"
                        size="small"
                        name="date"
                        value={date}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{min:new Date().toISOString().slice(0,10)}}
                        onChange={(event)=>setDate(event.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        id="outlined-start-time"
                        label="Select Start Time"
                        type="time"
                        size="small"
                        name="startTime"
                        value={time}
                        InputLabelProps={{ shrink: true }}
                        onChange={(event)=>setTime(event.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <MultiSelect
                        options={[{label:"Lakshitha",value:1},{label:"Kumara",value:2},{label:"Lak",value:3}]}
                        value={selected} 
                        onChange={setSelected}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    {
                        completeMsg ? completeMsg : null
                    }
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Button size="medium"
                        type="submit"
                        variant="contained"
                        disabled={!selected.length>0}
                    >
                        Schedule Now
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default VideoConferenceForm;