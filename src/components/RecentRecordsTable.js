import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const columnsLeave = [
    { field: 'date', headerName: 'Date', width: 220 },
    { field: 'type', headerName: 'Leave Type', width: 170 },
    { field: 'duration', headerName: 'Duration', width: 170 }
]


const RecentRecordsTable = (props) => {
    return (
        <div style={{ height: 400, width: '100%', ...style }} >
            <DataGrid
                sx={{ backgroundColor: 'white' }}
                rows={
                    props.leaveDetails.slice(-5).map((leaveDetail) => {
                        return {
                            id: leaveDetail.leaveId,
                            date: leaveDetail.date.slice(0, 10),
                            type: leaveDetail.type,
                            duration: `${leaveDetail.duration * 8} Hours`
                        };
                    })}
                columns={columnsLeave}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            </div>
    )
};

export default RecentRecordsTable;