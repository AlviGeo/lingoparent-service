const {google} = require('googleapis');

const CLIENT_ID = '415921479225-972st5egn0c5p356b81infcsrjipl4do.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04JtzsyJprNIxCgYIARAAGAQSNwF-L9IrtAfHDqFV0TEXKLf9XGn5sopFVgGqwFnZE2NVidxTLlTA9DlCXlBAUfB8l2tVQ6Hw6Tk'

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);
oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
});

module.exports.endMail = async ({
    from = 'This is from lingotalk <testingalvi@gmail.com>',
    to = 'example@gmail.com',
    subject = 'Attendance Apps',
    text = '<h1>Hello from gmail email using API</h1>',
    html = '',
}) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                user: 'testingalvi@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from,
            to,
            subject,
            text,
            html,
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
};