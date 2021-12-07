import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as Edit } from "../../assets/icons/icon/Pencil.svg";
import { ReactComponent as Delete } from "../../assets/icons/icon/TrashCan.svg";
import Icons from "../Icons";
import "./styles.scss";

function AppointmentDetailTimes({ date, times, handleEditClick, handleDeleteClick }) {
  return (
    <div
      className={`appointment-detail-times `}
    >
      <div className="date-times">
        <Typography text={date} size="semibold12" color="font-black" />
        {times && <Typography text={times} size="semibold12" color="font-black" />}
      </div>
      <div className='wrapper-icons'>
      <Icons icon={<Edit className="icon" onClick={handleEditClick} />} size={"medium"} hover={false} />
      <Icons icon={<Delete className="icon" onClick={handleDeleteClick} />} size={"medium"} hover={false} />
      </div>
    </div>
  );
}

AppointmentDetailTimes.propTypes = {  
  date: PropTypes.string,
  times: PropTypes.string,
  handleEditClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};

export default AppointmentDetailTimes;
