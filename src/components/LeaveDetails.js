import React from 'react';
import { Badge, Box, Button, Fade, Grid, Modal, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import { UserContext } from '../store/Context';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';

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

const LeaveDetails = () => {

    const { userData } = React.useContext(UserContext);
    const [openModalRecent, setOpenModalRecent] = React.useState(false);
    const [openModalPending, setOpenModalPending] = React.useState(false);
    const [openModalInfo, setOpenModalInfo] = React.useState(false);

    const recentRecordsButtonHandler = () => {
        setOpenModalRecent(true);
    }

    const pendingButtonHandler = () => {
        setOpenModalPending(true);
    }

    const infoButtonHandler = () => {
        setOpenModalInfo(true);
    }

    return (
        <Box>
            <Typography variant='h4' sx={{ fontWeight: "bold" }} >Leave-Management</Typography>
            <Typography>The place to manage all your leaves...</Typography>
            {userData && <Grid sx={{ display: "flex", width: "50%", ml: "5%" }} >
                <Grid mt={12}>
                    <Typography variant="h4" color="darkblue" >
                        LEAVE AVAILABILITY
                    </Typography>
                </Grid>
                <Grid ml={1}>
                    <CircularProgressWithLabel value={userData.noOfAnnualLeaves / 20 * 100} />
                    <Grid sx={{ width: 200, ml: 5 }} >
                        <Typography color="secondary" >
                            {`*You have ${160 * (userData.noOfAnnualLeaves / 20)} of 160 available leave hours.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>}
            <Stack direction="column" spacing={2} mt={2} sx={{ width: 400 }} ml="20%" >
                <Fade in={true} timeout={2000} >
                    <Button
                        endIcon={<Badge badgeContent={4} color='error' ><ListAltIcon /></Badge>}
                        size="medium"
                        variant='outlined'
                        color='primary'
                        onClick={recentRecordsButtonHandler}
                    >
                        Recent Records
                    </Button>
                </Fade>
                <Fade in={true} timeout={4000} >
                    <Button
                        endIcon={<Badge badgeContent={4} color='error' ><PendingTwoToneIcon /></Badge>}
                        size="medium"
                        variant='outlined'
                        color='warning'
                        onClick={pendingButtonHandler}
                    >
                        Pending Leaves
                    </Button>
                </Fade>
                <Fade in={true} timeout={6000} >
                    <Button
                        endIcon={<InfoIcon />}
                        size="medium"
                        variant='outlined'
                        color='success'
                        onClick={infoButtonHandler}
                    >
                        Info
                    </Button>
                </Fade>
            </Stack>
            <Modal open={openModalRecent} onClose={() => setOpenModalRecent(false)} >
                <TableContainer component={Paper} sx={style} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell >Reason</TableCell>
                                <TableCell >Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    2022-06-20
                                </TableCell>
                                <TableCell >Sick Leave</TableCell>
                                <TableCell >4 Hours</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>
            <Modal open={openModalPending} onClose={() => setOpenModalPending(false)} >
                <TableContainer component={Paper} sx={style} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell >Reason</TableCell>
                                <TableCell >Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    2022-06-20
                                </TableCell>
                                <TableCell >Sick Leave</TableCell>
                                <TableCell >4 Hours</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>
            <Modal open={openModalInfo} onClose={() => setOpenModalInfo(false)} >
                <h1>hi</h1>
            </Modal>
        </Box>
    );
}

export default LeaveDetails;