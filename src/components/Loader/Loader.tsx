import {Style_Loader} from "./loaderStyled";
import aimLoader from '../../assets/images/aim-loader.gif';

const Loader = () => {
  return <Style_Loader>
    <img src={aimLoader} alt='loader'/>
  </Style_Loader>
}

export default Loader;