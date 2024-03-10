import ProjectCard from "@components/cards/ProjectCard"
import "@pages/Projects/projects.css"
import { IKImageProps } from "imagekitio-react/dist/types/components/IKImage/combinedProps";
import { Projects as ProjectsType } from "./ProjectsScroll";
type Props = {
  pictureUrlEndPoint: string;
  projects: ProjectsType;
}

export const Projects = (props: Props) => {
  let columnAutoWidth = "55%";
  switch(props.projects.length) {
    case 1: columnAutoWidth = "100%"; break;
    case 2: columnAutoWidth = "50%"; break;
  }
  return (
    <div style={{gridAutoColumns: columnAutoWidth}} className={"projectList"}>
        {props.projects.map((project, index) => {
          const ikImageProps: IKImageProps = {
            loading: 'lazy',
          lqip: {
            active: true,
            quality: 50,
            threshold: 10,
            blur: 0,
          },
          queryParameters: {

          },
          path: project.picture.path,
          transformation: [{
            height: project.picture.height,
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
