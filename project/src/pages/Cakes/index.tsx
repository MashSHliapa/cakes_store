import { CakeCard } from '../../components/CakeCard'
import cake1 from '../../components/images/cake1.png'
import cake2 from '../../components/images/cake2.jpg'
import cake3 from '../../components/images/cake3.jpg'
import balls from '../../components/images/balls.jpg'
import bear from '../../components/images/bear.jpg'
import cherry from '../../components/images/cherry.jpg'
import butterfly from '../../components/images/butterfly.jpg'
import balls_black from '../../components/images/balls_black.jpg'
import clouds from '../../components/images/clouds.jpg'
import fish from '../../components/images/fish.jpg'
import flowers from '../../components/images/flowers.jpg'
import leopard_pink from '../../components/images/leopard_pink.jpg'
import icecreame_cakes from '../../components/images/icecreame_cakes.jpg'
import mini_cakes from '../../components/images/mini_cakes.jpg'
import open_fifteen from '../../components/images/open_fifteen.jpg'
import open_five from '../../components/images/open_five.jpg'
import panda from '../../components/images/panda.jpg'
import peppa from '../../components/images/peppa.jpg'
import pony from '../../components/images/pony.jpg'
import wedding_hearts from '../../components/images/wedding_hearts.jpg'
import crown_black from '../../components/images/crown_black.jpg'

import './Cakes.scss'
export function CaKes() {
  const cakes = [
    {
      id: 1,
      title: 'Торт котик',
      subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
      weight: '500 г',
      price: '60 руб',
      image: cake1,
    },
    {
      id: 2,
      title: 'Торт 1 годик',
      subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
      price: '120 руб',
      weight: '1000 г',
      image: cake2,
    },
    {
      id: 3,
      title: 'Торт денб рождение',
      subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
      price: '180 руб',
      weight: '1300 г',
      image: cake3,
    },
    {
      id: 4,
      title: 'Торт день рождение',
      subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
      price: '180 руб',
      weight: '1300 г',
      image: balls,
    },
    {
      id: 5,
      title: 'Торт день рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: bear,
    },
    {
      id: 6,
      title: 'Торт день рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: cherry,
    },
    {
      id: 7,
      title: 'Торт день рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: butterfly,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: balls_black,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: clouds,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: fish,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: flowers,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: leopard_pink,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: icecreame_cakes,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: mini_cakes,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: open_fifteen,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: open_five,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: panda,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: peppa,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: pony,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: wedding_hearts,
    },
    {
      id: 7,
      title: 'Торт денб рождение',
      subtitle: 'Десерт ',
      price: '180 руб',
      weight: '1300 г',
      image: crown_black,
    },
  ]

  const cakesAll = cakes.map((item) => <CakeCard cake={item} key={item.id} />)
  return (
    <div className="cakes">
      <ul className="cakes__list">
        {cakesAll}
      </ul>
    </div>

  )
}
