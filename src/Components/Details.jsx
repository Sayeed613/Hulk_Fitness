import { Button, Stack, Typography } from "@mui/material"
import YogaImg from "/icons/yoga.png"
import AbsImg from '/icons/ads.png'
import BodyWeightImg from "/icons/body-weigth.png"
const Details = ({exerciseDetails}) => {
    const {bodyPart , gifUrl, name , target, equipment} = exerciseDetails
    const extraDetails = [
        {
            icon: YogaImg,
            name : bodyPart,

        },
        {
            icon: AbsImg,
            name : target ,

        },
        {
            icon: BodyWeightImg,
            name : equipment,

        }
    ]
    console.log(gifUrl)
  return (
    <Stack gap="60px" sx={{flexDirection:{lg: "row"}, p:"20px",alignItems:"center" }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{gap:{lg:"35px", xs :"20px"}}}>
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="h6">
                Exercises keep you strong. {name} {' '}
                is one of the best exercises to target your {target}. it will help you
                improve your mood and gain energy
            </Typography>
           { extraDetails.map ((item) => (
                <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                <Button sx={{background:"#0a8c28", borderRadius:"50%", width:"100px", height:"100px"}}>
                    <img src={item.icon}  alt={bodyPart} style={{widht:"50px", height:"50px"}} />
                </Button>
                <Typography textTransform="capitalize" variant="h5">
                    {item.name}
                </Typography>
                </Stack>
           ))}
        </Stack>
    </Stack>
  )
}

export default Details
