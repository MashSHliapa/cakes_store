import { useSelector } from "react-redux"
import { CakesCard } from "../../components/CakesCard"
export function ChildrenCakes() {

  const cakes = useSelector((state) => state.cakes.data)
  const children_cakes = cakes.filter((item) => item.category === 'children')
  console.log(children_cakes)
  const children = children_cakes.map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="children_cakes-cakes">
      <div className="children_cakes__title">Детские торты</div>
      <div className="children_cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{children}</div>
    </div>
  )
}
