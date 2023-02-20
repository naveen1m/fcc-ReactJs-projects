
import './App.css';
import Reviews from './Reviews';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
          <Reviews />
        </div>
      </section>
    </main>
  );
}

export default App;
