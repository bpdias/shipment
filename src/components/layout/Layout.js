import React from 'react';
import Aux from '../../hocs/Aux';
import './Layout.scss';
import Header from '../header';

const Layout = props => (
  <Aux>
    <Header />
    <main className="Container">
      {props.children}
    </main>
  </Aux>
);

export default Layout;
