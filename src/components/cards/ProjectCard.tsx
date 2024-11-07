import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler, useEffect} from "react";
import { useWindowDimensions } from "@components/util/WindowDimensions";
import { IKImageProps } from "imagekitio-react/dist/types/components/IKImage/combinedProps";
import { IKImage } from "imagekitio-react";
import "@components/cards/projectCard.css"
type Props = {
  href: string,
  alt: string,
  image: IKImageProps,
  title?: string,
  description?: string,
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>,
  target?: boolean,
  className?: string,
  id?: string,
  order?: number
}

const ProjectCard = (props: Props) => {
  const window = useWindowDimensions()

  const resizeForScreen = () => {
    if(window.width < 400){
      props.image.width = "300"
    } else if(window.width < 770) {
      props.image.width = "400"
    } else {
      props.image.width = "600"
    }
  }
  resizeForScreen()

  useEffect(() => {
    resizeForScreen()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.width])



  return (
    <a
    id={props.id ? props.id : getNewId("projectCard")}
    href={props.href}
    className={props.className ? props.className : "projectCard link"}
    onMouseEnter={props.onMouseEnter}
    target={props.target ? "_blank" : ""}
    style={{order: props.order}}
    >
      <div className="insideContainer">
        {props.title ? <h3 className="projectTitle">{props.title}</h3> : null}
        <div className="imageContainer">
          <IKImage style={{width: props.image.width}} {...props.image} ></IKImage>
        </div>
        {props.description ? <p className="projectDescription">{props.description}</p> : null}
      </div>
    </a>
  )
}

export default ProjectCard;
