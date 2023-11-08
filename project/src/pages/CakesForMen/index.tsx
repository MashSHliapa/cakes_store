import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
import { LookAll } from "../../components/LookAll"
export function CakesForMen() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterCakes = cakes.filter((item) => item.category === 'for_men')
  const cakesForMen = filterCakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="chapter">
      <LookAll/>
      <Title>Торты для мужчин</Title>
      <div className="chapter__list d-flex flex-wrap justify-content-center gap-2 m-3">{cakesForMen}</div>
    </div>
  )
}
