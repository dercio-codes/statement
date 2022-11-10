import { Box, Divider } from "@mui/material";
import { Events } from "../components/events";


export default function Home() {
  return (
    <Box sx={{ overflowY:'auto' , background:'#111' }}>
<Events />
    </Box>
  );
}