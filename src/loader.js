import { ThreeDots } from "react-loader-spinner";
const LoaderComp = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      color="#957290"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default LoaderComp;
