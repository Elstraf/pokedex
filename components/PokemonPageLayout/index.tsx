import Styles from "./index.module.scss";

export default function PokemonPageLayout({
  name,
  id,
  image,
  stats,
}: {
  name: string;
  id: number;
  image: string;
  stats: any;
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.headerInfo}>
        <h1>{name}</h1>
        <h2>No {id}</h2>
      </div>
      <div className={Styles.imageContainer}>
        <img src={image} alt="" />
      </div>

      <div className={Styles.statsContainer}>
        {stats.map((stats: any) => {
          return (
            <>
              <div>
                <div className={Styles.stats}>
                  <h3>{stats.stat.name}</h3>

                  <h3>{stats.base_stat}</h3>
                </div>
                <div className={Styles.skillBarContainer}>
                  <div
                    style={{ width: `${stats.base_stat / 1.5}%` }}
                    className={Styles.skillBar}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
