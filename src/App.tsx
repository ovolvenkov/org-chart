import React, {useEffect, useState} from 'react';
import {Style_App} from './AppStyled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainTree from './components/MainTree/MainTree';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {ExtendedOrgChart, NodeData} from './types/types';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import Loader from "./components/Loader/Loader";

function App() {
  const [nodeData, setNodeData] = useState<NodeData | null>(null);
  const [chartTreeInstance, setChartTreeInstance] = useState<ExtendedOrgChart | null>(null);
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
                                                          setNodeData={setNodeData}
                                                          nodeData={nodeData}
                                                          chartTreeInstance={chartTreeInstance}/> : <Loader/>} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </Style_App>
  );
}

export default App;
