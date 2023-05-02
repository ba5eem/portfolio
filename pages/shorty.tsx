import { useState } from 'react'

const Shorty = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <div>
      <div className="contact-container">
        <h1>Shorten your URL</h1>
          <form onSubmit={handleSubmit}>
          <label>
            Enter Url:
            <input className="input-url" type="text" value={inputValue} onChange={handleInputChange} />
          </label>
          <button className="input-url-submit" type="submit">Submit</button>
        </form>
        <button className="short-url" type="submit"></button>

      </div>

      <div className="skills-container">
          <h2>Made with</h2>
          <div className="grid-skills">
            <div className="skill-card node">
              <p>Node</p>
            </div>
            <div className="skill-card docker">
              <p>Prisma</p>
            </div>
          </div>
        </div>

    </div>
  )
}


export default Shorty;
