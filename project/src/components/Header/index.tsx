import './Header.scss'

export function Header() {
  return (
    <div className="header">
      <div className="header__container">
        {/* <div className="header__logo">
          <a className="navbar-brand" href="#">Vanilla Crazy</a>
        </div> */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Vanilla Crazy</a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-between">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Торты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Свадебные торты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Детские торты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Пирожные</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Декорации</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Начинки</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Доставка</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Контакты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Обо мне</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
