import { useSelector } from 'react-redux'
import { CakesCard } from '../../components/CakesCard'
import './Cakes.scss'
export function Cakes() {
  const cakes = useSelector((state) => state.cakes.data) // для получения массива постов из store.

  const cakesAll = cakes.map((item) => <CakesCard cake={item} key={item.id} />)
  return (
    <div className="cakes">
      <ul className="cakes__list">
        {cakesAll}
      </ul>
    </div>
  )
}
