import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
import { LookAll } from "../../components/LookAll"

export function Pies() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterPies = cakes.filter((item) => item.category === 'pie')
  const pies = filterPies.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="chapter">
      <LookAll/>
      <Title>Пирожные</Title>
      <div className="chapter__list d-flex flex-wrap justify-content-center gap-2 m-3">{pies}</div>
    </div>
  )
}
