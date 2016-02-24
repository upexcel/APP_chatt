var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('Ca4nS3QStEcpvZdk9iMh0Q');

module.exports = function (Email) {
    Email.send_email = function (email_type, email_data, callback) {

        var e_to = email_data.email;

        if (email_type == 'resend_password') {
            email_html = Email.resendPassword(email_data);
        }
        else if (email_type == 'new_registration') {
            email_html = Email.newRegisteration(email_data);
        }
        else if (email_type == 'resend_verification_code') {
            email_html = Email.resendVerification(email_data);
        }

//        email_html = Email.get_email_html(email_type, email_data);

        e_body = email_html.body;
        e_subject = email_html.subject;

        Email.send({
            to: e_to,
            from: 'manish@excellencetechnologies.in',
            subject: e_subject,
            //text: 'Test Chatt',
            html: e_body
        }, function (err, mail) {
            console.log('email sent!');
            callback();
        });
    };
//    Email.get_email_html = function (type, data) {
//        var subject = '';
//        var body = '';
//        if (type == 'resend_password') {
//            subject = "Chatt App - New password";
//            body = "Your new password is :: " + data.new_password;
//        } else if (type == "new_registration") {
//            subject = "Chatt App - Welcome"
//            body = "Hello <b>" + data.name + "</b><br><br> Welcome to Chatt App  ";
//            if (typeof data.verification_code != 'undefined' && data.verification_code != '') {
//                body += '<br>Your verification code - ' + data.verification_code;
//            }
//        } else if (type == "resend_verification_code") {
//            subject = "Chatt App - Verfication Code";
//            body = " Verification code - " + data.verification_code;
//        }
//        return {
//            subject: subject,
//            body: body
//        };
//    };


    Email.resendPassword = function (data) {
        var subject = '';
        var body = '';
        subject = "Chatt App - New password";
        body = "Your new password is :: " + data.new_password;
        return {
            subject: subject,
            body: body
        };
    };

    Email.newRegisteration = function (data) {
        var subject = '';
        var body = '';
        subject = "Chatt App - Welcome";
        body = "Hello <b>" + data.name + "</b><br><br> Welcome to Chatt App  ";
        if (typeof data.verification_code != 'undefined' && data.verification_code != '') {
            body += '<br>Your verification code - ' + data.verification_code;
        }
        return {
            subject: subject,
            body: body
        };
    };

    Email.resendVerification = function (data) {
        var subject = '';
        var body = '';
        subject = "Chatt App - Verfication Code";
        body = " Verification code - " + data.verification_code;
        return {
            subject: subject,
            body: body
        };
    };

};
