import React from 'react'
import {
    OutfitterContainer,
    GeneralContent,
    OutfitterH1,
    OutfitterP1,
    OutfitterP2
} from './OutfitterElements'

function OutfitterInfo() {
  return (
    <OutfitterContainer>
      <GeneralContent>
        <OutfitterH1>Outfitter General Information</OutfitterH1>
        <OutfitterP1>Let us take all the work of managing client interactions off your hands so that you can focus on the hunt</OutfitterP1>
        <OutfitterP2>With TheOutfitter.Guide you get, FOR FREE:</OutfitterP2>
        <OutfitterP2>-Set it and forget it document management</OutfitterP2>
        <OutfitterP2>-Worry free client engagement and preparation </OutfitterP2>
        <OutfitterP2>-One stop shop to show you all your hunters</OutfitterP2>
        <OutfitterP2>-Hunter questionnaire to gather all important hunter information</OutfitterP2>
        <OutfitterP2>-Centralized hunter management page showing you all pertinent hunter data</OutfitterP2>
      </GeneralContent>
    </OutfitterContainer>
  )
}

export default OutfitterInfo