import { Featured, HeroSection, OffersSection } from '@/components'
import FinancialFreedom from '@/components/ui/FinancialFreedom'
import FinancialFuture from '@/components/ui/FinancialFuture'
import React from 'react'

const page = () => {
  return (
    <div>
       <HeroSection />
       <Featured /> 
       <OffersSection />
       <FinancialFuture />
       <FinancialFreedom />
    </div>
  )
}

export default page
