import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
};

const PendingRecordsTable = (props) => {
  return (
    <TableContainer component={Paper} sx={style} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Pending Normal Leaves</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell >Reason</TableCell>
                                <TableCell >Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.pendingDetails.pendingLeaves.map((leave) => {
                                    return <TableRow key={leave.id} >
                                        <TableCell component="th" scope="row">
                                            {leave.date.slice(0, 10)}
                                        </TableCell>
                                        <TableCell >{leave.type}</TableCell>
                                        <TableCell >{`${leave.duration * 8} Hours`}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Pending Short Leaves</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell >Start Time</TableCell>
                                <TableCell >End Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.pendingDetails.pendingShortLeaves.map((leave) => {
                                    return <TableRow key={leave.id} >
                                        <TableCell component="th" scope="row">
                                            {leave.date.slice(0, 10)}
                                        </TableCell>
                                        <TableCell >{leave.startTime}</TableCell>
                                        <TableCell >{leave.endTime}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
  )
};

export default PendingRecordsTable;