import React from 'react';

class ModalForm extends React.Component {
    render() {
        return (
            <div id="contactModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h3 id="contactModalLabel">Connexion</h3>
                        </div>
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
            </div>
        )
    }
}

export default ModalForm;