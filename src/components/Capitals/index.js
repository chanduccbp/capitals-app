import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = activeCapitalId => {
    const reqCountry = countryAndCapitalsList.find(
      eachObj => eachObj.id === activeCapitalId,
    )

    return reqCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              onChange={this.onChangeCapital}
              value={activeCapitalId}
              id="capitals"
              className="dropdown"
            >
              {countryAndCapitalsList.map(eachObj => (
                <option value={eachObj.id} key={eachObj.id}>
                  {eachObj.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" className="label">
              is capital of which country?
            </label>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
