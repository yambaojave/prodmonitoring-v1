export const NAVBAR_MODULES = {
    Monitoring : [
        { id: 1, label: "Work Group Sheets", route: "/pages/workgroupsheets" },
        { id: 2, label: "Man", route: "/pages/man" },
        { id: 3, label: "Machine", route: "/pages/machine" },
        { id: 4, label: "Method", route: "/pages/method" },
        { id: 5, label: "Material", route: "/pages/material" },
        { id: 6, label: "Environment", route: "/pages/environment" },
      ],
    Report : [
        { id: 1, label: "MAN reports", route: "/pages/reports/manreport" },
        { id: 1, label: "MACHINE reports", route: "/pages/reports/machinereport" },
        { id: 1, label: "METHOD reports", route: "/pages/reports/methodreport" },
        { id: 1, label: "MATERIAL reports", route: "/pages/reports/materialreport" },
        { id: 1, label: "ENVIRONMENT reports", route: "/pages/reports/environmentreport" },
    ],
    Utilities : [
        { id: 1, label: "Material Matrix", route: "/pages/sheet" },
    ],
};

export const USER_SETTINGS = [
    { id: 1, label: "Account Settings", route: "/pages/account"}
];