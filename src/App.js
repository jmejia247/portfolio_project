import image from './IMG_4708.jpg'
import projectOne from './battle.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className='sidebar'>
        <div className='profile-picture'>
          <img src={image} alt='headshot' height='122' width='122' className='profile-image'/>
        </div>
        <ul>
          <li>
            <a href='#background' >Welcome</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#footer'>Contact me!</a>
          </li>
        </ul>
      </aside>


      <section className='background' id='background'>
        <h1>Background</h1>
        <p>Before plunging into this software engineering journey, I was working as a barista at Starbucks in Manhattan. I had taken some time off from school to become a certified Aircraft Mechanic. Soon after passing my exams and being certified, the pandemic went into full swing (as well as affecting the airline industry), leaving me with an abundance of time on my hand. I knew I wanted to go back to school and continue my education and after much thought and consideration I made the decision to attend App Academy. A decision I have come to love, as well as my new found passion!</p>
        <div className='contact-me'>
          <a href='#footer'>Contact Me!</a>
        </div>
      </section>

      <section className='projects' id='projects'>

        <ul>
          <li className='project-one'>
            <img src={projectOne} height='220' width='200' alt='placeholder' className='project-img'></img>
            {/* <div className='project-img'></div> */}
            <section className='project-content'>
              <h4>Battle for Yavin</h4>
              <p>Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!! This game was made using vanilla JS. Making use of such technologies such as canvasJS</p>
              <div className='contact-me'>
              <a href='https://jmejia247.github.io/BattleForYavin/'>Live Site</a>
              </div>
            </section>
          </li>

          <li className='project-one'>
            <img src={projectOne} height='220' width='200' alt='placeholder' className='project-img'></img>
            {/* <div className='project-img'></div> */}
            <section className='project-content'>
              <h4>Battle for Yavin</h4>
              <p>Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!! This game was made using vanilla JS. Making use of such technologies such as canvasJS</p>
              <div className='contact-me'>
              <a href='https://jmejia247.github.io/BattleForYavin/'>Live Site</a>
              </div>
            </section>
          </li>

          <li className='project-one'>
            <img src={projectOne} height='220' width='200' alt='placeholder' className='project-img'></img>
            {/* <div className='project-img'></div> */}
            <section className='project-content'>
              <h4>Battle for Yavin</h4>
              <p>Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!! This game was made using vanilla JS. Making use of such technologies such as canvasJS</p>
              <div className='contact-me'>
              <a href='https://jmejia247.github.io/BattleForYavin/'>Live Site</a>
              </div>
            </section>
          </li>

          <li className='project-one'>
            <img src={projectOne} height='220' width='200' alt='placeholder' className='project-img'></img>
            {/* <div className='project-img'></div> */}
            <section className='project-content'>
              <h4>Battle for Yavin</h4>
              <p>Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!! This game was made using vanilla JS. Making use of such technologies such as canvasJS</p>
              <div className='contact-me'>
              <a href='https://jmejia247.github.io/BattleForYavin/'>Live Site</a>
              </div>
            </section>
          </li>
          <li className='project-one'>
            <img src={projectOne} height='220' width='200' alt='placeholder' className='project-img'></img>
            {/* <div className='project-img'></div> */}
            <section className='project-content'>
              <h4>Battle for Yavin</h4>
              <p>Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!! This game was made using vanilla JS. Making use of such technologies such as canvasJS</p>
              <div className='contact-me'>
              <a href='https://jmejia247.github.io/BattleForYavin/'>Live Site</a>
              </div>
            </section>
          </li>



        </ul>

      </section>

      <section className='skills' id='skills'>
      <h1>Skills:</h1>
      <p>These are a highlight of some of my skills, and just like tech, it is always evolving.</p>

      <div className='skill-card'>
        <div>icon</div>
        <section>
          <h1>React</h1>
          <p>for the past 3 years, i have been teaching react</p>
          <h1>Express</h1>
          <p>for the past 3 years, i have been teaching express</p>
          <h1>Python</h1>
          <p>for the past year, i have been working as a python developer</p>
        </section>
      </div>
      </section>

      <footer className='footer' id='footer'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </footer>
    </div>
  );
}

export default App;
