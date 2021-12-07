import { Months, ShortDays, Days, FullMonths } from "../components/Settings/menuConstants";

export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
};

export const getTimefromString = (date) => {
  return date.split(" ")[1];
};
export const getTime12hour = (date) => {
  let currentTime = date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  return currentTime;
};
export const getCurrentDateTime = (date) => {
  let currentDateTime =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return currentDateTime;
};

export const formatDate = (date) => {
  return date.split("-").reverse().join("/");
};

export const formatDateMonth = (date) => {
  if (date) {
    let formatted_date = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    return formatted_date;
  } else return null;
};

export const formatDayMonthDate = (date) => {
  let formatted_date = Days[date.getDay()] + ", " + FullMonths[date.getMonth()] + " " + date.getDate();
  return formatted_date;
};

export const formatShortDayMonthDate = (date) => {
  let formatted_date = ShortDays[date.getDay()] + ", " + Months[date.getMonth()] + " " + date.getDate();
  return formatted_date;
};
export const formatAddress = (address) => {
  return (
    address.address1 + "," + address.address2 + "," + address.city + "," + address.state + "-" + address.zip
  );
};

export const difference = (start, end) => {
  if ((start == null) | (end == null)) {
    return 0;
  } else {
    let startfulldate = start.split("T");
    let endfulldate = end.split("T");
    let startDate = new Date(startfulldate[0]);
    let endDate = new Date(endfulldate[0]);
    let time = Math.abs(startDate - endDate);
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
  }
};

export const calculateAge = (date) => {
  var dob = new Date(date);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
};

export const formatTime = (date) => {
  if (date) {
    let fulldate = date.split("T");
    let times = fulldate[1].split(":");
    let hours, time;
    if (times[0] > 12) {
      hours = times[0] - 12;
      time = "PM";
    } else {
      hours = times[0];
      time = "AM";
    }
    return hours + ":" + times[1] + ":" + time;
  } else return;
};

export const formatCustomDate = (date) => {
  let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let formatted_date = date.getFullYear() + "-" + month + "-" + day;
  return formatted_date;
};

export const formatCustomDateA = (date) => {
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en',options);
  const result = formatter.format(date);
  return result;
};


export const formatCustomDateMonth = (date) => {
  if (date) {
    let fulldate = date.split("-");
    let month = fulldate[1];
    let day = fulldate[2];
    let formatted_date = month + "/" + day + "/" + fulldate[0];
    return formatted_date;
  } else return;
};
export const formatCustomDay = (date) => {
  if (date) {
    let fulldate = date.split("T");
    let date1 = new Date(fulldate[0]);
    let day = ShortDays[date1.getDay()];
    return day;
  } else return;
};

export const getDurationInMinutes = (time) => {
  let timeArray = time.split(":");
  let minutes = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
  return minutes;
};
export const getDurationInHours = (minutes) => {
  let hours = parseInt(minutes / 60);
  let minute = minutes - hours * 60;
  minute = String(minute).padStart(2, "0");
  return hours + ":" + minute;
};

export const formatSSNInput = (val) => {
  if (val) {
    val = val.replace(/\D/g, "");
    if (val.length <= 3) return val;
    else if (val.length > 3 && val.length <= 5) return val.slice(0, 3) + "-" + val.slice(3, 5);
    else if (val.length >= 5 && val.length <= 9)
      return val.slice(0, 3) + "-" + val.slice(3, 5) + "-" + val.slice(5, 9);
  } else return "";
};

export const getFormattedSSNShow = (val) => {
  if (val) {
    val = val.replace(/\D/g, "");
    if (val.length <= 3) return val;
    else if (val.length > 3 && val.length <= 5) return val.slice(0, 3) + "-" + val.slice(3, 5);
    else if (val.length >= 5 && val.length <= 9)
      return val.slice(0, 3) + "-" + val.slice(3, 5) + "-" + val.slice(5, 9);
  } else return "";
};

export const getFormattedSSNHidden = (val) => {
  if (val) {
    val = val.replace(/\D/g, "");
    if (val.length <= 3) {
      return val;
    }
    if (val.length <= 9) {
      return "XXX-XX-" + val.slice(5, 9);
    }
  } else return "";
};

export const getDateMonth = (value) => {
  let date = new Date(value);
  let formatted_date = FullMonths[date.getMonth()] + " " + date.getDate();
  return formatted_date;
};

export const getAge = (value) => {
  let date = new Date();
  if (value) {
    let year = date.getFullYear();
    let fulldate = value.split("/");
    return year - fulldate[2];
  } else return;
};

// if val is "STAFF" || "staff" =>  returns "Staff"
export const getCamelCase = (val) => {
  if (typeof val === "string") return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase();

  if (typeof val === "object")
    return val?.name?.slice(0, 1).toUpperCase() + val?.name?.slice(1).toLowerCase();
};

export const phoneNumberFormatter = (value) => {
  // this fun() will return the 10 digit number in the format ==> (XXX) XXX-XXXX
  if (!value) return "";
  else if (value.length > 0) {
    value = value.replace(/\D/g, "");
    let length = value.length;
    if (length >= 1 && length <= 3) return "(" + value;
    else if (length > 3 && length < 4) return "(" + value.slice(0, 3) + ") ";
    else if (length > 4 && length < 7) return "(" + value.slice(0, 3) + ") " + value.slice(3, 6);
    else if (length > 6) return "(" + value.slice(0, 3) + ") " + value.slice(3, 6) + "-" + value.slice(6, 10);
  }
};

export const validateEmail = (value) => {
  let validFormat = /\w+\w*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validFormat.test(value)) return true;
  else return false;
};

export const copyToClipBoard = (value) => {
  if (value) navigator.clipboard.writeText(value);
};

export const getAgeByDob = (str) => {
  // str ===> DD/MM/YYYY
  if (str) {
    var today = new Date();
    var birthDate = new Date(str);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
};
