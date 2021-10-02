import {
    Switch,
    Route
} from "react-router-dom";

import { Home, Items } from '../components'


const Routes = () =>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/items" component={Items} />
        <Route path='*' component={Home} />
    </Switch>


export default Routes;