import React from 'react';
import {environment} from 'react-router-component'

class Grid extends React.Component{
    state = {
        className:'grid-list'
    };
    render(){
        return (
            <div className={this.state.className} onTouchStart={this.circleDown} onTouchEnd={this.circleUp} onTouchTap={this.circleTap}>
                <i className={`fa ${this.props.icon}`} />
                <span>{this.props.title}</span>
            </div>
        )
    }
    circleDown = ()=>{
        this.setState({className:'grid-list active'});
    };
    circleTap = ()=>{
        environment.hashEnvironment.navigate(this.props.href,function(err){})
    };
    circleUp = ()=>{
        this.setState({className:'grid-list'});
    }
}


class GridPanel extends React.Component{
    render(){
        return (
            <div>
                <Grid href="/AddVPN" icon="fa-plus-square-o" title="创建"/>
                <Grid href="/Billing" icon="fa-lemon-o" title="账户"/>
            </div>
        )
    }
}

export default GridPanel;