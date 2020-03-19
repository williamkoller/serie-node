const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const { host, port, user, pass } = require("../config/mail.json");

const transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass
  }
});

const options = {
  viewEngine: {
    extname: ".html",
    layoutsDir: path.resolve("src/app/resources/mail/auth/"),
    defaultLayout: "template",
    partialsDir: path.resolve("src/app/resources/mail/auth/")
  },
  viewPath: path.resolve("src/app/resources/mail/"),
  extName: ".html"
};
console.log(options);

transport.use("compile", hbs(options));

module.exports = transport;
