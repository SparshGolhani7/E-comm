// import React from 'react'

// const MyCart = () => {
//   return (
//     <div>MyCart</div>
//   )
// }

// export default MyCart


import React, { useState } from "react";
import { Button, Card, InputNumber, Row, Col, Space, Typography } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import jsonData from "../products.json"

const { Title, Text } = Typography;

export default function MyCart() {
  const [cartItems, setCartItems] = useState(jsonData)

  const handleQuantityChange = (id, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>My Cart</Title>
      <Row gutter={[16, 16]}>
        {cartItems.map((item) => (
          <Col span={8} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.name} src={item.imageUrl} />}
              actions={[
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
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) => handleQuantityChange(item.id, value)}
                  style={{ width: "100%" }}
                />
                <Text strong>Total: ₹{item.price * item.quantity}</Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <Text strong>Total Price: ₹{getTotalPrice()}</Text>
        <Button type="primary" size="large" style={{ height: "40px" }}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
