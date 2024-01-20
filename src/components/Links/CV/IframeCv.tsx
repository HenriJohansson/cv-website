import '@/components/Links/CV/Cv.css'
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function PaperCv() {
    const [loading, setLoading] = useState(true);
    const loadingDone = () => {
        setLoading(false);
    }
    return (
        <div className='iFrame'>
            {loading ? (
            <LinearProgress/>
            ) : null}
            <iframe //src="https://docs.google.com/document/d/e/2PACX-1vTcuHFPyXVTa8MnzEvDvsAtwQU-eCRqNGuh3WOZ0-tdL4cQghWuU_H64ZtI0blGWEHCKWeaDWExzvmD/pub?embedded=true"
                src="https://docs.google.com/document/d/e/2PACX-1vSzSr4y3V7X7CZzLts4lhEUw0IN1baK4-uay6OdVYainASBQ7ccySqyVDOQjxAmBMAUUUnWxJ-Z4voa/pub?embedded=true"
                style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    border: 0,
                }}
                seamless={true}
                onLoad={loadingDone}
                allow= "picture-in-picture full"></iframe>
        </div>
    );
}

export default PaperCv;
