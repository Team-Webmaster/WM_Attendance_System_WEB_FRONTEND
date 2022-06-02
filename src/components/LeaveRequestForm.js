import React from 'react';
import { Box, Grid, Button, Typography, TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import moment from 'moment';

const leaveTypes = [{ id: 1, type: 'Sick Leave' }, { id: 2, type: 'Normal Leave' }, { id: 3, type: 'Day off' }];
const durations = ['Few Hours', 'First Half', 'Second Half', 'Full Day', 'Multi Days'];

const LeaveRequestForm = (props) => {
    const [leaveTypeId, setLeaveTypeId] = React.useState('');
    const [durationType, setDurationType] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(document.getElementById('leaveRequestForm'));
        formData.append('status', 'Pending');
        formData.append('senderId',1);
        if (durationType.match('Few Hours')) {
            formData.delete('type');
            props.submitShortLeaveHandler(formData);
            return;
        } else if (durationType.match('First Half')||durationType.match('Second Half')) {
            formData.append('duration', 0.5);
        } else if (durationType.match('Full Day')) {
            formData.append('duration', 1);
        } else {
            const days = moment.duration(moment(new Date(endDate)).diff(moment(new Date(startDate)))).days();
            formData.append('duration', days);
        }
        props.submitFormHandler(formData);
    }

    const selectLeaveTypeHandler = (event) => {
        setLeaveTypeId(event.target.value);
    }

    const selectDurationTypeHandler = (event) => {
        setDurationType(event.target.value);
    }

    const onChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const onChangeEndDate = (event) => {
        setEndDate(event.target.value);
        setEndTime('');
    }

    const onChangeStartTime = (event) => {
        setStartTime(event.target.value);
    }

    const onChangeEndTime = (event) => {
        setEndTime(event.target.value);
    }

    let completeDetails;

    if (leaveTypeId && durationType.match('Multi Days') && startDate && endDate) {
        completeDetails = moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).days() <= 0 ?
            <Typography sx={{ color: "red" }} >{'End Date cannot be lower than Start Date'}</Typography> :
            <React.Fragment>
                <Typography sx={{ color: "green" }}>
                    {`${leaveTypes.filter(leave=>leave.id===leaveTypeId)[0].type} from ${startDate} to ${endDate}`}
                </Typography>
                <Typography sx={{ color: "green" }}>{`${moment.duration(moment(new Date(endDate)).diff(moment(new Date(startDate)))).days()} Days`}</Typography>
            </React.Fragment>
    } else if (durationType.match('Few Hours') && startDate && startTime && endTime) {
        completeDetails = moment.duration(moment(new Date(startDate+"T"+endTime)).diff(new Date(startDate+"T"+startTime))).asMinutes() <= 0?
        <Typography sx={{ color: "red" }} >{'End Time cannot be lower than Start Time'}</Typography> :
        <React.Fragment>
            <Typography sx={{color:"green"}}>
                {`Short Leave for ${startDate} from ${startTime} to ${endTime}`}
            </Typography>
            <Typography sx={{color:"green"}}>
                    {`${moment.duration(moment(new Date(startDate + "T" + endTime)).diff(new Date(startDate + "T" + startTime))).hours()} Hours and ${moment.duration(moment(new Date(startDate + "T" + endTime)).diff(new Date(startDate + "T" + startTime))).minutes()} Minutes`}
                </Typography>
        </React.Fragment>
    } else if (leaveTypeId && (durationType.match('First Half') || durationType.match('Second Half') || durationType.match('Full Day')) && startDate) {
        completeDetails = <Typography sx={{color:"green"}}>
            {`${leaveTypes.filter(leave=>leave.id===leaveTypeId)[0].type} as ${durationType} for ${startDate}`}
        </Typography>
    } else {
        completeDetails = null;
    }

    return (
        <Box
            id="leaveRequestForm"
            component="form"
            onSubmit={submitHandler}
            autoComplete="true"
            sx={
                {
                    mx:"10%",
                    padding: 3,
                    boxShadow: 10
                }
            }
            maxWidth="450px"
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

                    <Typography
                        variant="h5"
                    >
                        Leave Request
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    {durationType.match('Few Hours')?null:<FormControl variant="standard" fullWidth >
                        <InputLabel id="demo-simple-select-standard-label">Select Leave Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Select Leave Type"
                            name="leaveTypeId"
                            value={leaveTypeId}
                            onChange={selectLeaveTypeHandler}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                leaveTypes.map((leave) => <MenuItem key={leave.id} value={leave.id}>{leave.type}</MenuItem>)
                            }
                        </Select>
                    </FormControl>}
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <FormControl variant="standard" fullWidth >
                        <InputLabel id="demo-simple-select-standard-label 2">Select Duration</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label 2"
                            id="demo-simple-select-standard 2"
                            label="Select Duration"
                            name="type"
                            value={durationType}
                            onChange={selectDurationTypeHandler}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                durations.map((duration) => <MenuItem key={duration} value={duration} >{duration}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                {durationType.match('Few Hours') ?
                    <React.Fragment>
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
                                InputLabelProps={{ shrink: true }}
                                onChange={onChangeStartDate}
                                fullWidth
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
                                InputLabelProps={{ shrink: true }}
                                onChange={onChangeStartTime}
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                id="outlined-end-time"
                                label="Select End Time"
                                type="time"
                                size="small"
                                name="endTime"
                                InputLabelProps={{ shrink: true }}
                                onChange={onChangeEndTime}
                                fullWidth
                            />
                        </Grid>
                    </React.Fragment> :
                    durationType.match('First Half') || durationType.match('Second Half') || durationType.match('Full Day') ?
                        <React.Fragment>
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
                                    InputLabelProps={{ shrink: true }}
                                    onChange={onChangeStartDate}
                                    fullWidth
                                />
                            </Grid>
                        </React.Fragment> : durationType.match('Multi Days') ?
                            <React.Fragment>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        id="outlined-select-date"
                                        label="Start Date"
                                        type="date"
                                        size="small"
                                        name="date"
                                        InputLabelProps={{ shrink: true }}
                                        onChange={onChangeStartDate}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <TextField
                                        id="outlined-select-date"
                                        label="End Date"
                                        type="date"
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                        onChange={onChangeEndDate}
                                        fullWidth
                                    />
                                </Grid>
                            </React.Fragment> : null}
                {durationType ?
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            id="outlined-special-notes"
                            label="Special Notes"
                            size="small"
                            name="specialNote"
                            fullWidth
                        />
                    </Grid> : null}
                <Grid
                    item
                    xs={12}
                >
                    {
                        completeDetails ? completeDetails : null
                    }
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Button size="medium"
                        type="submit"
                        variant="contained"
                        disabled={startDate && startTime && endTime ? moment.duration(moment(new Date(startDate + "T" + endTime)).diff(moment(new Date(startDate + "T" + startTime)))).asHours() <= 0 : startDate && endDate ? moment.duration(moment(new Date(endDate)).diff(moment(new Date(startDate)))).asDays() <= 0 : false}
                    >
                        Submit Request
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LeaveRequestForm;