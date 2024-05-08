import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import HyperLink from '@components/links/HyperLink';
import { Download } from '@components/Icons/Download';
import { useWindowDimensions } from '@components/util/WindowDimensions';
import { X } from '@components/Icons/X';

type Cv = {
  mobile: string, desktop: string, download: string
}

function Cv() {
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(import.meta.env.VITE_CV_DESKTOP);
  const [disclaimer, setDisclaimer] = useState("");
  const [downloadFull, setDownloadFull] = useState("");
  const windowDims = useWindowDimensions()
  const [width, setWidth] = useState(windowDims.width - (16*4) + "px")
  const loadingDone = () => {
    setLoading(false);
  }
  const googleDocsDownloadLink = import.meta.env.VITE_CV_DOWNLOAD;


  useEffect(() => {
    if(windowDims.width <= 570) {
      setSource(import.meta.env.VITE_CV_MOBILE);
      setDisclaimer("Mobile Version");
      setDownloadFull("Download normal layout ->");
      setWidth(windowDims.width + "px")
    } else {
      setSource(import.meta.env.VITE_CV_DESKTOP);
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
        name={"Cv"}
        src={source}
        onLoad={loadingDone}
        style={styleiFrame}
        allow="picture-in-picture full">
      </iframe>
    </div>
  );
}

export default Cv;
