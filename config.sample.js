module.exports = {
  // --- Discord Application Details ---
  DISCORD_TOKEN: "MTUyNjI1OTI5OTc0NjA1NDE0NQ.GgMpGb.FWXaNf4LMWq08saVyeOZhdTliI0D2SWhb4D_6U",
  CLIENT_ID: "1526259299746054145",
  CLIENT_SECRET: "1526243654153408603",

  // --- Database Connection ---
  // If using an external MongoDB (like Atlas), paste your URI here:
  MONGO_URI: "mongodb://mongo:xdbNDBzItBiFqwpTOuMUKZHFWvOKSxmr@mongodb.railway.internal:27017",

  // --- Dashboard & API ---
  // DASHBOARD_URL is used for OAuth redirects (must be accessible from user's browser)
  DASHBOARD_URL: "http://localhost:3000",
  // API_URL is used for server-side API calls
  API_URL: "http://localhost",
  API_PORT: 4000,

  // --- Bot Settings ---
  BOT_PREFIX: "-",
  OWNER_IDS: ["1526259299746054145"],

  // --- Feature Settings ---
  DEFAULT_LANG: "ar", // 'en' or 'ar'

  // --- Project version ---
  PROJECT_VERSION: "1.0",

  // --- Links ---
  LINKS: {
    SUPPORT: "https://discord.gg/4EbSFSJZqH",
    INVITE:
      "https://discord.com/api/oauth2/authorize?client_id=605009836547112963&permissions=8&scope=bot%20applications.commands",
    WEBSITE: "http://localhost:3000",
    TERMS: "/terms",
    PRIVACY: "/privacy",
    GITHUB: "https://github.com/Hadi-4100",
    X: "https://x.com/",
  },
};
