import 'swiper/css';
import './Slider.scss';
import classNames from 'classnames';
import SliderNavigation from "@/components/Slider/components/SliderNavigation";


const Slider = (props) => {
  const {
    className,
    children,
    navigationTargetElementId = null,
  } = props;

  return (
    <div
      className={classNames(className, 'slider')}
    >
      <div className="slider__swiper swiper">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li
              className="slider__item swiper-slide"
              key={index}
            >
              {slide}
            </li>
          ))}
        </ul>

        {!navigationTargetElementId && (
          <SliderNavigation
            className="slider__navigation"
          />
        )}
      </div>
    </div>
  );
}

export default Slider;