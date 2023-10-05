import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
export function WeddingCakes() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterWeddingCakes = cakes.filter((item) => item.category === 'wedding')

  const weddingCakes = filterWeddingCakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="wedding-cakes">
      <Title>Свадебные торты</Title>
      <div className="wedding-cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{weddingCakes}</div>
    </div>
  )
}
