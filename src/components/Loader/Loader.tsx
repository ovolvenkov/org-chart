import {Style_Loader} from "./loaderStyled";
import loader from '../../assets/images/aim-loader.gif';

const Loader = () => {
  return <Style_Loader>
    <img src={loader} alt='loader'/>
  </Style_Loader>
}

export default Loader;