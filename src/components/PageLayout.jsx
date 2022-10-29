import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ESPageLayout = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper >
      <Box flexDirection="column" justifyContent="space-between" height="100vh" display="flex">
        <Outlet />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={""} LinkComponent={Link} to="/" />
          <BottomNavigationAction label="About" icon={""} LinkComponent={Link} to="/sobre" />
          <BottomNavigationAction label="News" icon={""} LinkComponent={Link} to="/noticias" />
          <BottomNavigationAction label="Products" icon={""} LinkComponent={Link} to="/produtos" />
        </BottomNavigation>
      </Box>
    </Paper>
  )
}

export default ESPageLayout