'use client';
import Image from 'next/image';
import { Wrapper, Inner, HeroTextContainer } from './styles';
import { Button } from '@/components';
import MaskText from '@/components/comman/MaskText';
import { useIsMobile } from '@/components/global/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>

        <HeroTextContainer>
          <div className='items-center text-center w-full uppercase gap-2 text-[#D39B96] text-base merih tracking-widest'
            style={{
              fontSize: 'clamp(0.875rem, 0.75vw, 100rem)',
            }}
          >
            <span>Available for Mainnet


            </span>
          </div>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <div className="flex gap-4">
          <Button padding="clamp(0.875rem, 0.75vw, 100rem) 2rem" text="Get Started" />
          <Button padding="clamp(0.875rem, 0.75vw, 100rem) 2rem" text="Get Started" />
        </div>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
