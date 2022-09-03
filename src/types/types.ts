import OrgChart from "@balkangraph/orgchart.js";
import {RefObject} from "react";

export interface ExtendedOrgChart extends OrgChart {
  xScrollUI?: {
    pos?: string
  };
  yScrollUI?: {
    pos?: string
  };
  roots?: {
    id?: string | number
  }
}

export interface CompanyMember {
  name?: string,
  image?: string,
  structureName?: string,
  structureLevelName?: string,
  collectiveLevelName?: string,
  "teamLead"?: string[],
  "jobPosition"?:  string,
  "skypeAccount"?:  string,
  "email"?:  string,
  "phoneNumber"?:  string,
  "id"?:  string,
  "pid"?:  string,
  "stpid"?:  string,
  "aimchatAccount"?:string,
  tags?: string[]
}

export interface UserState {
  users: {
    data: CompanyMember[]
  };
  isLoading: boolean;
  error: string;
}

export type NodeData = {
  currenNodeData?: OrgChart.node,
  currenSourceData?: CompanyMember,
  parentSourceData?: CompanyMember
}

export type TreeProps = {
  nodes?: CompanyMember[] | undefined,
  setChartTreeInstance: (arg: ExtendedOrgChart | null)=>void,
  nodeData: NodeData | null,
  setNodeData: (arg: NodeData | null)=>void,
  chartTreeInstance: ExtendedOrgChart | null,
  isLoading?: boolean
}

export type BreadcrumbsProps = {
  setNodeData: (arg: object | null) => void,
  nodeData: NodeData | null,
}

export type NavigationBarProps = {
  chartTreeInstance: ExtendedOrgChart | null,
  setNodeData: (arg: object | null) => void,
  nodeData: NodeData | null,
  isTouchedTree?: boolean,
  setIsTouchedTree?: (arg: boolean | null) => void
}

export type CreateTreeProps = {
  nodes: CompanyMember[] | undefined,
  ref: RefObject<HTMLDivElement>,
}
