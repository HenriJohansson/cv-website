import ProjectCard from "@components/cards/ProjectCard"
import "@pages/projects/projects.css"
import { IKImageProps } from "imagekitio-react/dist/types/components/IKImage/combinedProps";
import { Projects as ProjectsType } from "./ProjectsScroll";
import { Project as ProjectType } from "./ProjectsScroll"
//import { useEffect, useRef } from "react";

type Props = {
  pictureUrlEndPoint: string;
  projects: ProjectsType;
}

export const Projects = (props: Props) => {
  const limitImageHeight = "300";
  /*
  //Scrollbar starts from other end of the list
  const ProjectsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(ProjectsRef.current) {
      ProjectsRef.current.scrollLeft = ProjectsRef.current?.scrollWidth - ProjectsRef.current?.clientWidth;
    }
  })
  */
  return (
    <div /* ref={ProjectsRef} */ className={"projectList"}>
      {props.projects.map((project: ProjectType, index: number) => {
        const ikImageProps: IKImageProps = {
          loading: 'lazy',
          lqip: {
            active: true,
            quality: 50,
            threshold: 10,
            blur: 0
          },
          queryParameters: {

          },
          path: project.picture.path,
          transformation: [{
            height: limitImageHeight,
            width: project.picture.width,
          }],
          urlEndpoint: "https://ik.imagekit.io/henrijbusiness/Cv-Site/",
          // Add other properties as needed
        }
        return (
          <ProjectCard
            key={index}
            id={"pictureLink" + index}
            href={project.url}
            image={ikImageProps}
            title={project.title}
            description={project.description}
            alt={project.picture.alt}
            target={true}
          ></ProjectCard>
        )
      })}
    </div>
  )
}
