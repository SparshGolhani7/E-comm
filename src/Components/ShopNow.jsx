import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Dropdown, Space,Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import jsonData from '../products.json';

const ShopNow = ({ filteredItems1, setFilteredItems1 }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Create unique category list
  const uniqueCategory = [];
  const categorySet = new Set();

  jsonData.forEach((item) => {
    if (!categorySet.has(item.category)) {
      categorySet.add(item.category);
      uniqueCategory.push({ key: item.id, label: item.category });
    }
  });

  // Update `filteredItems` when `selectedCategory` changes
  useEffect(() => {
    const newFiltered = selectedCategory
      ? jsonData.filter((item) => item.category === selectedCategory)
      : jsonData;

    setFilteredItems1(newFiltered);
  }, [selectedCategory]); // Dependency array   , setFilteredItems

  return (
    <>
      {/* Dropdown for Category Selection */}
      <Dropdown 
        menu={{
          items: uniqueCategory.map((item) => ({
            key: item.key,
            label: (
              <a onClick={() => setSelectedCategory(item.label)}>
                {item.label}
              </a>
            ),
          })),
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
        <Button style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>

          <Space >
            {selectedCategory || "Select Category"}
            <DownOutlined />
          </Space>
          </Button>
        </a>
      </Dropdown>

      {/* Display Filtered Products */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        {filteredItems1.length > 0 ? (
          filteredItems1.map((item) => (
            <Col span={8} key={item.id}>
              <Card title={item.name} bordered={false}>
                <p>Category: {item.category}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "100px", width: "100px" }}
                />
              </Card>
            </Col>
          ))
        ) : (
          <p>No products found</p>
        )}
      </Row>
    </>
  );
};

export default ShopNow;







