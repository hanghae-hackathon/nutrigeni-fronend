import { useRecoilState } from "recoil"
import { getExerciseList } from "../../api/getExerciseList"
import { selecetFoodAtom } from "../../atom/selecetFoodAtom"
import { useEffect, useState } from "react"
import { Container, Typography } from "@mui/material"

export default function ExerciseList() {
  const [selectFood] = useRecoilState(selecetFoodAtom)
  const [exercise, setExercise] = useState([])


  const getExercise = async() => {
    try {
      const res = await getExerciseList(selectFood.foodName)
      setExercise(res)
    } catch {
      console.log(error)
    }
  }

  useEffect(() => {
    getExercise()
  }, [])


  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

    </Container>
  )
}