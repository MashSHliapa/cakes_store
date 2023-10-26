import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CakesCard } from '../../components/CakesCard'
import { PaginationCakes } from '../../components/PaginationCakes'
import { Title } from '../../components/Title'
import './Cakes.scss'
export function Cakes() {
  // const cakes = useSelector((state) => state.cakes.data) // для получения массива постов из store.

  const { data: cakes, pagesCounter, page } = useSelector((state) => state.cakes)
  const { pageNumber } = useParams()

  const cakesPage1 = cakes.slice(0, 12).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage2 = cakes.slice(12, 24).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage3 = cakes.slice(24, 36).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage4 = cakes.slice(36, 48).map((item) => <CakesCard cake={item} key={item.id} />)
  const cakesPage5 = cakes.slice(48, 58).map((item) => <CakesCard cake={item} key={item.id} />)
  // const cakesPage6 = cakes.slice(45, 54).map((item) => <CakesCard cake={item} key={item.id} />)
  // const cakesPage7 = cakes.slice(54, 58).map((item) => <CakesCard cake={item} key={item.id} />)

  return (
    <div className="cakes">
      <Title>Торты для Вашего праздника!</Title>
      <ul className="cakes__list">
        {pageNumber && parseInt(pageNumber) == 1 ? cakesPage1 : ''}
        {pageNumber && parseInt(pageNumber) == 2 ? cakesPage2 : ''}
        {pageNumber && parseInt(pageNumber) == 3 ? cakesPage3 : ''}
        {pageNumber && parseInt(pageNumber) == 4 ? cakesPage4 : ''}
        {pageNumber && parseInt(pageNumber) == 5 ? cakesPage5 : ''}
        {/* {pageNumber && parseInt(pageNumber) == 6 ? cakesPage6 : ''}
        {pageNumber && parseInt(pageNumber) == 7 ? cakesPage7 : ''} */}
      </ul>
      <PaginationCakes />
    </div>
  )
}
