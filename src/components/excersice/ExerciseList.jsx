import { useRecoilState } from "recoil"
import { getExerciseList } from "../../api/getExerciseList"
import { selecetFoodAtom } from "../../atom/selecetFoodAtom"
import { useEffect, useState } from "react"
import { Container, Grid, Typography } from "@mui/material"
import AppWidgetSummary from "./app-widget-summary"

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

  console.log(exercise)


  return (
    <Container maxWidth="xl">
      <Typography variant="h6" sx={{ mb: 5 }}>
        {selectFood.foodName}의 칼로리를 빼려면?
      </Typography>
      <Grid container spacing={3}>
        {exercise.map((item, index) => {
          return (
            <Grid key={index} xs={12} sm={5} margin={"10px"}>
              <AppWidgetSummary
                item={item}
                title={`${item.운동명}-${item.소비시간}`}
                color="success"
                icon={<img alt="icon" src={`/images/glass/${index % 4}.png`} />}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}