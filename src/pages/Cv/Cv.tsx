import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import HyperLink from '@components/Links/HyperLink';
import { X } from '@components/Icons/X';
import { Download } from '@components/Icons/Download';
import { useWindowDimensions } from '@components/util/WindowDimensions';


function Cv() {
  const [loading, setLoading] = useState(true);
  const loadingDone = () => {
    setLoading(false);
  }
  const googleDocsDownloadLink = "https://docs.google.com/document/d/1Wn6mfjrgqCSfnwH_H8T4rL0XjOp88_zVKDWiBHWsiFE/export?format=pdf"

  const windowDims = useWindowDimensions()

  const width: string = windowDims.width + "px"
  const styleiFrame = {
    display: "block",
    height: "100%",
    width: width,
    border: 0,
    }
  return (
    <div className="content">
      {loading ? (<LinearProgress />) : null}
      <div className='actions'>
        <HyperLink abbreviationOrIcon={Download} href={googleDocsDownloadLink}></HyperLink>
        <X className="close" href="#"></X>
      </div>
      <iframe
        name={"Cv"/*"https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true"*/}
        src="https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true"
        onLoad={loadingDone}
        style={styleiFrame}
        allow="picture-in-picture full">
        </iframe>
    </div>
  );
}

export default Cv;
