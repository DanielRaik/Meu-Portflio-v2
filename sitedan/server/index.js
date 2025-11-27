import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Novo contato de ${name}`,
      text: message,
    });

    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});

app.listen(3001, () => {
  console.log("Server ON: http://localhost:5173");
});
