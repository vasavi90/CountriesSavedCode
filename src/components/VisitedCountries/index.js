import './index.css'

const VisitedCountries = props => {
  const {details, onDelete} = props
  const {id, name, imageUrl} = details
  const deleteCountry = () => {
    onDelete(id)
  }

  return (
    <li className="each-country">
      <img src={imageUrl} className="image" alt="thumbnail" />
      <div className="container">
        <p className="name">{name}</p>
        <button type="button" className="button" onClick={deleteCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
