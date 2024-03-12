import { Stack } from "@mui/material";
import { DNA } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
    </Stack>
  )
}

export default Loader
