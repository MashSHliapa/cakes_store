import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
export function Pies() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterPies = cakes.filter((item) => item.category === 'pie')
  const pie = filterPies.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="pies">
      <Title>Пирожные</Title>
      <div className="pies__list d-flex flex-wrap justify-content-center gap-2 m-3">{pie}</div>
    </div>
  )
}
