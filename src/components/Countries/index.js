import './index.css'

const Countries = props => {
  const {details} = props
  const {name, isVisited} = details

  const btnText = isVisited ? 'Visited' : 'Visit'
  return (
    <li className="country">
      <p className="name">{name}</p>
      <button type="button">{btnText}</button>
    </li>
  )
}
export default Countries
