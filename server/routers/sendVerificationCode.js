import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

router.get('/', (req, res) => {
    //const { phoneNumber, recaptchaToken } = req.body;
  
    // const identityToolkit = google.identitytoolkit({
    //     auth: 'GCP_API_KEY',
    //     version: 'v3',
    // });
  
    // const response = await identityToolkit.relyingparty.sendVerificationCode({
    //     phoneNumber,
    //     recaptchaToken: recaptcha,
    // });
  
    // save sessionInfo into db. You will need this to verify the SMS code
    //const sessionInfo = response.data.sessionInfo;
    res.send("Router Send SMS");
})

export default router;