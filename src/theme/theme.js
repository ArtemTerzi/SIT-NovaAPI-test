const media = {
  phone: "(min-width: 320px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1280px)",
};

const colors = {
  primary: "indigo",
  secondary: "#5cd3a9",
};

const shadow = {
  title: `2px 2px 2px ${colors.primary},
    0 2px 2px ${colors.primary},
    -2px 0 2px ${colors.primary},
    0 -2px 2px ${colors.primary}`,
};

export const theme = {
  media,
  colors,
  shadow,
};
