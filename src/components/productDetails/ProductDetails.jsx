import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../apiService/Api";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);

  const handleByNow=()=>{
    alert('The Product is out of stock..!')
  }

  return (
    <div className="prodcut-details-container">
      <img src={productDetails.image} alt="image" className="product-img" />
      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>
        <button className="by-now-button" onClick={handleByNow}>Buy Now</button>
        <Link to="/">
          <button className="go-back-home">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
