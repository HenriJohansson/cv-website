import { useEffect, useState } from "react";

export const useFetchText = (str: string) => {
  const [text, setText] = useState("")
  const parseEmoji = (str: string): string => {
    const breakPoint: RegExp = /&#[0-9]+/gm;
    return str.replace(breakPoint, s => String.fromCodePoint(+s.substring(2)));
  }
  useEffect(() => {
  fetch(str)
    .then(value => value.text())
    .then(value => setText(parseEmoji(value)));
  })
  return text;
}

