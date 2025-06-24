'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  background-color: #ffffff;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
  color: #000000;
  height: 100vh;
  text-align: center;
  background-position: top center;
  background-size: contain;
`;


export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
  }

  p {
    max-width: 41.75rem;
    color: #000000;
    opacity: 0.9;
    font-size: clamp(0.875rem, 0.75vw, 100rem);
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
