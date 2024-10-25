import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import Travels from './components/travels/Travels';
import Verified from './components/verified/Verified';
import Works from './components/works/Works';
import './index.css'; 
function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Travels/>
      <Reviews/>
      <Verified/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
