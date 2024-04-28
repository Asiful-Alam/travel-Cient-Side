
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Root = () => {
   
  return (
    <div className="container mx-auto">
    
      <Outlet />
    <div className='mt-10'>
    <Footer></Footer>
    </div>
    </div>
  );
};

export default Root;