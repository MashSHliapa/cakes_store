import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CakesCard } from '../../components/CakesCard'
import './Cakes.scss'
import { PaginationCakes } from '../../components/PaginationCakes'
export function Cakes() {
  const cakes = useSelector((state) => state.cakes.data) // для получения массива постов из store.
  const { pageNumber } = useParams()

  const cakesPage1 = cakes.slice(0, 6).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage2 = cakes.slice(6, 12).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage3 = cakes.slice(12, 18).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage4 = cakes.slice(18, 20).map((item) => <CakesCard cake={item} key={item.id} />)
  return (
    <div className="cakes">
      <ul className="cakes__list">
        {pageNumber && parseInt(pageNumber) == 1 ? cakesPage1 : ''}
        {pageNumber && parseInt(pageNumber) == 2 ? cakesPage2 : ''}
        {pageNumber && parseInt(pageNumber) == 3 ? cakesPage3 : ''}
        {pageNumber && parseInt(pageNumber) == 4 ? cakesPage4 : ''}
      </ul>
      <PaginationCakes />
    </div>
  )
}
