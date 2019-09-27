import React from 'react';
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import { changeInputAction, addItemAction,getTodoList } from './store/actionCreators'


const Todolist = (props) => {
  
  const { list, inputValue, inputChange, addItem, deleteItem,getTodoList } = props;

  return (
    <div style={{ margin: '200px auto', textAlign: 'center' }}>
      <div>
        <Input value={inputValue} style={{ width: '180px' }} onChange={inputChange} />
        <Button style={{ marginLeft: '20px' }} type='primary' onClick={addItem}>增加</Button>
        <Button style={{ marginLeft: '20px' }} type='primary' onClick={getTodoList}>同步</Button>
        <div style={{ width: '350px', margin: '20px auto' }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item, index) => (<List.Item onClick={() => { deleteItem(index) }}>{item}</List.Item>)}
          />
        </div>
      </div>
    </div>
  );
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      dispatch(changeInputAction(e.target.value))
    },
    addItem() {
      dispatch(addItemAction())
    },
    deleteItem(index) {
      let action = {
        type: 'deleteItem',
        index
      }
      dispatch(action)
    },
    getTodoList(){
      dispatch(getTodoList())
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Todolist);