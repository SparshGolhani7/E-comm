import React,{useState} from 'react'
import jsonData from "../products.json"
import { Input, Button, Card, Row, Col } from 'antd';

const { Search } = Input;



const Home = ({filteredItems}) => {


  
  
  return (<>


<Row gutter={16}>
        {filteredItems.map(item => (
          <Col span={8} key={item.id}>
            <Card title={item.name} bordered={false}>
              <p>Category: {item.category}</p>
              <img src={item.image} style={{height:"100px",width:"100px" }}></img>
            </Card>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default Home



 

  









