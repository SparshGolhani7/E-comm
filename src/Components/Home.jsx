import React,{useContext, useState} from 'react'
import jsonData from "../products.json"
import { Input, Button, Card, Row, Col } from 'antd';
import { CartContext } from '../context/CartContext';

// const { Search } = Input;



const Home = ({filteredItems}) => {

  const {count,increment,decrement} = useContext(CartContext)

  return (<>
<Row gutter={16}>
        {filteredItems.map(item => (
          <Col span={8} key={item.id}>
            <Card title={item.name} bordered={false}>
              <p>Category: {item.category}</p>
              <img src={item.image} style={{height:"100px",width:"100px" }}></img>
              <br />
              <button onClick={()=>decrement()}>-</button>
              {count===0 ? (<button onClick={increment}>Add</button>):<span>{count}</span>}
              <button onClick={()=>increment()}>+</button>

            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home



 

  









