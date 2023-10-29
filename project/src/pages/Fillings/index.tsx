import { useSelector } from "react-redux"
import { Title } from "../../components/Title"
import { FillingsCard } from "../../components/FillingsCard"

export function Fillings() {
  const fillingsState = useSelector((state) => state.fillings.data)
  const fillings = fillingsState.map((item) => <FillingsCard filling={item} key={item.id} />)

  return (
    <div className="children_cakes">
      <Title>Начинки</Title>
      <div className="children_cakes__list d-flex flex-wrap justify-content-center gap-4 mt-5">{fillings}</div>
    </div>
  )
}
