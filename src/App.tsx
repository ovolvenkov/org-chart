import React, {useEffect, useState} from 'react';
import {Style_App} from './AppStyled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChartTree from './components/ChartTree/ChartTree';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {ExtendedOrgChart} from './types/types';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import Loader from "./components/Loader/Loader";
import Theme from "./components/Theme/Theme";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-H6N1D1PLQ3"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [chartTreeInstance, setChartTreeInstance] = useState<ExtendedOrgChart | null>(null);
  const [isActiveBackBtn, setIsActiveBackBtn] = useState(false);
  const [isBlackTheme, setIsBlackTheme] = useState(false)
  const {users, isLoading, error} = useAppSelector(state=>state.userReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchUsers());
  },[]);

  useEffect(()=>{
    const isError = error && !users.data.length;
    navigate( isError ? '/error' : '/');
  }, [error]);

  return (
    <Theme isBlackTheme={isBlackTheme}>
      <Style_App>
        <Header isBlackTheme={isBlackTheme}/>
          <Routes>
            <Route path="/" element={!isLoading ? <ChartTree nodes={Array.from(users.data)}
                                                             setChartTreeInstance={setChartTreeInstance}
                                                             chartTreeInstance={chartTreeInstance}
                                                             setIsActiveBackBtn={setIsActiveBackBtn}
                                                             isActiveBackBtn={isActiveBackBtn}
                                                             setIsBlackTheme={setIsBlackTheme}
                                                             isBlackTheme={isBlackTheme}/> : <Loader/>} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </Style_App>
    </Theme>
  );
}

export default App;
