import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"


import{exercisesOptions , fetchData, youtubeOptions} from "../Data/FetchData"
import Details from "../Components/Details"
import ExerciseVideos from "../Components/ExerciseVideos"
import SimilarExerciseVideos from "../Components/SimilarExerciseVideos"

export default function ExcerciseDetail() {
  const [exerciseDetails, setExercisesDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisedbUrl ="https://exercisedb.p.rapidapi.com";
      const youTubeUrl ="https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}` , exercisesOptions)
      // console.log({exerciseDetailData})
      setExercisesDetails(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youTubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      // console.log({exerciseVideosData})
      setExerciseVideos(exerciseVideosData.contents);

      const targetMusculeExercisesData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
      // console.log({targetMusculeExercisesData})
      settargetMuscleExercises(targetMusculeExercisesData);
      const equipmentMusculeExercisesData = await fetchData(`${exercisedbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
      // console.log({equipmentMusculeExercisesData})
      setEquipmentExercises(equipmentMusculeExercisesData);
    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} key={exerciseDetails.name}/>
      <SimilarExerciseVideos targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}
