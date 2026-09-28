import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header'

function AppLayout() {
  return (
    <>
      <Header />

      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  )
}

export default AppLayout
