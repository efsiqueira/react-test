import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ESPageLayout = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper>
      <Box flexDirection="column" justifyContent="space-between" height="100vh" display="flex" overflow-y={"hidden"}>
        <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
          <Outlet />
        </div>
        <BottomNavigation
          style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Início" icon={""} LinkComponent={Link} to="/" />
          <BottomNavigationAction label="Sobre" icon={""} LinkComponent={Link} to="/sobre" />
          <BottomNavigationAction label="Notícias" icon={""} LinkComponent={Link} to="/noticias" />
          <BottomNavigationAction label="Álbuns" icon={""} LinkComponent={Link} to="/albuns" />
        </BottomNavigation>
      </Box>
    </Paper>
  )
}

export default ESPageLayout