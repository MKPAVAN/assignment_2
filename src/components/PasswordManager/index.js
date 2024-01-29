import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PasswordManger extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    passwordsList: [],
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  addNewPassword = event => {
    event.preventDefault()
    const {website, userName, password, isVisible} = this.state
    let starredPassword =
      'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
    if (isVisible) {
      starredPassword = password
    }

    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password: starredPassword,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      userName: '',
      password: '',
      isVisible: false,
    }))
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}))
  }

  render() {
    const {website, userName, password, passwordsList} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />

        <div className="top-container">
          <form className="form-container" onSubmit={this.addNewPassword}>
            <h1 className="head">Add New Password</h1>
            <div className="input-ele-cont">
              <img
                className="input-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <hr />
              <input
                value={website}
                onChange={this.onChangeWebsite}
                className="form-input-ele"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-ele-cont">
              <img
                className="input-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="website"
              />
              <hr />
              <input
                value={userName}
                onChange={this.onChangeUserName}
                className="form-input-ele"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-ele-cont">
              <img
                className="input-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="website"
              />
              <hr />
              <input
                value={password}
                className="form-input-ele"
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="bottom-container">
          <div className="search-header">
            <h1>Your Passwords</h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <hr />
              <input className="search-element" type="search" />
            </div>
          </div>
          <hr className="hr-line" />
          <input
            id="checkbox"
            className="checkbox"
            type="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <label htmlFor="checkbox" className="label">
            show Passwords
          </label>

          {passwordsList.length === 0 ? (
            <div className="noPassword-image-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="unordered-list-cont">
              {passwordsList.map(eachPassword => (
                <PasswordItem details={eachPassword} key={eachPassword.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManger
