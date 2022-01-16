import './App.scss';
import Heading from './Heading';
import Navbar from './Navbar';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

function App() {
  return (
    <div className="App">
      <div className="content container-fluid">
        <Navbar />
        <Heading />
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

export default App;
