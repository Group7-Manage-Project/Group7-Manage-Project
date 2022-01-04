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

import detailTaskReducer from '../container/admin/task/detail-task/module-detail-task/reducer'
import userSignUpReducer from '../container/home/home-page/module-sign-in/reducer'


import listCountEmployeesReducer from '../container/admin/dashboard/module-count-employees-phase/reducer'
import listCountCategoryReducer from '../container/admin/dashboard/module-count-category/reducer'


import insertCommentReducer from '../container/admin/task/detail-task/module-insert-comment/reducer'
import listCommentReducer from '../container/admin/task/detail-task/module-list-comment/reducer'
import taskUpdateReducer from '../container/admin/task/detail-task/module-update-task/reducer'

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


    detailTaskReducer,
    insertCommentReducer,
    taskUpdateReducer,

    userSignUpReducer,


    listCountEmployeesReducer,
    listCountCategoryReducer,
    listCommentReducer
});
export default rootReducer