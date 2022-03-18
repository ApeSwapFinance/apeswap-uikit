import React, { useState, useEffect } from "react";
import { Image, Button, Box } from "theme-ui";
import { CarouselProps } from "./types";
import ChevronRight from "../Svg/_Icons/ChevronRight";
import ChevronLeft from "../Svg/_Icons/ChevronLeft";
import CarouselIndicator from "./Carousel.indicator";
import styles from "./styles";

const Carousel: React.FC<CarouselProps> = ({
  slides,
  controls = true,
  autoPlay = true,
  interval = 1000,
  hideIndicator,
  defaultSlide,
  maxHeight = "300px",
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide || 0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (!autoPlay) {
      return () => null;
    }
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, currentSlide, interval, slides.length]);

  return (
    <Box {...props} sx={{ ...styles.carousel, maxHeight }}>
      {controls && (
        <Box sx={styles.chevronContainer}>
          <Button sx={styles.chevronWrapper} onClick={prevSlide}>
            <ChevronLeft />
          </Button>
          <Button sx={styles.chevronWrapper} onClick={nextSlide}>
            <ChevronRight />
          </Button>
        </Box>
      )}

      <Box sx={{ ...styles.imageWrapper, maxHeight }}>
        {slides.map((image, index) => {
          return (
            <Image
              key={`${index + 2}`}
              sx={{
                maxHeight,
                ...(index === currentSlide ? styles.activeSlider : styles.slider),
              }}
              src={image}
              alt=""
            />
          );
        })}
      </Box>
      {!hideIndicator && <CarouselIndicator slides={slides} current={currentSlide} updateCurrent={setCurrentSlide} />}
    </Box>
  );
};

export default Carousel;
