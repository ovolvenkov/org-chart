import {Style_Loader} from "./LoaderStyled";
import aimLoader from '../../assets/images/aim-loader.gif';

const Loader = () => {
  return <Style_Loader>
    <img src={aimLoader}/>
  </Style_Loader>
}

export default Loader;