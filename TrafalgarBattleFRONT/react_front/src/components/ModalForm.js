import React from 'react';

import {Modal,Form,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

class ModalForm extends React.Component {

    state = {
      showModalSignUp: false
    };

    openModalSignUp = () => {
        this.setState({ showModalSignUp : true });
    };

    closeModalSignUp = () => {
        this.setState({ showModalSignUp : false });
    };

    render() {
        return (
            <Modal show={this.state.showModalSignUp} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Inscription</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form vertical>
                        <FormGroup>
                            <ControlLabel>Pseudo</ControlLabel>
                            <FormControl />
                        </FormGroup>
                        <Button type="submit" className="btn btn-warning">S'inscrire</Button>
                    </Form>
                </Modal.Body>
            </Modal>



            <Modal>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form-horizontal" action=" " method="post"  id="contact_form">
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Pseudo</label>
                                    <div className="col-md-10 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input id="last_name" name="last_name" className="form-control"  type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">E-Mail</label>
                                    <div className="col-md-10 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input id="email" name="email" className="form-control"  type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-2 control-label">Confirmation</label>
                                    <div className="col-md-10 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input id="confirm_email" name="confirm_email" className="form-control"  type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="alert alert-success" role="alert" id="success_message">Connexion réussie</div>

                                <div className="form-group">
                                    <button id="send" type="submit" className="btn btn-warning">Se connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalForm;