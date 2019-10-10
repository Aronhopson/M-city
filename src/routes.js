import React from 'react';
import Layout from './HOC/layout'
import { Switch } from 'react-router-dom'
import PrivateRoutes from './components/AuthRoutes/privateRoutes'
import PublicRoutes from './components/AuthRoutes/PublicRoutes'


import Home from './components/home'
import SignIn from './components/SignIn'

import Dashboard from './components/Admin/Dashboard'
import AdminMatche from './components/Admin/Matches'
import AdminEditMatch from './components/Admin/Matches/adminEdit'




const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AdminEditMatch}/>
           <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatche}/>
          <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
          <PublicRoutes {...props} restricted={true}  path="/sign_in" component={SignIn} />
          <PublicRoutes {...props} restricted={false} path="/" component={Home} />
          

        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;
