import '@components/PageInnitialLoad/pageInnitialLoad.css'
import { useEffect, useState } from 'react';


const PageInnitialLoad = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      document.documentElement.style.setProperty('overflow', 'scroll');
      document.documentElement.style.setProperty('overflow-x', 'hidden');
    }, 2000);
  });

  return ( visible ?
    <>
      <div className='loadingPage'>
      </div>
      <div className='loadingPage_p2'>
      </div>
      <div className='loadingPage_3'>
      </div>
    </>
  : null)
}
export default PageInnitialLoad
