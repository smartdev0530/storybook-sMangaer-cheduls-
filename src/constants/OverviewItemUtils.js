import { ReactComponent as ThreePeopleIcon } from "../assets/icons/threePeopleIcon.svg";
import { ReactComponent as AppointmentIcon } from "../assets/icons/appointmentIcon.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/errorIcon.svg";
import { ReactComponent as DataPendingIcon } from "../assets/icons/dataPendingIcon.svg";

export const renderThreePeople = () => {
  return <ThreePeopleIcon className="overview-icon" />;
};
export const renderAppointmentIcon = () => {
  return <AppointmentIcon className="overview-icon" />;
};
export const renderErrorIcon = () => {
  return <ErrorIcon className="overview-icon" />;
};
export const renderDataPendingIcon = () => {
  return <DataPendingIcon className="overview-icon" />;
};
