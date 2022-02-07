import React from "react";
import { Button, Box } from "theme-ui";
import styles from "./styles";

interface PropTypes {
  slides: string[];
  current: number;
  updateCurrent: (index: number) => void;
}

const CarouselIndicator: React.FC<PropTypes> = ({ slides, current, updateCurrent }) => {
  return (
    <Box sx={styles.indicatorMainWrapper}>
      <Box sx={styles.indicatorContainer}>
        {slides.map((slide, index) => {
          return (
            <Button
              key={`${index + 1}`}
              onClick={() => updateCurrent(index)}
              sx={index === current ? styles.indicatorItemActive : styles.indicatorItem}
            >
              {}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default CarouselIndicator;
