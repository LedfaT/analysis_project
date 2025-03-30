const mailer = require("nodemailer");

class MainService {
  constructor() {
    this.transporter = mailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Account activation on " + process.env.API_URL,
      text: "",
      html: `
          <div>
              <h1>To activate your account go to link</h1>
              <a href="${link}">${link}</a>
          </div>
          `,
    });
  }
}

module.exports = new MainService();
