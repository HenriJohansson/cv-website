import './iFrame.css'

function PaperCv() {
    return (
        <div className='iFrame'>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTcuHFPyXVTa8MnzEvDvsAtwQU-eCRqNGuh3WOZ0-tdL4cQghWuU_H64ZtI0blGWEHCKWeaDWExzvmD/pub?embedded=true"
                style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    border: "inherit",
                }}
                allow= "picture-in-picture full"></iframe>
        </div>
    );
}

export default PaperCv;
