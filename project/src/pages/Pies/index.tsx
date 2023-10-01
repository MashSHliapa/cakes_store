import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
export function Pies() {

  const cakes = useSelector((state) => state.cakes.data)
  const pie_cakes = cakes.filter((item) => item.category === 'pie')

  const pie = pie_cakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="pies">
      <div className="pies__title">Пирожные</div>
      <div className="pies__list d-flex flex-wrap justify-content-center gap-2 m-3">{pie}</div>
    </div>
  )
}
