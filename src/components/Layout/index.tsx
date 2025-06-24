'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { GlobalStyles } from './GlobalStyles';
import {  Footer, Header } from '..';
import { useState } from 'react';
import StyledComponentsRegistry from '../global/registry';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        options={{
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        }}
      >
        <GlobalStyles />
        <div className={'complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
