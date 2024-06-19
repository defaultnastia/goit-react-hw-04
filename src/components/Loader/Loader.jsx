import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-indigo-200/50 flex items-center justify-center"
      autoFocus
    >
      <InfinitySpin
        color="rgb(112 26 117)"
        ariaLabel="infinity-spin-loading"
        height="200"
        width="200"
      />
    </div>
  );
};

export default Loader;
