import React from "react";
import Text from "../Text";
import ProcessCard from "./ProcessCard";
import Button from "../Button";
import "./style.css";
const Process = () => {
  return (
    <div className='ron-process-section'>
      <Text className='ron-process-title' text='The process is simple' />
      <div className='ron-process-container'>
        <ProcessCard
          title='Create an Account'
          subtitle='Create your EverythingLegal account.'
          number={1}
        />
        <ProcessCard
          title='Upload Your Document'
          subtitle='Easily upload and schedule your notarization.'
          number={2}
        />
        <ProcessCard
          title='Connect with a Notary'
          subtitle='Finalize your document and review with your notary.'
          number={3}
        />
        <ProcessCard
          title='Sign Your Document'
          subtitle='Sign the document and it`s ready to go.'
          number={4}
        />
      </div>
      <div className='ron-process-button-container'>
        <Button text='Schedule a Notarization Now' />
        <Button style={{ marginLeft: 20 }} text='Register as a Notary' />
      </div>
    </div>
  );
};

export default Process;
