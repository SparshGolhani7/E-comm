import React from 'react'
import {  Card, Row, Col } from 'antd';


const BestSellers = ({filteredItems}) => {
  return(
    <Row gutter={16}>
      {filteredItems.filter(products=>products.bestSeller===true).map(item => (

          
<Col span={8} key={item.id}>
  <Card title={item.name} bordered={false}>
    <p>Category: {item.category}</p>
    <img src={item.image} style={{height:"100px",width:"100px" }}></img>
  </Card>
</Col>
))}
        
      </Row>
    )

}

export default BestSellers 