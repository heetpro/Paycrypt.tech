'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import Button from '@/components/comman/Button';
import AnimatedLink  from '@/components/comman/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
    <div className="flex text-2xl font-bold uto">PayCrypt</div>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu as any}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Login" />
          <Button padding="0.5rem 0.75rem" text="Get Started" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
