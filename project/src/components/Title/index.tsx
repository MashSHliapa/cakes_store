import './Title.scss'

export function Title(props) {
  return (
    <div className="title">
      <div className="title__text">{props.children}</div>
      <div className="title__separator"></div>
    </div>
  )
}
