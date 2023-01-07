import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";

import Styles from "./index.module.scss";

export default function Card({ name, url }: { name: string; url: string }) {
  const { data, isLoading, isError } = useQuery(name, () => axios.get(url));

  if (isLoading) return <h1>Loading...</h1>;

  const type = data?.data.types[0].type.name;
  const image = data?.data.sprites.front_default;

  const randomPower = () => {
    return Math.floor(Math.random() * 50);
  };

  const randomMove = (moveArray: any) => {
    return moveArray[Math.floor(Math.random() * moveArray.length)].move.name;
  };

  if (data) {
    return (
      <Link href={`/${data?.data.id}`}>
        <div className={Styles.cardBase}>
          <div className={`${Styles.innerCardBase} ${Styles[type]}`}>
            <div className={Styles.basicInfo}>
              <h3>{data.data.name}</h3>
              <p>
                <span>HP</span> {data.data.stats[0].base_stat}
              </p>
            </div>
            <div className={Styles.imageContainer}>
              <img src={image} alt="" />
              <div className={Styles.stats}>
                <p>
                  NO. {data.data.id} HT: {data.data.height} WT:{" "}
                  {data.data.weight}
                  {""}
                  lbs
                </p>
              </div>
            </div>
            <div className={Styles.moves}>
              <div>
                <h3>{randomMove(data?.data.moves)}</h3>
                <h3>{randomPower()}</h3>
              </div>
              <div>
                <h3>{randomMove(data?.data.moves)}</h3>
                <h3>{randomPower()}</h3>
              </div>
            </div>
            <div className={Styles.types}>
              {data.data.types.map((type: any, index: number) => {
                return (
                  <div className={`${Styles.typesContainer}`} key={index}>
                    <div>{type.type.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return <></>;
}
