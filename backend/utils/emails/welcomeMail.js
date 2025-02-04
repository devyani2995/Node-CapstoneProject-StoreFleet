// Import the necessary modules here
import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  //Write your code here

  const getStarted = "client-homepage";
  try{
    const output = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            /* Add your custom CSS styles here */
            body {
                font-family: Arial, sans-serif;color: #5e1640;text-align: center;


            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                text-align: center;
            }
            .logo {
                max-width: 150px;
            }
            .content {
                margin-top: 20px;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #4b73c4;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
            }
            /* Mobile Responsive Styles */
            @media only screen and (max-width: 600px) {
                .container {
                    padding: 10px;
                }
                .logo {
                    max-width: 100px;
                }
                .button {
                    display: block;
                    margin-top: 10px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img class="logo" src="https://files.codingninjas.in/logo1-32230.png" alt="Storefleet Logo">
                <h1>Welcome to Storefleet</h1>
            </div>
            <div class="content">
                <p>Hello, ${user.name}</p>
                <p>Thank you for registering with Storefleet. We're excited to have you as a new memeber of our community</p>
                <p><a class="button" href="${getStarted}">Get Started</a></p>
                
            </div>
        </div>
    </body>
    </html>
    `;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.STORFLEET_SMPT_MAIL,
          pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD,
        },

    });

    const mailOptions = {
      from: "storefleet2k23@gmail.com",
      to: user.email,
      subject: "Welcome to Store Fleet",
      html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log("Email sent to "+user.email+" : " + info.response);
      }
    });
}catch(e){
    console.log(e);
}

  
};
