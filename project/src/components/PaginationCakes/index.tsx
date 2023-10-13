import { NavLink } from 'react-router-dom'
import './Pagination.scss'
export function PaginationCakes() {

  function renderPagination() {
    const pagination = []
    let pageNumber = 1
    while (pageNumber < 8) {
      pagination.push(
        <li className="page-item" key={pageNumber}>
          <NavLink to={`/cakes/pages/${pageNumber}`} className={({ isActive }) =>
            isActive ? "page-link active" : "page-link"
          }>{pageNumber}</NavLink>
        </li >
      )
      pageNumber++
    }
    return pagination
  }

  return (
    <div className="pagination-cakes d-flex justify-content-around mt-5">
      <nav aria-label="page">
        <ul className="pagination ">
          {renderPagination()}
        </ul>
      </nav>
    </div>
  )
}
