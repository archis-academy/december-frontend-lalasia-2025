import { useData } from "@/hooks/useData";
import style from "./TeamSection.module.scss";
import type { Product, Team } from "@/types/types";

const TeamSection = () => {
  const { data, isLoading, error } = useData<Team[]>({ endpoint: "team" });
  if (isLoading) {
  }
  if (error) {
  }
  return (
    <div className={style.teamSection}>
      <div className={style.teamSection__header}>
        <div className={style.teamSection__header__title}>
          <p className={style.teamSection__header__title__text}>Our Team</p>
          <h1 className={style.teamSection__header__title__h1}>
            Meet our leading and strong team
          </h1>
        </div>
        <div className={style.teamSection__header__desc}>
          <p className={style.teamSection__header__desc__p}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </div>
      <div className={style.teamSection__members}>
        <div className={style.teamSection__members__list}>
          {data?.map((x) => (
            <div
              className={style.teamSection__members__list__member}
              key={x.id}
            >
              <img
                className={style.teamSection__members__list__img}
                src={x.image}
                alt=""
              />
              <div className={style.teamSection__members__list__info}>
                <h3 className={style.teamSection__members__list__name}>
                  {x.fullName}
                </h3>
                <p className={style.teamSection__members__list__job}>{x.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
