// {
//   "status": "",
//   "traceId": "",
//   "data": [
//     {
//       "date": "",
//       "regularHours": "",
//       "overtime": "",
//       "worktimeDetails": [
//         {
//           "clockIn": {
//             "time":"",
//             "originalTime":"",
//             "submittedTime":"",
//             "notes":"",
//             "approvedTime":"",
//             "approvalNotes":""
//           },
//           "clockOut": {
//             "time":"",
//             "isEditedByEmployee":true
//             "originalTime":"",
//             "submittedTime":"",
//             "notes":"",
//             "approvedTime":"",
//             "approvalNotes":""
//           }
//         }
//       ]
//     }
//   ]
// }

export const headerArray = ["Date", "Regular Hours", "Overtime", "Clock-in", "Clock-out", "Hours", "Status"];
export const headerArrayAction = [
  "Date",
  "Regular Hours",
  "Overtime",
  "Clock-in",
  "Clock-out",
  "Hours",
  "Action",
  "Status",
];
export const data = [
  {
    date: "Saturday, Jul 24",
    time: "-",
    overtime: "-",
    clock_in_list: ["-"],
    clock_out_list: ["-"],
    hours_list: ["-"],
    status: ["-"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Pending", "Pending", "Pending"],
  },
  {
    date: "Wednesday, Jul 21",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM"],
    clock_out_list: ["01:00 PM"],
    hours_list: ["4:30"],
    status: ["Pending"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Pending", "Pending", "Pending"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Approved", "Approved", "Approved"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Pending", "Pending", "Pending"],
  },
  {
    date: "Saturday, Jul 24",
    time: "-",
    overtime: "-",
    clock_in_list: ["-"],
    clock_out_list: ["-"],
    hours_list: ["-"],
    status: ["-"],
  },
  {
    date: "Saturday, Jul 24",
    time: "-",
    overtime: "-",
    clock_in_list: ["-"],
    clock_out_list: ["-"],
    hours_list: ["-"],
    status: ["-"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Approved", "Approved", "Approved"],
  },
  {
    date: "Saturday, Jul 24",
    time: "8:00",
    overtime: "2:00",
    clock_in_list: ["8:30 AM", "2:00 PM", "5:30 PM"],
    clock_out_list: ["01:00 PM", "05:00 PM", "09:00 PM"],
    hours_list: ["4:30", "3:00", "3:30"],
    status: ["Approved", "Approved", "Approved"],
  },
];

export const dataJson = [
  {
    status: "",
    traceId: "",
    data: [
      {
        date: "24th July 2021",
        regularHours: "8:00",
        overtime: "2:00",
        worktimeDetails: [
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo",
              approvedTime: "8:00am",
              approvalNotes: "demo 2",
              isEditedByEmployee: true,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: true,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo",
              approvedTime: "10:00am",
              approvalNotes: "demo2",
            },
            id: 1,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: true,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo",
              approvedTime: "8:00am",
              approvalNotes: "demo2",
              isEditedByEmployee: false,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: false,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 2,
            hours: "5:00",
            status: "Approved",
            isEditedByEmployee: false,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: false,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: true,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 3,
            hours: "5:00",
            status: "Approved",
            isEditedByEmployee: true,
          },
        ],
      },
      {
        date: "25th July 2021",
        regularHours: "8:00",
        overtime: "",
        worktimeDetails: [
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: false,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: false,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 4,
            hours: "5:00",
            status: "Approved",
            isEditedByEmployee: false,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: true,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: true,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 5,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: true,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: true,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: false,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 6,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: true,
          },
        ],
      },
      {
        date: "26th July 2021",
        regularHours: "8:00",
        overtime: "2:00",
        worktimeDetails: [
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: true,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: false,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 7,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: true,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: false,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: false,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 8,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: false,
          },
          {
            clockIn: {
              time: "",
              originalTime: "8:00am",
              submittedTime: "8:00am",
              notes: "Demo..",
              approvedTime: "8:00am",
              approvalNotes: "8:00am",
              isEditedByEmployee: true,
            },
            clockOut: {
              time: "",
              isEditedByEmployee: true,
              originalTime: "10:00am",
              submittedTime: "10:00am",
              notes: "Demo..",
              approvedTime: "10:00am",
              approvalNotes: "10:00am",
            },
            id: 9,
            hours: "5:00",
            status: "Pending",
            isEditedByEmployee: true,
          },
        ],
      },
      {
        date: "26th July 2021",
        regularHours: "",
        overtime: "",
        worktimeDetails: [],
      },
    ],
  },
];
