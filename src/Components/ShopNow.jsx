import React, { useState } from 'react'
import { Input, Button, Card, Row, Col } from 'antd';
import jsonData from '../products.json'
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const ShopNow = ({filteredItems}) => {

  const uniqueCategory = []

  jsonData.forEach((idx)=>{
    if(uniqueCategory.indexOf(idx.category)<0){
        uniqueCategory.push(idx.category)}                
})
  return (
    <>
   <h5>{console.log(uniqueCategory)}</h5>
   <Dropdown
    menu={{
        jsonData,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
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

export default ShopNow






 
