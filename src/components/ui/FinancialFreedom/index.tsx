'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
} from './styles';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import financial_freedom_banner from '../../../../public/images/financial_freedom_banner.png';
import freedom_mobile_banner from '../../../../public/images/freedom_mobile_banner.png';
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';
import { useIsMobile } from '@/components/global/useIsMobile';
import MaskText from '@/components/comman/MaskText';
import RevealCover from '@/components/comman/RevealCover';

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <BannerCtn>
          <RevealCover />
          <Div
            variants={imageVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image src={freedom_mobile_banner} alt="banner_img" fill />
            ) : (
              <Image src={financial_freedom_banner} alt="banner_img" fill />
            )}
          </Div>
        </BannerCtn>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default FinancialFreedom;
