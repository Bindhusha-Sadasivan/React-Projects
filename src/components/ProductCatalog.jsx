// import React from "react";

// function ProductCatalog() {
//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <h2>To buy mobile phones</h2>
//       <img src="../images.1/jpg" alt="Mobile Phone" />
//       <br />
//       <br />
//       <a href="https://www.google.com">Click here to buy</a>
//       <h3>Rating:4.5 stars</h3>
//       <h4>Rs.10000</h4>
//     </div>
//   );
// }

// export default ProductCatalog;

// ==========================================================================================================

// const ProductCatalog = () => {
//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <h2>To buy mobile phones</h2>
//       <img src="../images.1/jpg" alt="Mobile Phone" />
//       <br />
//       <br />
//       <a href="https://www.google.com">Click here to buy</a>
//       <h3>Rating:4.5 stars</h3>
//       <h4>Rs.10000</h4>
//     </div>
//   );
// };

// export default ProductCatalog;

// ==============================================================================================================

// function ProductCatalog(props) {
//   console.log(props);
//   console.log(props.rating);
//   return (
//     <div>
//       <img src={props.imgSource} alt="Mobile Phone" />
//       <a href="https://www.google.com">{props.buyLink}</a>
//       <h3>{props.rating}</h3>
//       <h4>{props.price}</h4>
//     </div>
//   );
// }

// export default ProductCatalog;

// =============================================================================================================

// function ProductCatalog(props) {
//   console.log(props);
//   console.log(props.rating);
//   return (
//     <div>
//       <img src={props.propObject.imgSource} alt="Mobile Phone" />
//       <a href="https://www.google.com">{props.propObject.buyLink}</a>
//       <h3>{props.propObject.rating}</h3>
//       <h4>{props.propObject.price}</h4>
//     </div>
//   );
// }

// export default ProductCatalog;

// =================================================================================================================

function ProductCatalog(props) {
  console.log(props);
  console.log(props.rating);
  return (
    <div>
      <img src={props.propObject.imgSource} alt="Mobile Phone" />
      <br />
      <a href="https://www.google.com">{props.propObject.buyLink}</a>
      <h3>{props.propObject.rating}</h3>
      <h4>{props.propObject.price}</h4>
    </div>
  );
}

export default ProductCatalog;
