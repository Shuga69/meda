import React, { useState } from "react";
import Footer from "../../components/Footer";
import MenuTabs from "../../components/MenuTabs";
import Text from "../../components/Text";
import favorite from "../../assets/Favorite.svg";
import "./style.css";
import PriceItem from "../../components/PriceItem";
import Button from "../../components/Button";
import colorsIcon from "../../assets/coloursIcons.png";
import btnBag from "../../assets/btn-bag.svg";
import wishBtn from "../../assets/wish-btn.svg";
import ProductExpandInfo from "../../components/ProductExpandInfo";
import ReviewSummary from "../../components/ReviewSummary";
import ReviewStars from "../../components/ReviewStars";
import ProductSlider from "../../components/ProductSlider";
import ProductRecentlySlider from "../../components/ReviewSummary/ProductRecentlySlider";
import productImage from "../../assets/product1.png";
import productsIcon from "../../assets/coloursIcons.png";
import CardSlider from "../../components/CardSlider";
import ProductCard from "../../components/ProductCard";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
const ProductPage = () => {
  const { isShowing, toggle } = useModal();
  const menu = [
    { text: "Home" },
    { text: "Women`s" },
    { text: "Trainers" },
    { text: "Nulon Womens Trainers" },
  ];
  const data = [
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom W123213omens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },

    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£59.00",
      image: productImage,
      icons: productsIcon,
    },
  ];
  const sizeData = [
    { size: "2.5" },
    { size: "3" },
    { size: "3.5" },
    { size: "4" },
    { size: "4.5" },
    { size: "5" },
    { size: "5.5" },
    { size: "6" },
    { size: "6.5" },
    { size: "7" },
    { size: "8" },
    { size: "9" },
  ];
  const [gift, setGift] = useState();
  return (
    <div className='gabor-home-section'>
      <div className='gabor-product-main-section'>
        <div className='gabor-container'>
          <div className='gabor-product-main-container'>
            <div className='gabor-product-slider-section'>
              <MenuTabs menuData={menu} />
              <div className='gabor-product-slider-subtitle-container'>
                <Text
                  className='gabor-product-slider-subtitle'
                  text="Women's trainers"
                />
                <Text
                  className='gabor-product-slider-subtitle'
                  text='Code: 1014401'
                />
              </div>
              <div className='gabor-product-slider-title-container'>
                <Text
                  className='gabor-product-slider-title'
                  text='Nulon Womens Trainers'
                />
                <img src={favorite} />
              </div>
              <PriceItem />
              <div className='gabor-review-product-stars'>
                <ReviewStars size={20} />
                <Text text='(18)' />
              </div>
              <ProductSlider />
            </div>
            <div className='gabor-product-information-section'>
              <Text
                className='gabor-product-information-title size'
                text='Select size'
              />
              <div className='gabor-product-information-size-container'>
                {sizeData.map((item) => {
                  return (
                    <Button
                      key={item.size}
                      className='gabor-product-inforamtion-btn-size'
                      text={item.size}
                    />
                  );
                })}
              </div>
              <Text
                className='gabor-product-information-title'
                text='Available Colours'
              />
              <img
                className='gabor-product-information-color-image'
                src={colorsIcon}
              />
              <Text
                className='gabor-product-information-title'
                text='In Stock'
              />
              <Text
                style={{ textDecoration: "underline", color: "#050505" }}
                text='Free delivery on all orders'
              />
              <div className='gabor-product-check-container'>
                <input
                  className='gabor-option-select-checkbox'
                  id='1'
                  value={gift}
                  checked={gift}
                  onChange={() => setGift(!gift)}
                  type='checkbox'
                />

                <label htmlFor='1'>
                  <div className='gabor-product-check-label'>
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 14,
                        color: "rgba(5, 5, 5, 0.7)",
                      }}
                      text='Add Gift Wrap'
                    />
                    <Text
                      style={{ fontWeight: 500, fontSize: 15 }}
                      text='£2.99'
                    />
                  </div>
                </label>
              </div>
              <ProductExpandInfo text='Product Description' />
              <hr className='gabor-product-hr' />
              <ProductExpandInfo text='Product DETAIL'>
                <ul className='gabor-product-detail-ul'>
                  <li>Uppers: Leather</li>
                  <li>Lining: Micro Fibre</li>
                  <li>Sole: Synthetic</li>
                  <li>Heel Height: 4cm</li>
                  <li>Fastening: Lace Up/Zip</li>
                  <li>Width Fitting: UK D+ Widest Fitting (Gabor H)</li>
                  <li>Manufacturer Code: 46.528</li>
                </ul>
              </ProductExpandInfo>
              <hr className='gabor-product-hr' />
              <div className='gabor-product-button-container'>
                <Button
                  className='gabor-product-add-btn'
                  icon={btnBag}
                  onClick={toggle}
                  text='ADD TO BASKET'
                />
                <Button
                  className='gabor-custom-button gabor-wish-btn'
                  icon={wishBtn}
                  text='Add to wish list'
                />

                <Modal isShowing={isShowing} hide={toggle} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewSummary />
      <div className='gabor-container'>
        <div className='gabor-product-recently-slider'>
          <CardSlider
            data={data}
            title='You May Also Like'
            component={(item, classes) => {
              return (
                <div className={"gabor-season-card-section " + classes}>
                  <ProductCard
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    icons={item.icons}
                    className='gabor-slider-product'
                  />
                </div>
              );
            }}
          />
          <CardSlider
            data={data}
            title='Recently viewed'
            component={(item, classes) => {
              return (
                <div className={"gabor-season-card-section " + classes}>
                  <ProductCard
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    icons={item.icons}
                    className='gabor-slider-product'
                  />
                </div>
              );
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
