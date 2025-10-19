const cron = require('node-cron');
const axios = require('axios');
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
