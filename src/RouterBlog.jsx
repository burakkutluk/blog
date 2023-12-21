// rcc
// rfc

import React, { Component } from 'react';

// ROUTER
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

// Header, Main, Footer
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BlogPage from './components/blog/BlogPage';
import RegisterList from './components/register/RegisterList';
import RegisterUpdate from './components/register/RegisterUpdate';
import RegisterCreate from './components/register/RegisterCreate';
import RegisterView from './components/register/RegisterView';


// CLASS
function RouterBlog() {
    
    //let { registerId } = useParams();

        return (
            // dark mode: App 
            <div className="App">

                {/* HEADER */}
                <Header logo="fa-brands fa-salesforce" />

                {/* ROUTING */}
                {/* dark mode:App-header */}
                <div className='container-fluid App-header'>
                    <Routes>

                        {/* index and root path */}
                        <Route path={"/"} element={<Main />} />
                        <Route path={"/index"} element={<Main />} />

                        {/* Blog */}
                        <Route path={"/blog"} element={<BlogPage />} />

                            {/* Blog */}
                            <Route path={"/register/list"} element={<RegisterList />} />
                            <Route path={"/register/create"} element={<RegisterCreate />} />
                            <Route path={ `/register/view/:id`} element={<RegisterView />} />
                            <Route path={"/register/update/:id"} element={<RegisterUpdate />} />
 
                        {/*OTHER PATH*/}
                        {/* Bad Request */}
                        <Route path={"*"} element={<Navigate to="/" />} />
                    </Routes>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        );// end return 
}// end class 

// EXPORT 
// Wrapper Higher ORder Component (i18n)
export default withTranslation()(RouterBlog);