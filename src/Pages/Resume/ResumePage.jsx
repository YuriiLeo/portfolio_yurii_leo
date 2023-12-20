// import { DefaultPageContainer } from 'components/DefaultPageContainer/DefaultPageContainer'
import React from 'react'
import resume from "./CV_Yurii_Leontenko.pdf"
import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer';
console.log(resume);

export default function Resume() {
  return (
    <DefaultPageContainer >
      <embed title="resume" src={resume} width="100%" height="600px" style={{
        position: "absolute"
      }} />
    </DefaultPageContainer>
  )
}
