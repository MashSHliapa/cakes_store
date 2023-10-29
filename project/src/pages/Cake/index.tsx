import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { CakeCard } from "../../components/CakeCard"
import { Title } from "../../components/Title"
import { FillingsCard } from "../../components/FillingsCard"
import { Contacts } from "../../components/Contacts"
import './Cake.scss'

export function Cake() {
  const cakes = useSelector((state) => state.cakes.data) // для получения массива постов из store
  console.log(cakes)

  const { cakeId } = useParams<string>()
  console.log(cakeId)

  const selectCake = cakes.find((item) => item.id == cakeId)
  console.log(selectCake)

  ///////////// filings
  // const fillings = useSelector((state) => state.fillings.data)
  // const filterHoneyCakes = fillings.filter((item) => item.category === 'honneyCake')
  // const honeyCakes = filterHoneyCakes.map((item) => <FillingsCard filling={item} key={item.id} />)

  return (
    <div className="cake">
      <Title>{selectCake?.title}</Title>
      <div className="cake__data">
        <CakeCard cake={selectCake} />
        <div className="cake__blog">
          <div className="cake__slogan">Для создания выбранного Вами угощения используются только натуральные и качественные ингредиенты!</div>
          <div className="cake__condition">Вы также можете выбрать и изменить декор по Вашему усмотрению. Все подробности оговариваются индивидуально в соответствии с Вашими пожеланиями!</div>
          <div className="cake__contacts"><Contacts/></div>
        </div>
      </div>
      {/* <Title>Возможные начинки</Title>
      <div className="cake__fillings">
        <div className="cake__condition">Если Вы хотите Медовик в данном исполнении</div>
        <div className="cake__fillings-honey">{honeyCakes}</div>
      </div> */}
    </div>
  )
}
