import { createSlice } from '@reduxjs/toolkit'

import filling_honey_blackcurrant from '../components/images/filling_honey_blackcurrant.jpg'
import filling_spartac from '../components/images/filling_spartac.jpg'
import filling_milk from '../components/images/filling_milk.jpg'
import filling_moussehoney from '../components/images/filling_moussehoney.jpg'
import filling_carrot from '../components/images/filling_carrot.jpg'
import filling_classicalhoney from '../components/images/filling_classicalhoney.jpg'
import filling_oreo from '../components/images/filling_oreo.jpg'
import filling_potatos from '../components/images/filling_potatos.jpg'
import filling_chokwithoreo from '../components/images/filling_chokwithoreo.jpg'
import filling_napoleon from '../components/images/filling_napoleon.jpg'
import filling_napoleonC from '../components/images/filling_napoleonC.jpg'
import filling_honeyberries from '../components/images/filling_honeyberries.jpg'
import filling_chok3 from '../components/images/filling_chok3.jpg'
import filling_velvet from '../components/images/filling_velvet.jpg'
import roll from '../components/images/roll.jpg'
import filling_tenderness from '../components/images/filling_tenderness.jpg'

const fillingsSlice = createSlice({
  name: 'fillings',
  initialState: {
    data : [
      {
        id: 1,
        category: 'fillings',
        title: 'Бисквитный медовик с черной смородиной',
        subtitle: 'Воздушные медовые бисквиты, конфи с чёрной смородиной мягкий мармелад из чёрной смородины и сливочной смородиновый крем',
        weight: '2,0 кг',
        image: filling_honey_blackcurrant,
      },
      {
        id: 2,
        category: 'fillings',
        title: 'Шоколадный медовик "Спартак"',
        subtitle: 'Песочное шоколадные медовые коржи плюс сметанно-сливочный крем. Минимальный вес 1 кг в обсыпке, в креме 1,5 кг ',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        weight: '1,6 кг',
        image: filling_spartac,
      },
      {
        id: 3,
        category: 'fillings',
        title: 'Птичье молоко',
        subtitle: 'Ванильный бисквит + воздушное суфле + ганаш на темном шоколаде ',
        weight: '0,8 кг',
        image: filling_milk,
      },
      {
        id: 4,
        category: 'fillings',
        title: 'Муссовый медовик',
        subtitle: 'Медовые коржи, сметанно-сливочный крем, воздушный мусс на основе белого шоколада, покрыт глянцевой глазурью',
        weight: '0,9 кг',
        image: filling_moussehoney,
      },
      {
        id: 5,
        category: 'fillings',
        title: 'Морковный тортик с апельсином/вишней ',
        subtitle: 'Морковные бисквиты с добавлением грецкого ореха, мака + крем чиз на сливках + апельсиновый курд/вишневое кули + апельсиновое/вишневое конфи',
        weight: '2,7 кг',
        image: filling_carrot,
      },
      {
        id: 6,
        category: 'fillings',
        title: 'Классический медовик',
        subtitle: 'Песочное медовые коржи плюс сметанно-сливочный крем. Возможно добавить ягодный наполнитель в виде вишни, смородины, клубники, клюквы',
        weight: '1,6 кг',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        image: filling_classicalhoney,
      },
      {
        id: 7,
        category: 'fillings',
        title: 'Чизкейк "Oreo"',
        subtitle: 'Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить',
        weight: 'от 6-ти шт.',
        image: filling_oreo,
      },
      {
        id: 8,
        category: 'fillings',
        title: 'Эскимо " Пирожное Картошка"',
        subtitle: 'Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить Контент надо добавить',
        weight: 'от 6-ти шт.',
        image: filling_potatos,
      },
      {
        id: 9,
        category: 'fillings',
        title: 'Шоколадный с чизкейком oreo',
        subtitle: 'Сочный шоколадный бисквит, мусс на молочном шоколаде, запечённый чизкейк с печеньем oreo и шоколадный крем',
        weight: '2,7 кг',
        image: filling_chokwithoreo,
      },
      {
        id: 10,
        category: 'fillings',
        title: 'Карамельный наполеон',
        subtitle: 'Безумно слоеное тесто (по структуре напоминает пирожное из детства “Язычок”) + карамельный заварной крем + нежная карамель',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,6 кг',
        image: filling_napoleonC,
      },
      {
        id: 11,
        category: 'fillings',
        title: 'Наполеон с заварным кремом на белом шоколаде',
        subtitle: 'Нежные слоистые коржи+ заварной крем с добавлением белого шоколада ',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,3 кг',
        image: filling_napoleon,
      },
      {
        id: 12,
        category: 'fillings',
        title: 'Классический медовик',
        subtitle: 'Песочное медовые коржи плюс сметанно-сливочный крем. Возможно добавить ягодный наполнитель в виде вишни, смородины, клубники, клюквы',
        weight: '1,0 кг',
        image: filling_honeyberries,
      },
      {
        id: 13,
        category: 'fillings',
        title: 'Муссовый торт “Три шоколада”',
        subtitle: 'Шоколадный брауни + три прослойки мусса с добавлением темного, молочного и белого шоколада',
        // realization: 'Изготовлю весом 1,6 кг, ',
        weight: '1,5 кг',
        image: filling_chok3,
      },
      {
        id: 14,
        category: 'fillings',
        title: 'Бархатный бисквитный медовик с клюквой',
        subtitle: 'Нежные медовые бисквиты + сметанно сливочный крем + кули из клюквы',
        // realization: 'Изготовлю весом 1,6 кг, 2,0 кг и более',
        weight: '1,5 кг',
        image: filling_velvet,
      },
      {
        id: 15,
        category: 'fillings',
        title: 'Меренговый рулет',
        subtitle: 'Меренговое суфле + крем-чиз на сливках + ягодное кули ',
        weight: '1,0 кг',
        image: roll,
      },
      {
        id: 16,
        category: 'fillings',
        title: 'Бисквитный медовик "карамельная нежность"',
        subtitle: 'Воздушные медовые бисквиты в прослойке сметанно-сливочный крем и нежная сливочная карамель',
        weight: '2,0 кг',
        image: filling_tenderness,
      },
    ]
  },
  reducers: {
    setFillings(state, action) {
      state.data = action.payload
    }
  }
})

export const { setFillings } = fillingsSlice.actions
export const fillingsReducer = fillingsSlice.reducer