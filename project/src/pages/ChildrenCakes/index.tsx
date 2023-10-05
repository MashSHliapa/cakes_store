import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
import { Title } from "../../components/Title"
export function ChildrenCakes() {

  const cakes = useSelector((state) => state.cakes.data)
  const filterChildrenCakes = cakes.filter((item) => item.category === 'children')

  const childrenCakes = filterChildrenCakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="children_cakes">
      <Title>Детские торты</Title>
      <div className="children_cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{childrenCakes}</div>
    </div>
  )
}
