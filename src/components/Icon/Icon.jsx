import PropTypes from "prop-types";
import icons from "assets/icons/sptire.svg";

const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width || "24px"} height={height || "24px"}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
