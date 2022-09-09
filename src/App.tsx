import React, {useEffect, useState} from 'react';
import {Style_App} from './AppStyled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainTree from './components/MainTree/MainTree';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {ExtendedOrgChart} from './types/types';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import Loader from "./components/Loader/Loader";

function App() {
  const [chartTreeInstance, setChartTreeInstance] = useState<ExtendedOrgChart | null>(null);
  const [isActiveBackBtn, setIsActiveBackBtn] = useState(false);
  const {users, isLoading, error} = useAppSelector(state=>state.userReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[]);

  useEffect(()=>{
    const isError = error && !users.data.length;
    navigate( isError ? '/error' : '/');
  }, [error]);

  return (
    <Style_App>
      <Header />
        <Routes>
          <Route path="/" element={!isLoading ? <MainTree nodes={users.data}
                                                          setChartTreeInstance={setChartTreeInstance}
                                                          chartTreeInstance={chartTreeInstance}
                                                          setIsActiveBackBtn={setIsActiveBackBtn}
                                                          isActiveBackBtn={isActiveBackBtn}/> : <Loader/>} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Style_App>
  );
}

export default App;
