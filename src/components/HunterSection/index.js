import React from 'react'
import {
    HunterContainer,
    GeneralContent,
    HunterH1,
    HunterP1,
    HunterP2
} from './HunterElements'

function HunterInfo() {
  return (
    <HunterContainer>
      <GeneralContent>
        <HunterH1>Hunter General Information</HunterH1>
        <HunterP1>The best resource to be prepared for a guided hunt Period.</HunterP1>
        <HunterP2>With TheOutfitter.Guide you get:</HunterP2>
        <HunterP2>-Digital signature and payment with our network of partner outfitters</HunterP2>
        <HunterP2>-Curated emails focused on making you, the hunter, prepared for your guided hunt</HunterP2>
        <HunterP2>-Partner deals and discounts to help you gear up for your adventure.</HunterP2>
        <HunterP2>-Hunter questionnaire to gather all important hunter information</HunterP2>
        <HunterP2>-Free SWAG when you recommend your outfitter to our network (our hats are REAL nice)</HunterP2>
      </GeneralContent>
    </HunterContainer>
  )
}

export default HunterInfo