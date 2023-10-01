import { NavLink } from 'react-router-dom'
export function PaginationCakes() {

  function renderPagination() {
    const pagination = []
    let pageNumber = 1
    while (pageNumber < 5) {
      pagination.push(
        <li className="page-item mt-5" key={pageNumber}>
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
    <div className="pagination d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {renderPagination()}
        </ul>
      </nav>
    </div>
  )
}
