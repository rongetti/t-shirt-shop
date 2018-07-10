import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ProductsList}/>
                <Route path='/product/:id' component={ProductDetails}/>
            </Switch>
        )
    }

}

export default App;
