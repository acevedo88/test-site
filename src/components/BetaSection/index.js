import React, {useState} from 'react'
import Video from '../../video/elk_bugle.mp4'
import {Button} from '../ButtonElements'
import{
    BetaContainer,
    BetaBg,
    VideoBg,
    BetaContent,
    BetaH1,
    // BetaP,
    BetaBtnWrapper,
    ArrowForward,
    ArrowRight
} from './BetaElements'

function BetaSection() {
const [hover, setHover] = useState(false);

const onHover = () =>{
    setHover(!hover)
}
  return (
    <BetaContainer>
        <BetaBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </BetaBg>
        <BetaContent >
            <BetaH1>Coming Spring '23</BetaH1>
            <BetaBtnWrapper>
                <Button to='welcome'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Sign Up Today! {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </BetaBtnWrapper>
        </BetaContent>
    </BetaContainer>
  )
}

export default BetaSection