// import React from 'react'

// const Wishlist = () => {
//   return (
//     <div>Wishlist</div>
//   )
// }

// export default Wishlist

import React, { useState } from "react";
import { Button, Card, Row, Col, Space, Typography } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import jsonData from "../products.json"; // Assuming this contains your product data

const { Title, Text } = Typography;

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState(jsonData); // Using the same JSON data for products

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    // You can implement logic to move the item to the cart here
    console.log("Move to cart:", item);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>My Wishlist</Title>
      <Row gutter={[16, 16]}>
        {wishlistItems.map((item) => (
          <Col span={8} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.name} src={item.imageUrl} />}
              actions={[
                <Button
                  type="primary"
                  onClick={() => moveToCart(item)}
                >
                  Move to Cart
                </Button>,
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>,
              ]}
            >
              <Card.Meta title={item.name} description={`₹${item.price}`} />
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text strong>{item.name}</Text>
                <Text>₹{item.price}</Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
