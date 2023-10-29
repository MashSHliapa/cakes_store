import { Title } from '../../components/Title'
import './AboutMe.scss'

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container container">
        <Title>Обо мне</Title>
        <div className="about-me__blog">
          <div className="about-me__text"><span>Здравствуйте</span>, меня зовут Ольга, я домашний кондитер.
            Я имею техническое образование, в 2012 году я закончила БНТУ по специальности инженер строитель автомобильных дорог, прошла все ступени карьерной лестницы и уволилась в 2021 с должности начальника ППО и стала работать на себя.<br />
            <span>Меня</span> всегда привлекала кондитерское дело, в 2020 я закончила первые свои курсы и начала развивать свою страничку в социальных сетях.
            Прошло уже несколько лет, я очень люблю то, чем я занимаюсь. Меня часто называют Богиня медовиков. Я очень люблю эту начинку, она напоминает мне детство.<br /> <span>На</span> данный момент в моем арсенале более 20 отработанных начинок. Ко мне обращаться люди, которым нужен вкусный и запоминающийся торт на торжество, чтобы сделать жизнь немного слаще.
            <b>Своим заказчикам я всегда помогаю определиться с видом начинки и декора.</b>
            Результатом моей деятельности являются <em>счастливые люди, улыбающийся дети</em> и положительные отзывы моих клиентов. <em>Я делаю мир немного слаще, а людей - добрее.</em><br />
            <span>Доказательством</span> моего профессионализма является то, что мой контак передают по сарафанному радио, а клиенты возвращаться вновь за заказом!</div>
        </div>
      </div>
    </div>
  )
}
