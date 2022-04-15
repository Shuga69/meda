import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Text from "../Text";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./style.css";
import ModalProductView from "./ModalProductView";
import CustomInput from "./CustomInput";
import Button from "../Button";
import card1 from "../../assets/visaCard1.png";
import card2 from "../../assets/visaCard2.png";
import card3 from "../../assets/visaCard3.png";
import card4 from "../../assets/visaCard4.png";

const Modal = ({ isShowing, hide }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => hide());
  const countries = [
    "Ukraine",
    "Canada",
    "France",
    "Germany",
    "Ireland",
    "Italy",
  ];
  const methods = [
    "International shipping",
    "Eco-friendly shipping",
    "Overnight shipping",
    "Expedited shipping",
  ];
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='gabor-modal-overlay' />
          <div
            className='gabor-modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'>
            <div ref={ref} className='gabor-modal'>
              <div className='gabor-modal-header'>
                <Text
                  style={{ fontWeight: 600, fontSize: 20 }}
                  text='Added Items (2)'
                />
                <button
                  type='button'
                  className='gabor-modal-close-button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <ModalProductView
                title='Nulon Womens Trainers'
                color='Black Suede/Red'
                size='4.5'
                quantity='1'
                sale='£95.00'
                price='£59.00'
              />
              <ModalProductView
                title='Waltz Womens Casual Trainers'
                color='Black'
                size='4.5'
                quantity='1'
                price='£99.00'
              />
              <div className='gabor-modal-inputs-container'>
                <CustomInput
                  label='Deliver To'
                  placeholder='Ukraine'
                  data={countries}
                  listName='country'
                />
                <CustomInput
                  label='Delivery Method'
                  placeholder='Standart international...'
                  data={methods}
                  listName='method'
                />
                <div className='gabor-custom-modal-input-container'>
                  <label
                    className='gabor-custom-modal-input-label'
                    htmlFor='discount'>
                    Discount
                  </label>
                  <div>
                    <input
                      className='gabor-custom-modal-input-discount'
                      placeholder='#ABC12345678'
                    />
                    <Button
                      className='gabor-custom-modal-discount-btn'
                      text='Apply'
                    />
                  </div>
                </div>
              </div>
              <div className='gabor-bag-modal-checkout-container'>
                <div className='gabor-bag-modal-checkout-button-container'>
                  <Button
                    style={{
                      background: "#050505",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      width: "100%",
                    }}
                    text='CHECKOUT & PAY'
                  />
                  <div className='gabor-bag-modal-checkout-cards'>
                    <img src={card1} />
                    <img src={card2} />
                    <img src={card3} />
                    <img src={card4} />
                  </div>
                </div>
                <div className='gabor-bag-modal-checkout-text-container'>
                  <div className='gabor-bag-modal-checkout-text'>
                    <Text
                      className='gabor-bag-modal-checkout-title'
                      text='Sub Total'
                    />
                    <Text
                      style={{ fontWeight: 600, fontSize: 15 }}
                      text='£158.00'
                    />
                  </div>
                  <div className='gabor-bag-modal-checkout-text underline'>
                    <Text
                      className='gabor-bag-modal-checkout-title'
                      text='Delivery'
                    />
                    <Text
                      style={{ fontWeight: 600, fontSize: 15 }}
                      text='£12.00'
                    />
                  </div>
                  <div className='gabor-bag-modal-checkout-text'>
                    <Text
                      style={{
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: "130%",
                      }}
                      text='Total'
                    />
                    <Text
                      style={{
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: "130%",
                      }}
                      text='£170.00'
                    />
                  </div>
                  <Text
                    style={{ textAlign: "right" }}
                    className='gabor-bag-modal-checkout-title'
                    text='Excluding Delivery'
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
export default Modal;
