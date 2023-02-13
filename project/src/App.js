import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './component/AppBar';
import Banner from './component/Banner';
import Menu from './component/Menu';
import ImageText from './component/ImageText';
import Forms from './component/Forms';

function App()
{
  return (
   <>
   <AppBar />
   <Banner/>
   <Menu/>
  <ImageText/>
  <Forms/>
  <div className='text-center mt-3 pt-3 small lead '>@Copyright 2022-2023</div>

   </>


  );
}

export default App;
