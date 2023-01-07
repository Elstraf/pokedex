import Styles from "./index.module.scss";

export default function Button({
  handleClick,
  name,
}: {
  handleClick: any;
  name: string;
}) {
  return (
    <>
      <button className={Styles.button} onClick={handleClick}>
        {name}
      </button>
    </>
  );
}
