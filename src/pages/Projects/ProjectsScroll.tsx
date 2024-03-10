
import { useFetchJSON } from "@hooks/Fetch";
import { Projects as Proj } from "./Projects";
type Picture = {
  path: string,
  alt: string,
  width: string,
  height: string,
  cropmode: string
}
export type Project = {
  title: string, url: string, picture: Picture, description: string
}
export type Projects = Project[];

export const ProjectsScroll = () => {
  const fileURL = "data.json";
  const jsonVal = useFetchJSON<{pictureUrlEndPoint: string, projects : Projects}>(fileURL);
  if(!jsonVal){
    return (<></>)
  }
  return (
    <section className="projects">
      <Proj pictureUrlEndPoint={jsonVal.pictureUrlEndPoint} projects={jsonVal.projects}></Proj>
    </section>
  )
}
