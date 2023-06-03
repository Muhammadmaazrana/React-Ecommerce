// import React from 'react'

// function SingleProduct() {
//   return (
//     <div>
//       <h1>single product</h1>
//     </div>
//   )
// }

// export default SingleProduct


import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import FormatPrice from "./Helper/FormatPrice";

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const { getSingleproduct, isSingleLoading, singleProduct } = useProductContext();
  const{
    id:alias,
    name,
    company,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
    price,
  }=singleProduct;
  const { id } = useParams();
  useEffect(() => {
    getSingleproduct(`${API}?id=${id}`);
  }, []);
if(isSingleLoading){
  return <h1>Loading........</h1>
}

  console.log(id)
  return (
     <div>
   <PageNavigation title={name}/>
  <div className="container my-5">
  <div className="row">
    <div className="main-sec">
<div className="imageSec col-6">
  <MyImage imgs={image} />
</div>
<div className="product-data col-6">
<h2>{name}</h2>
<p>{stars}</p>
<p>{reviews} reviews</p>
<p className="product-data-price">
  MRP: <del>
    <FormatPrice price={price + 250000}/>
  </del>
</p>
<p className="product-data-price product-data-real-price">
   Deal of the Day:
    <FormatPrice price={price}/>
</p>
<div>{description}</div><br />
<div className='stock'>Availabe: <b>{stock>0?"In Stock":"Not Available"}</b></div>
<div className="id">
  ID: <b>{id}</b>
</div>
<div className="company">
  Company:<b> {company}</b>
</div>
<div className="category">
category:<b> {category}</b>
</div>
</div></div>


  </div></div></div>
  )
};


// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;

export default SingleProduct;
