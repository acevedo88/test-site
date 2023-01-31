import React, {useState} from 'react'
import {PageButton} from '../ButtonElements'
import {
    WelcomeContainer,
    WelcomeContent,
    WelcomeH1,
    WelcomeH2,
    WelcomeP1,
    WelcomeBtnWrapper,
    ArrowForward,
    ArrowRight
} from './WelcomeElements'

function WelcomeSection() {

    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <WelcomeContainer>
        <WelcomeContent>
            <WelcomeH1> Welcome to TheOutfitter.Guide</WelcomeH1>
            <WelcomeP1>As hunters and guides ourselves, we believe that
                the current hunter {'< >'} outfitter interaction model is ripe 
                for innovation, and our platform is aimed at reducing the friction
                between hunters and outfitters.
            </WelcomeP1>
            <WelcomeP1>For hunters, our platform increases transparency and 
                preparedness for high-dollar big game western hunts helping lead 
                to higher success rates and a tailored white-glove experience.
            </WelcomeP1>
            <WelcomeP1>For outfitters, we reduce operational overhead, remove customer 
                success concerns, and open new streams of revenue to grow your business 
                like a software company.
            </WelcomeP1>
            <WelcomeH2>Who are you?</WelcomeH2>
            <WelcomeBtnWrapper>
                <PageButton to='/outfitter'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                big='true'
                fontBig='true'
                primary='true'
                dark='false'
                >
                    Outfitter {hover ? <ArrowForward /> : <ArrowRight/>}
                </PageButton>
                <PageButton to='/'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                big='true'
                fontBig='true'
                primary='true'
                dark='false'
                >
                    Hunter {hover ? <ArrowForward /> : <ArrowRight/>}
                </PageButton>
            </WelcomeBtnWrapper>
        </WelcomeContent>
    </WelcomeContainer>
  )
}

export default WelcomeSection