import React from 'react';
import {Switch,Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';   
import Header from './components/header';
import MainLayout from './hoc/MainLayout';
import Contacts from './components/contacts';
import PostComponent from './components/posts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
                <Switch>
                    <Route path="/article/:id" component={PostComponent} />
                    <Route exact path="/" component={Home} />
                    <Route path="/contacts" component={Contacts}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
};

export default Routes;