import { createSlice } from '@reduxjs/toolkit'

import cake1 from '../components/images/cake1.jpg'
import cake2 from '../components/images/cake2.jpg'
import cake3 from '../components/images/cake3.jpg'
import balls from '../components/images/balls.jpg'
import bear from '../components/images/bear.jpg'
import cherry from '../components/images/cherry.jpg'
import butterfly from '../components/images/butterfly.jpg'
import balls_black from '../components/images/balls_black.jpg'
import fish from '../components/images/fish.jpg'
import flowers from '../components/images/flowers.jpg'
import leopard_pink from '../components/images/leopard_pink.jpg'
import icecreame_cakes from '../components/images/icecreame_cakes.jpg'
import mini_cakes from '../components/images/mini_cakes.jpg'
import open_fifteen from '../components/images/open_fifteen.jpg'
import open_five from '../components/images/open_five.jpg'
import panda from '../components/images/panda.jpg'
import peppa from '../components/images/peppa.jpg'
import pony from '../components/images/pony.jpg'
import wedding_hearts from '../components/images/wedding_hearts.jpg'
import crown_black from '../components/images/crown_black.jpg'
import pony4 from '../components/images/pony4.jpg'
import doll4 from '../components/images/doll4.jpg'
import pony_5 from '../components/images/pony_5.jpg'
import open_heart1 from '../components/images/open_heart1.jpg'
import open_heart5 from '../components/images/open_heart5.jpg'
import open_heart4 from '../components/images/open_heart4.jpg'
import open_heart3 from '../components/images/open_heart3.jpg'
import open_heart2 from '../components/images/open_heart2.jpg'
import pies1 from '../components/images/pies1.jpg'
import pies2 from '../components/images/pies2.jpg'
import pies3 from '../components/images/pies3.jpg'
import boss43 from '../components/images/boss43.jpg'
import sharky9 from '../components/images/sharky9.jpg'
import frogs from '../components/images/frogs.jpg'
import open_star from '../components/images/open_star.jpg'
import open_pies10 from '../components/images/open_pies10.jpg'
import yellow from '../components/images/yellow.jpg'
import open_peach from '../components/images/open_peach.jpg'
import honey1 from '../components/images/honey1.jpg'
import boy10 from '../components/images/boy10.jpg'
import lol3 from '../components/images/lol3.jpg'
import pony5 from '../components/images/pony5.jpg'
import red_cake from '../components/images/red_cake.jpg'
import cube8 from '../components/images/cube8.jpg'
import milka from '../components/images/milka.jpg'
import boy6 from '../components/images/boy6.jpg'
import set1 from '../components/images/set1.jpg'
import set2 from '../components/images/set2.jpg'
import set3 from '../components/images/set3.jpg'
import pink from '../components/images/pink.jpg'
import carrot from '../components/images/carrot.jpg'
import train6 from '../components/images/train6.jpg'
import truffle from '../components/images/truffle.jpg'
import cookies from '../components/images/cookies.jpg'
import raspberries from '../components/images/raspberries.jpg'
import strawberry from '../components/images/strawberry.jpg'
import popsicle1 from '../components/images/popsicle1.jpg'
import christening1 from '../components/images/christening1.jpg'
import christening2 from '../components/images/christening2.jpg'
import christening3 from '../components/images/christening3.jpg'
import wedding2 from '../components/images/wedding2.jpg'
import wedding3 from '../components/images/wedding3.jpg'


const cakesSlice = createSlice({
  name: 'cakes',
  initialState: {
    data: [
      {
        id: 1,
        category: 'children',
        title: 'Торт котик',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '500 г',
        image: cake1,
      },
      {
        id: 2,
        category: 'children',
        title: 'Торт 1 годик',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsum',
        weight: '1000 г',
        image: cake2,
      },
      {
        id: 3,
        category: 'for_men',
        title: 'Торт денб рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: cake3,
      },
      {
        id: 4,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт lorem ipsum Десерт lorem ipsumДесерт lorem ipsumДесерт lorem ipsumДесерт',
        weight: '1300 г',
        image: balls,
      },
      {
        id: 5,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: bear,
      },
      {
        id: 6,
        category: 'for_men',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: cherry,
      },
      {
        id: 7,
        category: 'children',
        title: 'Торт день рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: butterfly,
      },
      {
        id: 8,
        category: 'for_men',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: balls_black,
      },
      {
        id: 10,
        category: 'for_men',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: fish,
      },
      {
        id: 11,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: flowers,
      },
      {
        id: 12,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: leopard_pink,
      },
      {
        id: 13,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: icecreame_cakes,
      },
      {
        id: 14,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день!',
        weight: '1300 г',
        image: mini_cakes,
      },
      {
        id: 15,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: open_fifteen,
      },
      {
        id: 16,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_five,
      },
      {
        id: 17,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: panda,
      },
      {
        id: 18,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: peppa,
      },
      {
        id: 19,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Десерт ',
        weight: '1300 г',
        image: pony,
      },
      {
        id: 20,
        category: 'wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: wedding_hearts,
      },
      {
        id: 21,
        category: 'birthday',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: crown_black,
      },
      {
        id: 22,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: pony4,
      },
      {
        id: 23,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: doll4,
      },
      {
        id: 24,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: pony5,
      },
      {
        id: 25,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart1,
      },
      {
        id: 26,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart2,
      },
      {
        id: 27,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart3,
      },
      {
        id: 28,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        weight: '1300 г',
        image: open_heart4,
      },
      {
        id: 29,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_heart5,
      },
      {
        id: 30,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies1,
      },
      {
        id: 31,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies2,
      },
      {
        id: 32,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pies3,
      },
      {
        id: 33,
        category: 'for_men',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: boss43,
      },
      {
        id: 34,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: sharky9,
      },
      {
        id: 35,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: frogs,
      },
      {
        id: 36,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_star,
      },
      {
        id: 37,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_pies10,
      },
      {
        id: 38,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: yellow,
      },
      {
        id: 39,
        category: 'open',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: open_peach,
      },
      {
        id: 40,
        category: 'honey',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: honey1,
      },
      {
        id: 41,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: boy10,
      },
      {
        id: 42,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: lol3,
      },
      {
        id: 43,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pony_5,
      },
      {
        id: 44,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: red_cake,
      },
      {
        id: 45,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: cube8,
      },
      {
        id: 46,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: milka,
      },
      {
        id: 47,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: boy6,
      },
      {
        id: 48,
        category: 'set',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set1,
      },
      {
        id: 49,
        category: 'set',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set2,
      },
      {
        id: 50,
        category: 'set',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: set3,
      },
      {
        id: 51,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: pink,
      },
      {
        id: 52,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: carrot,
      },
      {
        id: 53,
        category: 'children',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: train6,
      },
      {
        id: 54,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: truffle,
      },
      {
        id: 55,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: cookies,
      },
      {
        id: 56,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: raspberries,
      },
      {
        id: 57,
        category: 'for_women',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: strawberry,
      },
      {
        id: 58,
        category: 'pie',
        title: 'Торт денб рождение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: popsicle1,
      },
      {
        id: 59,
        category: 'christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening1,
      },
      {
        id: 60,
        category: 'christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening2,
      },
      {
        id: 61,
        category: 'christening',
        title: 'Торт на Крещение',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: christening3,
      },
      {
        id: 62,
        category: 'wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding2,
      },
      {
        id: 63,
        category: 'wedding',
        title: 'Торт для свадьбы',
        subtitle: 'Идефльнийший десерт для Вашего праздника! Сочетание вкусов и интереснейший декор подымет настроиение и подарит Вашим гостям прекрасный день! ',
        image: wedding3,
      }

    ],
    pagesCounter: 5,
    page: 1,
    limit: 9,
    total: 0
  },
  reducers: {
    setCake: (state, action) => {

      console.log(action)
      state.data = action.payload
      console.log(state.data)
      // state.total = action.payload.total

      if (state.pagesCounter) return
      state.pagesCounter = Math.ceil(Number(action.payload.total / state.limit))
    }
  },

})

export const { setCake } = cakesSlice.actions
export const cakesReducer = cakesSlice.reducer
