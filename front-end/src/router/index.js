import HomePage from "../container/home/home-page"
import Dashboard from "../container/admin/dashboard"
import Employees from "../container/admin/employees"
import Task from "../container/admin/task"
import Schedule from "../container/admin/schedule"
import DeTailPerson from "../container/admin/detail-person"
import Satstatistical from "../container/admin/statistical-task"

const routerHome = [
    {
        path:"/",
        exact:true,
        Component:HomePage
    }
]

const routerAdmin = [
    {
        path:"/admin/dashboard",
        exact:true,
        Component:Dashboard
    },
    {
        path:"/admin/employees",
        exact:false,
        Component:Employees
    },
    {
        path:"/admin/tasks",
        exact:false,
        Component:Task
    },
    {
        path:"/admin/schedule",
        exact:false,
        Component:Schedule
    },
    {
        path:"/admin/profile",
        exact:false,
        Component:DeTailPerson
    },
    {
        path:"/admin/statistical",
        exact:false,
        Component:Satstatistical
    },

]

export {routerHome,routerAdmin}