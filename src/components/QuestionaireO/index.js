import React, {useState} from 'react'
import { PageButton3 } from '../ButtonElements'
import {
    QuestionContainer,
    QuestionWrapper,
    QuestionH1,
    Form,
    Input,
    Label,
    InputWrapper
} from './QuestionElements'

function QuestionnaireO() {
  const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <QuestionContainer>
      <QuestionWrapper>
        <QuestionH1>Outfitter Questionnaire</QuestionH1>
        <Form>
          <InputWrapper>
            <Label>*First Name</Label>
            <Input type='text' />
          </InputWrapper>
          <InputWrapper>
            <Label>*Last Name</Label>
            <Input type='text' />
          </InputWrapper>
          <InputWrapper>
            <Label>*Hunter Email</Label>
            <Input type='text' />
          </InputWrapper>
          <InputWrapper>
            <Label>*Outfitter Name</Label>
            <Input type='text' />
          </InputWrapper>
          <InputWrapper>
            <Label>*Outfitter State</Label>
            <Input type='text' />
          </InputWrapper>
          <InputWrapper>
            <Label>Phone Number</Label>
            <Input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
          </InputWrapper>
        </Form>
        <PageButton3 
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              big='true'
              fontBig='true'
              primary='false'
              dark='false'>
          Submit
        </PageButton3>
      </QuestionWrapper>
    </QuestionContainer>
  )
}

export default QuestionnaireO