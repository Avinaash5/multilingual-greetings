import {Component} from 'react'

import './App.css'
import LanguageTab from './components/LanguageTab'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    filteredList: [languageGreetingsList[0]],
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = event => {
    this.setState({activeTabId: event.target.value})
    const activeLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.buttonText === event.target.value,
    )
    this.setState({filteredList: [...activeLanguage]})
  }

  render() {
    const {activeTabId, filteredList} = this.state
    console.log(filteredList)
    return (
      <div className="app-container">
        <h1> Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(eachLanguage => (
            <li key={eachLanguage.id} className="list-item">
              <button
                type="button"
                className="button-style"
                onClick={this.clickTabItem}
                value={eachLanguage.buttonText}
              >
                {eachLanguage.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <ul className="tab-container">
          {filteredList.map(eachLanguage => (
            <LanguageTab
              eachLanguage={eachLanguage}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === eachLanguage.id}
              key={eachLanguage.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
