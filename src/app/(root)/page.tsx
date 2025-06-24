import { Featured, FinancialFuture, FinancialFreedom, HeroSection, IntroSection, JoinSection, OffersSection, FAQ } from '@/components'

import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancialFuture />
      <FinancialFreedom />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </div>
  )
}

export default page
