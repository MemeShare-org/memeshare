import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ loading }) => (
  <BeatLoader color='yellow' loading={loading} size={20} />
);

export default Loader;
