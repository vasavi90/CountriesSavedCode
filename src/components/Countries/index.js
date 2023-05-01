import './index.css'

const Countries = props => {
  const {details, clickCountry} = props
  const {id, name, isVisited} = details

  const clickedCountry = () => {
    clickCountry(id)
  }

  const classNameBtn = isVisited ? 'visited' : 'visit'
  const btnText = isVisited ? 'Visited' : 'Visit'
  return (
    <li className="country">
      <p className="name">{name}</p>
      <button className={classNameBtn} type="button" onClick={clickedCountry}>
        {btnText}
      </button>
    </li>
  )
}
export default Countries
