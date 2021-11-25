import { BrowserRouter, Switch, Route} from "react-router-dom";
import {routerHome,routerAdmin} from './router';
import AdminTemplate from './template/admin.layout';
import HomeTemplate from'./template/home.layout';
import DetailTask from './container/admin/task/detail-task'
import PageNotFound from './container/home/page-not-found'



function App() {

  const showMeuHome = (router)=>{
    if(router && router.length >0){
      return router.map((item,index)=>{
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.Component}/>
      })
    }
  }

  const showMeuAdmin = (router)=>{
    if(router && router.length >0){
      return router.map((item,index)=>{
        return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component}/>
      })
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {showMeuAdmin(routerAdmin)}
          {showMeuHome(routerHome)}
          <Route path="/admin/task/detail-task/:task_id" component={DetailTask} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
