# 🚀 Keep Your Node.js App Awake

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00F700&width=500&lines=Keep+Your+App+Always+Awake!;Auto+Ping+to+Prevent+Sleeping;Simple+Cron+Setup+%2B+Axios+Ping" alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/expressjs/express?color=brightgreen&label=Node.js&logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/npm/dw/node-cron?color=blueviolet&label=node-cron&logo=npm&style=for-the-badge">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge&color=yellow">
</p>

---

## 🧩 Features
✅ Auto-pings your app every minute  
✅ Prevents your free hosting from sleeping (Replit, Render, etc.)  
✅ Lightweight and easy to integrate  
✅ Fully customizable interval  
✅ Fancy terminal spinner feedback  

---

## 💻 Example Demo (Animated)

```bash
🔁 Pinging self to keep app awake...
✅ Self-ping successful at 2:45:01 PM
🔁 Pinging self to keep app awake...
✅ Self-ping successful at 2:46:01 PM
```

---

## 📦 Installation

### 1️⃣ Initialize your project
```bash
mkdir my-app && cd my-app
npm init -y
```

### 2️⃣ Add these dependencies
You can simply copy this `dependencies` block into your **package.json**:

```json
"dependencies": {
  "axios": "^1.7.2",
  "node-cron": "^3.0.3",
  "chalk": "^5.3.0",
  "ora": "^8.0.1"
}
```

Then run:
```bash
npm install
```

---

## ⚙️ Usage

Paste this snippet inside your main file (`index.js` or `server.js`):

```js
// 🕒 Keep-Alive Cron Script
const cron = require('node-cron');
const axios = require('axios');
const ora = require('ora');
const c = require('chalk');

const PORT = process.env.PORT || 3000;
const selfPingUrl = process.env.SELF_PING_URL || `http://localhost:${PORT}`;

cron.schedule('* * * * *', async () => {
  const spinner = ora({
    text: c.cyan(`🔁 Pinging self to keep app awake...`),
    spinner: 'dots'
  }).start();

  try {
    await axios.get(selfPingUrl);
    spinner.succeed(c.green(`✅ Self-ping successful at ${new Date().toLocaleTimeString()}`));
  } catch (err) {
    spinner.fail(c.red(`⚠️ Self-ping failed at ${new Date().toLocaleTimeString()}: ${err.message}`));
  }
});
```

---

## 🧠 Environment Setup

Create a `.env` file in your project root:

```
PORT=3000
SELF_PING_URL=https://your-app-url.onrender.com
```

> 🪄 Replace the URL with your real deployed site (Render, Koyeb, Replit, etc.)

---

## 🚀 Run Your App

```bash
npm start
```

Expected output:
```bash
🔁 Pinging self to keep app awake...
✅ Self-ping successful at 03:15:01 PM
```

---

## 🎨 Optional Styling

Add a cool ASCII banner before your cron job:

```js
import chalk from 'chalk';
import figlet from 'figlet';

console.log(
  chalk.cyan(
    figlet.textSync('Keep Awake', { horizontalLayout: 'full' })
  )
);
```

---

## 🧰 Troubleshooting

⚠️ **Self-ping failed?**
- Make sure your `SELF_PING_URL` is publicly reachable.

😴 **App still sleeps?**
- Some hosts (like Vercel) don’t allow cron jobs. Use Render, Railway, or a small VPS instead.

⏰ Want it every 5 minutes?
```js
cron.schedule('*/5 * * * *', async () => { ... });
```

---

## 🧑‍💻 Author

👤 **God’s Zeal Devs**  
💬 Built with 💚 for developers who hate downtime.

---

## ⭐ License

MIT License © 2025  
Made with ❤️ and ☕ by God's Zeal Devs.
