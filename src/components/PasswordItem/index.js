import './index.css'

const PasswordItem = props => {
  const {details} = props
  const {website, userName, password} = details

  return (
    <li className="list-item">
      <p className="initial">{website[0]}</p>
      <div>
        <p className="para">{website}</p>
        <p className="para">{userName}</p>
        <img className="stared-password" src={password} alt="stars" />
      </div>
      <button type="button" className="delete-button">
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
