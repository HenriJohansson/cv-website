import "./Cv.css"
import { useState } from "react";
import PaperCv from '@/components/CV/PaperCv'

function CvLink(){
    const [show, toggleShow] = useState(false);

    return (
        <button onClick={() => toggleShow(!show)} className={show ? 'wrapper' : 'btn'}>
          {show ? "Hide" : "Show"}
          {show && <PaperCv />}
        </button>
        )
}
export default CvLink;