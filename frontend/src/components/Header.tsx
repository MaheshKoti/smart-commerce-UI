import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Smart Commerce Platform
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>

        <Button color="inherit" component={Link} to="/products/new">
          Add Product
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header