import { MagnifyingGlass } from "react-loader-spinner";
import { LoaderImg, LoaderOverlay } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderImg>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#5cd3a9"
          color="indigo"
        />
      </LoaderImg>
    </LoaderOverlay>
  );
};

export default Loader;
