'use client';
import Image from 'next/image';
import ParallaxText from '@/components/comman/ParallaxImages';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/comman/RevealCover';
import { useIsMobile } from '@/components/global/useIsMobile';
import companies_image from '../../../../public/images/companies.png';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={"https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Screenshot_2025-06-09_at_9.14.11%E2%80%AFPM.webp"}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={"https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Screenshot_2025-06-09_at_9.14.11%E2%80%AFPM.webp"} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
          <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
