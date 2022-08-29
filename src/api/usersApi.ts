import {CompanyMember} from "../types/types";
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://aim-dms.aimprosoft.com",
});

export const getAllUsers = async () => await axiosInstance.get<{ data: CompanyMember[] }>('/alfresco/s/com/aimprosoft/organizational/structure');