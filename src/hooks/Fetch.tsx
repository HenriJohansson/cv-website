import { useEffect, useState } from "react";

export const useFetchText = (str: string) => {
  const [text, setText] = useState("")
  const parser = new DOMParser();
  useEffect(() => {
  fetch(str)
    .then(response => {
      if (!response.ok) {
        throw new Error('Local data not found');
      }
      return response.text()
    })
    .then(text => {
      return setText(parser.parseFromString(text, "text/html").body.innerHTML);
    })
    .catch(error => {
      console.error('There was a problem fetching the local data:', error);
    });
  })
  return text;
}
function useFetchJSON <T>(fileURL: string, ...dependencies: unknown[]) {
  const [json, jsonSet] = useState<T>()
  useEffect(() => {
    fetch(fileURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Local data not found');
      }
      return response.json();
    })
    .then(jsonData => {
      jsonSet(jsonData as T);
    })
    .catch(error => {
      console.error('There was a problem fetching the local data:', error);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileURL, ...dependencies])
  return json
}
export {useFetchJSON};
