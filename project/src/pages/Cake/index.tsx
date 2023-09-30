import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { CakeCard } from "../../components/CakeCard"

export function Cake(props) {
  const cakes = useSelector((state) => state.cakes.data) // для получения массива постов из store
  console.log(cakes)

  const { cakeId } = useParams<string>()
  console.log(cakeId)

  const selectCake = cakes.find((item) => item.id == cakeId)
  console.log(selectCake)

  return (
    <div className="cake">
      <CakeCard cake={selectCake} />
    </div>
  )
}
