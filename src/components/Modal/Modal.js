import React from 'react'
import { Modal  } from 'antd';
import PostCard from '../PostCard/PostCard'
import {KhakiDogSpinner} from '../../assets/index'


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
        {this.props.isLoading ? (
        <div className= "spinnerDog">
        <KhakiDogSpinner />
      </div>
      ) : (
      <div>
        <img type="primary" className="dog-image" src={this.props.pic} alt='Dog' onClick={() => this.setModal1Visible(true)} />
        <Modal
        width= '800'
        title="Pupper-View"
        centered
        visible={this.state.modal1Visible}
        onOk={() => this.setModal1Visible(false)}
        onCancel={() => this.setModal1Visible(false)}
        >
          <PostCard
                setEditPost={this.props.setEditPost}
                user={this.props.user_id}
                post_id={this.props.post_id}
                pic={this.props.pic}
                post_name={this.props.post_name}
                breed={this.props.breed}
                age={this.props.age}
                gender={this.props.gender}
                fixed={this.props.fixed}
                rating={this.props.rating}
                org_name={this.props.org_name}
                bio={this.props.bio}
                isAdmin={this.props.isAdmin}
            />
        </Modal>
      </div>)}
      </div>
    );
  }
}
