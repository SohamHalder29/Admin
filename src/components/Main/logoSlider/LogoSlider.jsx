// @ts-nocheck
import { Companies_Logo } from "../../../assets/Main/Data";
import "./LogoSlider.css";

const LogoSlider = () => {
  // Duplicate the Images array to create an infinite loop
  const infiniteImages = [...Companies_Logo, ...Companies_Logo];

  return (
    <div className="Slider">
        {infiniteImages.map((Img, idx) => {
          return (
            <section className="logos" key={idx}>
              <img src={Img} alt={"Logos"} />
            </section>
          );
        })}
      </div>
  );
};

export default LogoSlider;
