// import { useEffect, useState } from "react";
// import {
//   Container,
//   Image,
//   Row,
//   Col,
//   ListGroup,
//   Badge,
//   Button,
// } from "react-bootstrap";
// import { Link, useParams } from "react-router";
// import Product from "../components/Product";
// import Rating from "../components/Rating";
// import { addToCart } from "../slices/cartSlice";
// import { useDispatch } from "react-redux";
// function ProductPage() {
//   const [product, setProduct] = useState({});
//   const [qty, setQty] = useState(1);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const incrementQty = () => {
//     if (qty == product.countInStock) {
//       return;
//     }
//     setQty(qty + 1);
//   };
//   const decrementQty = () => {
//     if (qty == 1) {
//       return;
//     }
//     setQty(qty - 1);
//   };
//   useEffect(() => {
//     fetch("http://localhost:3000/products/" + id)
//       .then((resp) => resp.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.log(err.message));
//   }, []);
//   return (
//     <div className="my-3">
//       <Container>
//         <Link className="btn btn-light" to="/">
//           Go Back
//         </Link>
//         <Row className="my-2">
//           <Col md={5}>
//             <Image src={product.image} fluid />
//           </Col>
//           <Col md={4}>
//             <ListGroup variant="flush">
//               <ListGroup.Item>{product.name}</ListGroup.Item>
//               <ListGroup.Item>${product.price}</ListGroup.Item>
//               <ListGroup.Item>
//                 <Rating value={product.rating} />
//               </ListGroup.Item>
//               <ListGroup.Item>{product.description}</ListGroup.Item>
//             </ListGroup>
//           </Col>
//           <Col md={3}>
//             <ListGroup>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Price:</Col>
//                   <Col>${product.price}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Status:</Col>
//                   <Col>
//                     {product.countInStock != 0 ? (
//                       <Badge bg="success">In Stock</Badge>
//                     ) : (
//                       <Badge bg="secondary">Out of Stock</Badge>
//                     )}
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//               {product.countInStock != 0 && (
//                 <ListGroup.Item>
//                   <Button variant="light" size="sm" onClick={decrementQty}>
//                     -
//                   </Button>
//                   <span className="mx-2">{qty}</span>
//                   <Button variant="light" size="sm" onClick={incrementQty}>
//                     +
//                   </Button>
//                 </ListGroup.Item>
//               )}
//               <ListGroup.Item>
//                 <Button
//                   variant="dark"
//                   disabled={product.countInStock == 0}
//                   onClick={() => {
//                     dispatch(addToCart(product));
//                   }}
//                 >
//                   Add to Cart
//                 </Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ProductPage;
