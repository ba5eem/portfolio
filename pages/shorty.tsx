import { useState } from 'react'
import isURL from 'validator/lib/isURL';

const Shorty = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isURL(inputValue)) {
    callAPI(inputValue)
    // TODO: need to complete this step

    } else {
      setIsValid(false)
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setIsValid(true)
  }

  const callAPI = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  };

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
          {!isValid && <div className="error">Invalid URL</div>}

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
