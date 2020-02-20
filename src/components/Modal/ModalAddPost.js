import React from 'react'
import { Modal  } from 'antd';
import AddForm from '../AddPost/AddPost2'
export default class ModalPop extends React.Component {
  state = {
    modal1Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }


  render() {
    return (
      <div>
        <div className='add-dog-div'>
        <img type="primary" className="add-dog-icon" src={this.props.pic} alt='playful dog' onClick={() => this.setModal1Visible(true)} />
        </div>
        <Modal
        width= '800'
          title="MOAR DOGS!"
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <AddForm/>
        </Modal>
      </div>
    );
  }
}
