import React, {useEffect, useState} from 'react';
import {Style_App} from './AppStyled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainTree from './components/MainTree/MainTree';
import {Route, Routes, useNavigate} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import OrgChart from "@balkangraph/orgchart.js";
import {NodeData} from "./types/types";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import Loader from "./components/Loader/Loader";

function App() {
  const [nodeData, setNodeData] = useState<NodeData | null>(null);
  const [chartTreeInstance, setChartTreeInstance] = useState<OrgChart | null>(null);
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

  //temporary actions, acked backend added this field
  let count = 0;
  const nodesWithSubTags = users.data.map((item) => {
    if (item.pid === '1') {
      count++
      if(count % 2 === 0) return  { ...item, "tags": ["subLevels1"] }
    }
    return item;
  });

  return (
    <Style_App>
      <Header />
        <Routes>
          <Route path="/" element={!isLoading ? <MainTree nodes={nodesWithSubTags}
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
