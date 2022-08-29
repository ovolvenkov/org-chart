import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {BreadcrumbsProps} from '../../../types/types'

function Breadcrumbs(props: BreadcrumbsProps) {
  const {setNodeData, nodeData } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isDepartmentPage = location.pathname === '/department';

  const fullBtnHandler = () => {
    setNodeData(null)
    navigate('/');
  };

  const departmentName = nodeData?.parentSourceData?.structureLevelName || nodeData?.parentSourceData?.collectiveLevelName || "Department";
  const teamName = nodeData?.currenSourceData?.structureLevelName || nodeData?.currenSourceData?.collectiveLevelName || "Team";

  return (
      <div className="breadcrumbs">
        <button className="btn" disabled={!isDepartmentPage} onClick={fullBtnHandler}>Full Structure</button>
        { isDepartmentPage && <>
          <span>{ ' > ' }</span>
          <button onClick={() => navigate('/')} className="btn">
            { departmentName }
          </button>
          <span>{ ' > ' }</span>
          <span>
            { teamName }
          </span>
        </> }
      </div>
  );
}

export default  Breadcrumbs;