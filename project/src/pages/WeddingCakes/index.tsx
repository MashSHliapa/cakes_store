import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
export function WeddingCakes() {

  const cakes = useSelector((state) => state.cakes.data)
  const wedding_cakes = cakes.filter((item) => item.category === 'wedding')
  console.log(wedding_cakes)
  const wedding = wedding_cakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="wedding-cakes">
      <div className="wedding-cakes__title">Свадебные торты</div>
      <div className="wedding-cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{wedding}</div>
    </div>
  )
}
