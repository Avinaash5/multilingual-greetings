import './index.css'

const LanguageTab = props => {
  const {eachLanguage} = props
  const {id, imageUrl, imageAltText} = eachLanguage

  return (
    <div key={id} className="container">
      <img src={imageUrl} alt={imageAltText} className="language-img" />
    </div>
  )
}

export default LanguageTab
