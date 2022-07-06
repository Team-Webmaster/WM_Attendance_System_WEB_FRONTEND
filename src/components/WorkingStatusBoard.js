import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Button, Grid, Modal, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';
import CircleIcon from '@mui/icons-material/Circle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const WorkingStatusBoard = () => {

    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [details, setDetails] = useState(null);

    const onClickDetails = (details) => {
        setOpenDetailsModal(!openDetailsModal);
        setDetails(details);
    }

    const columns = [
        {
            field: 'avatar', headerName: '', renderCell: (values) => {
                return (
                    <Avatar src={`https://localhost:5001/Images/${values.row.profilePic}`} />
                )
            }, width: 60
        },
        { field: 'nic', headerName: 'NIC', width: 200 },
        { field: 'name', headerName: 'Name', width: 250 },
        {
            field: 'dot', headerName: '', renderCell: (values) => {
                let color;
                if (values.row.status.match('On Work')) {
                    color = 'success'
                } else if (values.row.status.match('Break')) {
                    color = 'warning'
                } else {
                    color = 'error'
                }
                return (
                    <CircleIcon color={color} />
                )
            }, width: 20
        },
        { field: 'status', headerName: 'Working Status', width: 200 },
        {
            field: 'actions', headerName: 'Actions', renderCell: (values) => {
                return (
                    <React.Fragment>
                        <Button
                            variant='contained'
                            size='small'
                            color='warning'
                            onClick={() => onClickDetails(values.row)}
                            sx={{ mr: 1, fontSize: 10 }}
                        >
                            Details
                        </Button>
                    </React.Fragment>
                )
            }, width: 90
        }
    ];

    const { data: statusRecords } = useFetch('https://localhost:5001/api/Attendance/working-status-board');
    console.log(statusRecords);
    return (
        <div style={{ height: 400, width: "62%", marginLeft: "19%" }} >
            {statusRecords && <DataGrid
                sx={{ backgroundColor: 'white' }}
                rows={statusRecords.map((record, index) => {
                    return { ...record, id: index }
                })}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />}
            <Modal open={openDetailsModal} onClose={() => setOpenDetailsModal(false)} >
                {details && <Box sx={style}>
                    <Box sx={{ width: "100%", ml: 8 }} >
                        <Avatar src={`https://localhost:5001/Images/${details.profilePic}`} sx={{ ml: 12, width: 80, height: 80 }} />
                        {(details.status.match('On Work')) ?
                            <Grid sx={{ display:'flex', ml: 12, width: 100 }} >
                                <CircleIcon color='success'/>
                                <Typography>Active</Typography>
                                </Grid>:
                        (details.status.match('Break')) ?
                        <Grid sx={{ display:'flex', ml: 12, width: 100 }} >
                            <CircleIcon color='warning'/>
                            <Typography>Break</Typography>
                            </Grid>:
                            <Grid sx={{ display:'flex', ml: 10, width: 150 }} >
                                <CircleIcon color='error'/>
                            <Typography>Not Active</Typography>
                            </Grid>}
                        <Typography sx={{ mt: 1 }} >
                            Name: {details.name}
                        </Typography>
                        <Typography sx={{ mt: 1 }}>
                            NIC: {details.nic}
                        </Typography>
                        <Typography sx={{ mt: 1 }}>
                            Work Status: {details.status}
                        </Typography>
                        <Typography sx={{ mt: 1 }}>
                            From : {details.from}
                        </Typography>
                    </Box>
                </Box>}
            </Modal>
        </div>
    )
};

export default WorkingStatusBoard;