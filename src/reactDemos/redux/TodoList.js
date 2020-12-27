import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const data = [
  '早上6点开会, 分配任务',
  '早上9点吃饭',
  '晚上10点睡觉'
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{margin:'10'}}>
        <div>
          <Input 
            placeholder='write sth' 
            style={{width:'250px', marginRight:'10px'}} 
          />
          <Button type="primary">增加</Button>
        </div>

        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={data}
            renderItem={item=>(<List.Item>{item}</List.Item>)}
          />
        </div>
      </div> 
    );
  }
}
 
export default TodoList;
