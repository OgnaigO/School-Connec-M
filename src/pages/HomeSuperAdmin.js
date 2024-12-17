import React, { useState } from 'react';
import Headersteacher from '../component/Headersteacher';
import { Outlet } from 'react-router-dom';
import { EuiPageTemplate } from '@elastic/eui';
import Footer from '../component/Footer';
import Sidebarteacher from '../component/SideBarSuperAdmin';

export default function Hometeacher() {
  const [openSideBarteacher, setOpenSideBarteacher] = useState(false);  
  const clickSideBarteacher = () => setOpenSideBarteacher(!openSideBarteacher);  
  
  return (
    <>
      <EuiPageTemplate>
        <Headersteacher clickSideBarteacher={clickSideBarteacher} />  
        {openSideBarteacher && (
          <EuiPageTemplate.Sidebar minWidth='300px' paddingSize='s'>
            <Sidebarteacher />  
          </EuiPageTemplate.Sidebar>
        )}
        <Outlet />
        <Footer />
      </EuiPageTemplate>
    </>
  );
}
