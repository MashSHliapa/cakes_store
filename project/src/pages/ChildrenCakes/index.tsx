import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
export function ChildrenCakes() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterCakes = cakes.filter((item) => item.category === 'children')
  const childrenCakes = filterCakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="children_cakes">
      <Title>Торты для детей</Title>
      <div className="children_cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{childrenCakes}</div>
    </div>
  )
}
