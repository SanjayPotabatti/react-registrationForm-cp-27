// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isFormSubmitted: false,
    firstNameErr: false,
    lastNameErr: false,
  }

  onBlurFirstName = () => {
    const {firstNameInput} = this.state

    if (firstNameInput !== '') {
      this.setState({firstNameErr: false})
    } else {
      this.setState({firstNameErr: true})
    }
  }

  onBlurLastName = () => {
    const {lastNameInput} = this.state

    if (lastNameInput !== '') {
      this.setState({lastNameErr: false})
    } else {
      this.setState({lastNameErr: true})
    }
  }

  onChangeLastName = event => {
    const {lastNameInput} = this.state

    this.setState({lastNameInput: event.target.value})
  }

  onChangeFirstName = event => {
    const {firstNameInput} = this.state

    this.setState({firstNameInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state

    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameErr: !(firstNameInput !== ''),
        lastNameErr: !(lastNameInput !== ''),
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderRegistrationForm = () => {
    const {
      firstNameErr,
      lastNameErr,
      firstNameInput,
      lastNameInput,
    } = this.state
    const className = firstNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'
    const classNameL = lastNameErr
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className={className}
            value={firstNameInput}
            placeholder="First Name"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
        </div>
        {firstNameErr && <p className="error-message">Required</p>}
        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className={classNameL}
            value={lastNameInput}
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
        </div>
        {lastNameErr && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
