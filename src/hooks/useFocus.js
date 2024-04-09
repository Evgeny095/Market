import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const useFocus = () => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    scrolling(ref);
  }, [location.pathname]);

  return ref;
};

function scrolling(ref){
    if(ref.current){
        ref.current.scrollIntoView({ behavior: 'smooth' });
   }
   else{
        setTimeout(() => {
           if(ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
        }, 300);
   }
}



export default useFocus;