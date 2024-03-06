import PictureLink from "@components/links/PictureLink"
import { useState, useEffect } from "react";
import "@pages/Projects/projects.css"

export const Projects = () => {
  const fileURL = "data.json"
  type Project = {
    name: string, url: string, alt: string, picturePath: string
  }
  const [projects, setProject] = useState<Project[]>([]);
  const [endPoint, setEndPoint] = useState("");

  const addProject = ((project: Project)=> {
    setProject([ ... projects, project])
  })

  useEffect(() => {
    // Fetch the JSON file
    fetch(fileURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Local data not found');
        }
        return response.json();
      })
      .then(jsonData => {
        // Parse the JSON objects
        if(jsonData.pictureUrlEndPoint) {
          setEndPoint(jsonData.pictureUrlEndPoint);
        }
        if(jsonData.projects) {
          for (let index = 0; index < jsonData.projects.length; index++) {
            addProject(jsonData.projects[index]);
          }
        }
      })
      .catch(error => {
        console.error('There was a problem fetching the local data:', error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <nav className="projects">
      {projects.map((project, index) => {
        return (
        <PictureLink
          key={index}
          href={project.url}
          urlEndpoint={endPoint}
          path={project.picturePath}
          alt={project.alt}
          target={true}
        ></PictureLink>)

      })}
    </nav>
  )
}
