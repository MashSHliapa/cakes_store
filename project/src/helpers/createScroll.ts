
 export function createScroll(pageElement) {
  let yOffset
  if (window.innerWidth < 768) {
    yOffset = 400
  } else if (window.innerWidth < 992) {
    yOffset = 500
  } else {
    yOffset = 650
  }
  const element = pageElement.current
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  element.removeEventListener('click', createScroll)
}



