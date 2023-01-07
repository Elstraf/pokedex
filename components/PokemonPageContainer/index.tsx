import Styles from "./index.module.scss";

interface PokemonPageContainerProps {
  children: React.ReactNode;
  type: string;
}

export default function PokemonPageContainer({
  children,
  type,
}: PokemonPageContainerProps) {
  return <div className={`${Styles[type]} ${Styles.base}`}>{children}</div>;
}
