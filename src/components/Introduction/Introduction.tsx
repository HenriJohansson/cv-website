
import "@components/Introduction/introduction.css";
import { useFetchText } from "@/hooks/TextFetch";

export const Introduction = () => {
  const text = useFetchText("introduction.txt")
  return (
    <>
      <section>
        <div id="introduction">
          <p>
          {text}
          </p>
        </div>
      </section>
      <span id="introduction_divider"></span>
    </>
  )
}
export default Introduction;
