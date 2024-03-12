import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '/images/logo.png'
const  Navbar = () =>  {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: '32px', xs: "20px" } , justifyContent:"none"}} px="20px"
    >
      <Link to="/">
      <img src={logo} alt="logo" style={{width : "90px", height: "90px", margin: " 0 20px"}}  />
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        {/* <Link to="/" style={{ color:"#253324", borderBottom:"1px solid #18b400"}}>Home</Link> */}
        <Link to="/" style={{textDecoration:"none",  color:"#253324", borderBottom:"1px solid #18b400" }}>Home</Link>
        <a href="#exercises" style={
          {textDecoration:"none", color:"#253324"}
        }>Exercises</a>

      </Stack>
    </Stack>
  )
}

export default Navbar;