import "./Cv.css"
import { useState } from "react";
import PaperCv from '@/components/Links/CV/IframeCv'
import { useEffect } from "react";

function CvLink(){
    const [show, toggleShow] = useState(false);
    
    // eslint-disable-next-line
    useEffect(() => {
      toggleShow(!show);
    }, [])
    const showToggleDelay = () => {
      if(show) {
        return <PaperCv />;
      } else {
        return <div/>
      }
    }
    return (
        <button onClick={() => toggleShow(!show)} className={show ? 'wrapper' : 'btn'}>
          {show ? "Close CV" : "Open CV"}
          { showToggleDelay() }
        </button>
        )
}
export default CvLink;