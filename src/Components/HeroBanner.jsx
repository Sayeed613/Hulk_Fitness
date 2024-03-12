import { Box,  Typography , Button} from "@mui/material"
import Banner from "/images/banner.png"

 const HeroBanner = ()=>  {
  return (
    <Box sx={{
        mt: {lg : "212px", xs : '70px'},
        ml: {sm:"50px"}
    }} position="relative" p="20px">
        <Typography color="#0a5519" fontWeight="600" fontSize="26px">
            Hulk Fitness
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            We Train ,<br />     You Grow
            </Typography>
            <Typography fontSize="22px" lineHeight="35px"  mb={4}>
            Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="success" href="#exercises"sx={{backgroundColor: "#0a8c28", padding: "10px"}} >
                Explore Exercise
            </Button>
            <Typography
            font-weight={600}
            fontSize="200px"

            color="#0a8c28"
            sx={{
                opacity: 0.1,
                display: {lg : "block", xs : "none"}
            }}
            >
                Exercise
            </Typography>
            <img src={Banner} alt="banner"className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner;