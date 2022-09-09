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

export type TreeProps = {
  nodes?: CompanyMember[] | undefined,
  setChartTreeInstance: (arg: ExtendedOrgChart | null)=>void,
  chartTreeInstance: ExtendedOrgChart | null,
  isLoading?: boolean,
  setIsActiveBackBtn: (arg: boolean)=>void,
  isActiveBackBtn: boolean
}

export type NavigationBarProps = {
  chartTreeInstance: ExtendedOrgChart | null,
  setIsActiveBackBtn: (arg: boolean)=>void,
  isActiveBackBtn: boolean
}

export type CreateTreeProps = {
  nodes: CompanyMember[] | undefined,
  ref: RefObject<HTMLDivElement>,
  setIsActiveBackBtn: (arg: boolean)=>void,
}
