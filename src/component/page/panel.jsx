import React from 'react';
import ShowPanel from '../item/showPanel'
import GridPanel from '../item/gridPanel'

class Panel extends React.Component{
    render(){
        return (
            <section>
                <ShowPanel />
                <GridPanel />
            </section>
        )
    }
}

export default Panel;