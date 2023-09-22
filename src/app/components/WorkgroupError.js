import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';

export default function WorkgroupError(){
    return (
        <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
            <Alert variant="solid" color="danger" sx={{ width : '50%', fontSize: '18px'}} className="mx-auto mt-5">Please select a workgroup first.</Alert>
        </Box>
    )
}