import React from 'react';
import logo from './logo.png';
import './App.css';
import Main from './components/main';

import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';


function App() {
  return (

    <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<span ><span style={{ color: '#ddd' }}> </span><strong><Link to="/" className="menuColor">Portfolio</Link></strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    
  );
}

export default App;
