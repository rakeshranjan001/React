import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { Modal, Button } from "react-bootstrap";

class OverlayModal extends React.Component {
    constructor(){
        super()
        this.state = {
            new_url:"",
        }
    }
    onUrlChange =(event)=>{
        this.setState({
            new_url:event.target.value
        })
    }
    addUrl = () => {
        fetch("http://node-masters.herokuapp.com/add",{
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props.user.id,
                url:this.state.new_url
            })
        }).then(response => {
          var data =response.json();
          var status = response.status;
          console.log("status = " + status)
                if(status!==200){
                    throw new Error("Error")
                }
                return data;
        })
        .then(data => console.log(data))
            .then(this.props.handleCloseModal)
            .catch(err=>{
                this.setState({
                    errorMsg:"Unable to add bookmark"
                })
            })
    }
    render() {
        const {handleCloseModal,showModal} = this.props;
      return (
        <>
          <ReactModal
          className="w-50 h-25 bottom-0 center bg-light-gray mt7-ns"
          bodyOpenClassName="modal-open"
          ariaHideApp={false}
          isOpen={showModal}
        >
          <Modal.Header>
            <Modal.Title>Add Bookmark</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label htmlFor="new-url">Bookmark this :</label>
            <input type="text" id="url" name="new-url" onChange={this.onUrlChange}/>
          </Modal.Body>
          <Modal.Footer className="mv3-m">
            <button className = "bg-light-gray ml1" bsStyle="danger" onClick={handleCloseModal}>
              Close
            </button>
            <button className = "bg-light-gray ml3" bsStyle="danger" onClick={this.addUrl}>
              Save
            </button>
          </Modal.Footer>
        </ReactModal>
        </>
      );
    }
  }
  
  export default OverlayModal;