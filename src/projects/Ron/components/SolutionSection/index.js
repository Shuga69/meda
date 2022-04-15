import React from "react";
import SolutionCard from "./SolutionCard";
import solutionImage1 from "../../assets/solution1.png";
import solutionImage2 from "../../assets/solution2.png";
import "./style.css";
const SolutionSection = () => {
  return (
    <div className='ron-solution-section'>
      <SolutionCard
        title='Real Estate'
        description='EverythingLegal remote online notary system is professional real estate closing service and software. Simply request a signin, and one of our notaries will take care of the rest. Real estate agents and lenders are all always welcome to attend the virtual closing with the signers.'
        image={solutionImage1}
        listTitle='Using our service makes real estate closings easy!'>
        <ul>
          <li>No technology training required</li>
          <li>No need to drive to an office</li>
          <li>Easy scheduling or day of service</li>
        </ul>
      </SolutionCard>
      <SolutionCard
        style={{ flexDirection: "row-reverse", marginTop: "100px" }}
        image={solutionImage2}
        title='Business'
        description='Many industries rely on notarized documents. You no longer need to schedule an onsite notary. With EverythingLegal`s digital notary platform you can easily schedule or get same-day service on the documents you need notarized.'
        listTitle='Industries that rely on our technology'>
        <ul>
          <li>Law firms</li>
          <li>Private wealth management</li>
          <li>Financial services</li>
          <li>Auto insurance</li>
          <li>And more...</li>
        </ul>
      </SolutionCard>
    </div>
  );
};

export default SolutionSection;
