import {Style_ErrorPage} from './errorPageStyled';
import {useNavigate} from "react-router-dom";
import image from '../../assets/images/artboard.png';
import {FC} from "react";
import {fetchUsers} from "../../store/reducers/actionCreators";
import {useAppDispatch} from "../../hooks/redux";

const ErrorPage:FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/');
    dispatch(fetchUsers())
  }

  return (
    <Style_ErrorPage className="container">
      <div className="info-block">
        <div className="main-text">
          Oops! Something is wrong
        </div>
        <div className="description-text">
          Organization Structure can not be uploaded now
        </div>
        <div>
          <button className="btn-try" onClick={onClickHandler}>
            Try again later
          </button>
        </div>
      </div>
      <div className="img-block">
        <img src={image} alt="artboard"/>
      </div>
    </Style_ErrorPage>
  );
};

export default ErrorPage;
