import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler } from "react";
import { IKImage } from 'imagekitio-react';

type Props = {
  href: string,
  urlEndpoint: string,
  path: string,
  alt: string,
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>,
  target?: boolean,
  className?: string,
  id?: string,
}

const PictureLink = (props: Props) => {
  console.log(props)

  return (
    <>
      <a id={props.id ? props.id : getNewId("link")} href={props.href} className={props.className ? props.className : "link"} onMouseEnter={props.onMouseEnter} target={props.target ? "_blank" : ""}>
        <IKImage
          urlEndpoint={props.urlEndpoint}
          path={props.path}
        />
      </a>
    </>
  )
}

export default PictureLink;
