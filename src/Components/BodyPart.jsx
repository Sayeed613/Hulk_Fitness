import { Stack, Typography } from '@mui/material';
// import Icon from "/icons/body-part.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodypartImages = {
    all: "/icons/body-part.png",
    chest: "/icons/chest.png",
    back: "/icons/back.png",
    lowerarms: "/public/icons/lowerarms.png",
    upperarms: "/icons/upperarms.png",
    upperlegs: "/icons/upperlegs.png",
    lowerlegs: "/icons/lowerlegs.png",
    neck: "/icons/neck.png",
    cardio: "/icons/cardio.png",
    shoulder: "/icons/shoulder.png",
    waist: "/icons/waist.png",
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #0a5519', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={bodypartImages[item]} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};

export default BodyPart;