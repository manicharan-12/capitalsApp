// Write your code here

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

class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  changeCapital = event => {
    this.setState({id: event.target.value})
  }

  getFilteredData = () => {
    const {id} = this.state
    const filteredData = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === id,
    )
    return filteredData[0]
  }

  render() {
    const filteredData = this.getFilteredData()
    console.log(filteredData)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select onChange={this.changeCapital} value={filteredData.id}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.country}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p>{filteredData.capitalDisplayText}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
