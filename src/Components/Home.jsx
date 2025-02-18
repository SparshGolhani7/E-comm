import React, { useContext } from "react";
import { Card, Row, Col } from "antd";
import { CartContext } from "../context/CartContext";

const Home = ({ filteredItems }) => {
  const { increment, decrement, cart } = useContext(CartContext);

  return (
    <>
      <Row gutter={16}>
        {filteredItems.map((item) => {
          const count = cart.find((cartItem) => cartItem.id === item.id)?.qty || 0;
          return (
            <Col span={8} key={item.id}>
              <Card title={item.name} bordered={false}>
                <p>Category: {item.category}</p>
                <img src={item.image} style={{ height: "100px", width: "100px" }} alt={item.name} />
                <br />
                <button onClick={() => decrement(item.id)}>-</button>
                {count === 0 ? (
                  <button onClick={() => increment(item.id, item.name,item.price,item.image)}>Add</button>
                ) : (
                  <span>{count}</span>
                )}
                <button onClick={() => increment(item.id, item.name,item.price,item.image)}>+</button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;



 

  









