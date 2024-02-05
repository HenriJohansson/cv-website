//Does not work for cross-origin iframes.
export function iFrame( iFrame: HTMLIFrameElement) {
    iFrame.width  = iFrame.contentWindow?.document.body.scrollWidth + "px";
    iFrame.height = iFrame.contentWindow?.document.body.scrollHeight + "px";
}