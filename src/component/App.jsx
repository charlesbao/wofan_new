import React from 'react';
import AnimatedLocations from 'react-router-component-transition'
import {Location} from 'react-router-component'

import Panel from './page/panel'
import AddVPN from './page/addVPN'
import Billing from './page/billing'

import './App.less';

class App extends React.Component{
    render(){
        return (
            <AnimatedLocations hash className="Main"
                               transitionName="push"
                               popStateTransitionName="pop"
                               transitionEnterTimeout={600}
                               transitionLeaveTimeout={600}>
                <Location path="/" handler={Panel} />
                <Location path="/AddVPN" handler={AddVPN} />
                <Location path="/Billing" handler={Billing} />
            </AnimatedLocations>
        )
    }
}

export default App