
import './App.css';
import Navbar from './components/navbar';
import Headroom from 'react-headroom';
import Footer from './components/footer';
import Topsection from './components/topsection';
import Stories from './components/stories';
import Video from './components/video';
import DJ from '../src/components/stories/DJ'


function App() {
  return (
    <div className= ' min-h-[580dvh] max-h-[500dvh] flex flex-col'>
      <Headroom>
      <Navbar/>
      </Headroom>


      <Topsection/>
      <Video/>
      <Stories/>
      <DJ/>
      <Footer/>
    </div>
  );
}

export default App;
