
/*________________________ FORM CONTACT VALIDATOR ________________________ */
            var validator = $('#contact_form').bootstrapValidator({
                feedbackIcons: { valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
                fields: {
                    first_name: {
                        validators: {
                             stringLength: { min: 2, message: "Votre prénom doit comporter plus de 2 caractères"},
                             notEmpty: { message: 'Veuillez indiquer votre prénom' }
                        }
                    },
                    last_name: {
                        validators: {
                            stringLength: { min: 2 },
                            notEmpty: { message: 'Veuillez indiquer votre nom' }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: { message: 'Veuillez indiquer votre adresse email' },
                            emailAddress: { message: 'Email non valide' }
                        }
                    },
                    confirm_email: {
                        validators: {
                            notEmpty: { message: 'Veuillez confirmer votre e-mail' },
                            identical: { field: 'email', message: 'Email non valide' }
                        }
                    },
                    bu: {
                        validators: {
                            notEmpty: { message: 'Veuillez choisir votre business unit' }
                        }
                    },
                    comment: {
                        validators: {
                            stringLength: { min: 10, max: 200, message:'Votre message doit comporter entre 10 et 200 caractères' },
                            notEmpty: { message: 'Veuillez entrer votre message' }
                        }
                    }
                }
            });