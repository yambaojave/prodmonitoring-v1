export const NAVBAR_MODULES = {
    Monitoring : [
        { id: 1, label: "Dashboard", route: "/pages/dashboard"},
        { id: 2, label: "Work Group Sheets", route: "/pages/workgroupsheets" },
        { id: 3, label: "Man", route: "/pages/man" },
        { id: 4, label: "Machine", route: "/pages/machine" },
        { id: 5, label: "Method", route: "/pages/method" },
        { id: 6, label: "Material", route: "/pages/material" },
        { id: 7, label: "Environment", route: "/pages/environment" },
      ],
    Report : [
        { id: 1, label: "MAN reports", route: "/pages/reports/report-man" },
        { id: 2, label: "MACHINE reports", route: "/pages/reports/report-machine" },
        { id: 3, label: "METHOD reports", route: "/pages/reports/report-method" },
        { id: 4, label: "MATERIAL reports", route: "/pages/reports/report-material" },
        { id: 5, label: "ENVIRONMENT reports", route: "/pages/reports/report-environment" },
    ],
    Utilities : [
        { id: 1, label: "Material Matrix", route: "/pages/sheet" },
    ],
};

export const USER_SETTINGS = [
    { id: 1, label: "Account Settings", route: "/pages/account"}
];