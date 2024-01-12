import "./Cv.css"
import { useState } from "react";
import PaperCv from '@/components/Links/CV/IframeCv'

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