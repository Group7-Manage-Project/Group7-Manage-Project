import { combineReducers } from "redux";
import userSignUpEmployeesReducer from '../container/admin/employees/module-sign-up/reducer'
import listEmployeesReducer from '../container/admin/employees/module-list-employees/reducer'
import userUpdateReducer from '../container/admin/employees/module-update-employee/reducer'
import deleteEmployeeReducer from '../container/admin/employees/module-delete-employee/reducer'
import deleteEmployeeFlgReducer from '../container/admin/employees/module-delete-employee-flg/reducer'

import insertTaskReducer from '../container/admin/task/module-insert-task/reducer'
import listEmployeesSelectReducer from '../container/admin/task/module-list-employees-select/reducer'
import listTaskReducer from '../container/admin/task/module-list-tasks/reducer'
import listTaskTreeReducer from '../container/admin/task/module-list-task-tree/module/reducer'
import listCategoryTaskReducer from '../container/admin/task/module-list-category/reducer'
import listDepartmentReducer from '../container/admin/task/module-list-department/reducer'
import listCategoryByDepartmentReducer from '../container/admin/task/module-list-category-by-department/reducer'
import insertDepartmentReducer from '../container/admin/task/department/module-insert-department/reducer'
import insertCategoryReducer from '../container/admin/task/category/module-insert-category/reducer'
import departmentUpdateReducer from '../container/admin/task/department/module-insert-department/reducer'
import detailDepartmentReducer from '../container/admin/task/department/module-detail-department/reducer'
import detailTaskReducer from '../container/admin/task/detail-task/module-detail-task/reducer'
import userSignUpReducer from '../container/home/home-page/module-sign-in/reducer'




import listTaskToDoReducer from '../container/admin/dashboard/module-list-task-to-do/reducer'
import listTaskDoingReducer from '../container/admin/dashboard/module-list-task-doing/reducer'
import listTaskDoneReducer from '../container/admin/dashboard/module-list-task-done/reducer'


import insertCommentReducer from '../container/admin/task/detail-task/module-insert-comment/reducer'
import listCommentReducer from '../container/admin/task/detail-task/module-list-comment/reducer'
import taskUpdateReducer from '../container/admin/task/detail-task/module-update-task/reducer'

import scheduleInsertReducer from '../container/admin/schedule/module-insert-schedule/reducer'
import listScheduleReducer from '../container/admin/schedule/module-list-schedule/reducer'
import updateScheduleReducer from '../container/admin/schedule/module-update-schedule/reducer'
import deleteScheduleReducer from '../container/admin/schedule/module-delete-schedule/reducer'

import listCountReducer from '../container/admin/detail-person/module-list-count/reducer'

import listCountCategoryReducer from '../container/admin/statistical-task/module-count-category/reducer'
import listCountEmployeesReducer from '../container/admin/statistical-task/module-count-employees-phase/reducer'

const rootReducer = combineReducers({
    userSignUpEmployeesReducer,
    listEmployeesReducer,
    userUpdateReducer,
    deleteEmployeeReducer,
    deleteEmployeeFlgReducer,
    
    insertTaskReducer,
    listEmployeesSelectReducer,
    listTaskReducer,
    listTaskTreeReducer,
    listCategoryTaskReducer,
    listDepartmentReducer,
    listCategoryByDepartmentReducer,
    insertDepartmentReducer,
    insertCategoryReducer,
    departmentUpdateReducer,
    detailDepartmentReducer,


    detailTaskReducer,
    insertCommentReducer,
    taskUpdateReducer,

    userSignUpReducer,

    


    listCountEmployeesReducer,
    listCountCategoryReducer,
    listCommentReducer,
    listTaskToDoReducer,
    listTaskDoingReducer,
    listTaskDoneReducer,



    scheduleInsertReducer,
    listScheduleReducer,
    updateScheduleReducer,
    deleteScheduleReducer,

    listCountReducer
    
});
export default rootReducer