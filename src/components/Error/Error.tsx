import CustomButton from "../CustomButton/CustomButton";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style.error}>
      <div className={style.error__content}>
        <h1 className={style.error__title}>Oops!</h1>
        <div className={style.error__images}>
          <img src="/images/404/4.svg" alt="" />
          <img src="/images/404/GoodiesCrying.png" alt="" />
          <img src="/images/404/4.svg" alt="" />
        </div>
        <div className={style.error__text}>
          <p className={style.error__message}>You lost your way</p>
          <div className={style.error__messageWrapper}>
            <h3 className={style.error__subtitle}>
              Let’s get you back your path.
            </h3>
            <CustomButton
              className={style.error__button}
              text="Go back to home"
              handleClick={() => (window.location.href = "/")}
              id="error-button"
            >
              <img src="/images/404/arrow.svg" alt="" />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
