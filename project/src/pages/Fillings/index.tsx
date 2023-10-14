import { useSelector } from "react-redux";
import { CakeCard } from "../../components/CakeCard";
import { Title } from "../../components/Title";

export function Fillings() {
  const fillingsState = useSelector((state) => state.fillings.data)
  const fillings = fillingsState.map((item) => <CakeCard cake={item} key={item.id} />)

  return (
    <div className="children_cakes">
      <Title>Начинки</Title>
      <div className="children_cakes__list d-flex flex-wrap justify-content-center gap-2 m-3">{fillings}</div>
    </div>
  )
}
