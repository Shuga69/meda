import React, { useState } from "react";
import Button from "../Button";
import ReviewStars from "../ReviewStars";
import Text from "../Text";
import ReviewComment from "./ReviewComment";
import ReviewSummaryIndicator from "./ReviewSummaryIndicator";
import "./style.css";
const ReviewSummary = () => {
  const [selectedButton, setSelectedButton] = useState("delivery");
  const selectButton = (item) => {
    setSelectedButton(item);
  };
  return (
    <div className='gabor-product-review-summary'>
      <div className='gabor-container'>
        <div className='gabor-product-review__inner'>
          <div className='gabor-product-review-menu-container'>
            <Button
              style={
                selectedButton === "Delivery"
                  ? { borderBottom: "1px solid #050505", color: "#050505" }
                  : {}
              }
              className='gabor-product-review-menu-item'
              text='Delivery'
              onClick={() => selectButton("Delivery")}
            />
            <Button
              style={
                selectedButton === "Reviews"
                  ? { borderBottom: "1px solid #050505", color: "#050505" }
                  : {}
              }
              onClick={() => selectButton("Reviews")}
              className='gabor-product-review-menu-item'
              text='Reviews'
            />
          </div>
          <div className='gabor-product-review-summary-container'>
            <Text
              className='gabor-product-review-summary-title'
              text='Review Summary'
            />
            <div className='gabor-product-review-summary-title-container'>
              <div className='gabor-product-review-summary-title-left'>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 52,
                    lineHeight: "100%",
                    marginBottom: 16,
                  }}
                  text='4.44/5'
                />

                <ReviewStars size={32} />

                <Text
                  style={{ fontWeight: 500, fontSize: 15, marginTop: 16 }}
                  text='Average from 18 reviews'
                />
              </div>
              <div className='gabor-product-review-summary-title-right'>
                <ReviewSummaryIndicator
                  percent={69}
                  quantity={12}
                  summary={5}
                />
                <ReviewSummaryIndicator percent={10} quantity={3} summary={4} />
                <ReviewSummaryIndicator percent={5} quantity={2} summary={3} />
                <ReviewSummaryIndicator percent={2} quantity={1} summary={2} />
                <ReviewSummaryIndicator percent={0} quantity={0} summary={1} />
              </div>
            </div>
            <div className='gabor-product-review-summary-comment-container'>
              <ReviewComment
                days='6 day ago'
                name='Janet SIMCOCK'
                comment='Very comfortable and smart looking trainers, suitable for winter.'
              />
              <ReviewComment
                days='1 week ago'
                name='Susan Palin'
                comment='True to size; very comfortable; smart, especially with the red flashes; and the excellent quality which one expects from Gabor shoes. A happy customer!'
              />
              <ReviewComment
                days='1 week ago'
                name='Wilma Grant'
                comment='I love Gabor shoes. Been wearing them for more than fifteen years. The recent trainers are so comfy & look good. Love the colour. One thing makes me sad is the SALE sticker that Clinkards have stuck inside. It won’t come off. I don’t want to take Clinkards advice of using soapy water or nail polish remover & spoil the shoe. Pity Clinkards feel the need to use such strong glue on such a good shoe.'
              />
              <div className='gabor-product-review-summary-add-comment'>
                <Button style={{ marginTop: 32 }} text='leave feedback' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
