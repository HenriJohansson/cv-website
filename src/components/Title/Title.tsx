import "@components/Title/projectTitle.css"

type Props = {
  name: string;
  className: string;
}
function Title(props: Props) {
  return (
    <section className="titleCenterer">
      <div className={props.className}>
        <h2>{props.name}</h2>
      </div>
    </section>
  )
}

export default Title
