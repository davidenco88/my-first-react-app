import scarecrow from './assets/scarecrow.png'
import './App.css'

function App() {

  return (
    <>
      <header>
        <p>404 NOT FOUND</p>
      </header>

      <main>
        <div id="img-container">
          <img src={scarecrow} alt="scarecrow"/>
        </div>
        <div id="information-container">
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporaly unavailable</p>
          <button>
            BACK TO HOMEPAGE
          </button>
        </div>    
      </main>
      <footer>        
          Created by <a href="#"> David Sarria </a> - devCallenges.io
      </footer>
    </>
  )
}

export default App
