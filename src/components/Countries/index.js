import './index.css'

const Countries = props => {
  const {details, clickCountry} = props
  const {id, name, imageUrl, isVisited} = details

  const clickedCountry = () => {
    clickCountry(id, name, imageUrl)
  }

  return (
    <li className="country">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button className="visit" type="button" onClick={clickedCountry}>
          Visit
        </button>
      )}
    </li>
  )
}
export default Countries
