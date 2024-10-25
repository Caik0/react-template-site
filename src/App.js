import './App.css';
import Header from './components/Header';
import ImageCarousel from './components/utilities/Imagecarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bg-violet-400">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;
