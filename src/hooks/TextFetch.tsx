import { useEffect, useState } from "react";

export const useFetchText = (str: string) => {
  const [text, setText] = useState("")
  const parser = new DOMParser();
  useEffect(() => {
  fetch(str)
    .then(value => value.text())
    .then(value => {
      return setText(parser.parseFromString(value, "text/html").body.innerHTML);
    });
  })
  return text;
}

