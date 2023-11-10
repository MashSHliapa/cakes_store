import { useSelector } from "react-redux"
import { Title } from "../../components/Title"
import { FillingsCard } from "../../components/FillingsCard"
import { ComeBack } from "../../components/ComeBack"
import './Fillings.scss'

export function Fillings() {
  const fillingsState = useSelector((state) => state.fillings.data)
  const fillings = fillingsState.map((item) => <FillingsCard filling={item} key={item.id} />)

  return (
    <div className="chapter">
      <div className="chapter__come-back"><ComeBack /></div>
      <Title>Начинки</Title>
      <div className="chapter__list d-flex flex-wrap justify-content-center gap-4 mt-5">{fillings}</div>
    </div>
  )
}
