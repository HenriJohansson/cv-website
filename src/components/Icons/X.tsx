import { Close } from "@mui/icons-material";

export const X = (props: {className: string, href: string}) => {
  return (
    <a className={props.className} href={props.href}>
      <Close color="primary" fontSize="medium" />
    </a>
  );
};
/*
export const Button = () => {
  return (
    <button >
      <Close color="primary" fontSize="medium" />
    </button>
  )
}
*/
