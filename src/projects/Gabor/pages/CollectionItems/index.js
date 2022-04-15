import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import MenuTabs from "../../components/MenuTabs";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Filter from "../../components/Filter";
import productImage from "../../assets/product1.png";
import coloursIcons from "../../assets/coloursIcons.png";
import ProductCard from "../../components/ProductCard";
import IconButton from "../../components/IconButton";
import rightArrow from "../../assets/rightArrow.svg";
const CollectionItems = () => {
  const menu = [{ text: "Home" }, { text: "Women`s" }, { text: "Trainers" }];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);
  const [active, setActive] = useState();
  const productData = [
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "sale",
      saleType: "sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
    {
      title: "Wisdom Womens Casual Shoes",
      price: "£99.99",
      image: productImage,
      icons: coloursIcons,
      saleTitle: "top sale",
      saleType: "top-sales",
    },
  ];
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productData.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <Button
        key={number}
        id={number}
        style={
          number === currentPage
            ? { background: "#EEF1F7" }
            : { background: "none" }
        }
        onClick={handleClick}
        className='gabor-collection-pagination-button'
        text={number}
      />
    );
  });

  const indexOfLastProduct = currentPage * itemPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemPerPage;
  const currentProduct = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProduct = currentProduct.map((item, index) => {
    return (
      <ProductCard
        key={index}
        title={item.title}
        price={item.price}
        image={item.image}
        icons={item.icons}
        saleTitle={item.saleTitle}
        saleType={item.saleType}
      />
    );
  });
  return (
    <div className='gabor-collection-section'>
      <div className='gabor-container'>
        <div className='gabor-collection__inner'>
          <div className='gabor-collection-title-container'>
            <MenuTabs menuData={menu} />
            <Text className='gabor-collection-title' text='Womens Trainers' />
            <Text
              className='gabor-collection-subtitle'
              text='Combining comfort, practicality and top athleisure style, the Gabor trainers collection has something for everyone, be it for sports or casual fashion...'
            />
            <Button className='gabor-collection-btn' text='Read more' />
          </div>
          <Filter />
          <div className='gabor-collection-products-card-container'>
            {renderProduct}
          </div>
          <div className='gabor-collection-pagination'>
            {renderPageNumbers}
            <IconButton
              onClick={() =>
                setCurrentPage((prev) =>
                  prev === pageNumbers.length ? pageNumbers.length : ++prev
                )
              }
              icon={rightArrow}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CollectionItems;
