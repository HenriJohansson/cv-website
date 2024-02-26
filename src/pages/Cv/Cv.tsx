import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import HyperLink from '@components/Links/HyperLink';
import { Download } from '@components/Icons/Download';
import { useWindowDimensions } from '@components/util/WindowDimensions';
import { X } from '@components/Icons/X';


function Cv() {
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true");
  const [disclaimer, setDisclaimer] = useState("");
  const [downloadFull, setDownloadFull] = useState("");

  const windowDims = useWindowDimensions()
  const [width, setWidth] = useState(windowDims.width - (16*4) + "px")
  const loadingDone = () => {
    setLoading(false);
  }
  const googleDocsDownloadLink = "https://docs.google.com/document/d/1Wn6mfjrgqCSfnwH_H8T4rL0XjOp88_zVKDWiBHWsiFE/export?format=pdf";


  useEffect(() => {
    if(windowDims.width <= 570) {
      setSource("https://docs.google.com/document/d/e/2PACX-1vTk_Te-1oBj1r7qZu7GYV4MvtDnX6CWXpkwo4YEjboZb0t1lCFcWskgytlytIM1G3TVH4TVQ46IzAXl/pub?embedded=true");
      setDisclaimer("Mobile Version");
      setDownloadFull("Download normal layout ->");
      setWidth(windowDims.width + "px")
    } else {
      setSource("https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true");
      setDisclaimer("");
      setDownloadFull("");
      setWidth(windowDims.width - (16*4) + "px")
    }
  },[windowDims.width])

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
        {disclaimer ?
        <><p id="disclaimer">{disclaimer}</p><p>{downloadFull}</p></> : null}
        <HyperLink abbreviationOrIcon={Download} href={googleDocsDownloadLink}></HyperLink>
        <HyperLink className="close" abbreviationOrIcon={X} href="#"></HyperLink>
      </div>
      <iframe
        name={"Cv"/*"https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true"*/}
        src={source}
        onLoad={loadingDone}
        style={styleiFrame}
        allow="picture-in-picture full">
        </iframe>
    </div>
  );
}

export default Cv;
