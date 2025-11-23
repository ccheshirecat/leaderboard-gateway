# Leaderboard API Gateway

A secure API gateway that protects your casino API while providing safe, read-only access to leaderboard data for your public leaderboard website.

## 🔒 What This Does

This gateway acts as a **secure proxy** between your public leaderboard website and your private casino API. It:

1. **Protects your casino API** - Your actual casino API URL and credentials stay completely private
2. **Controls access** - Only requests with your API key can use this gateway
3. **Sanitizes data** - Automatically filters out ALL sensitive information, exposing ONLY:
   - Player usernames
   - Wager amounts

**Everything else stays private** - balances, emails, IPs, session data, etc. are automatically removed.

## 🛡️ Security Features

### You Stay In Control
- **You** deploy this gateway under your own Zuplo account
- **You** set the API keys that can access it
- **You** configure which casino API it connects to
- **You** can revoke access anytime by changing the API key

### No Sensitive Data Exposure
The gateway uses intelligent pattern matching to extract ONLY username and wager information from your casino API response. Everything else is automatically discarded.

**Example:**
```json
// Your casino API might return (simplified):
{
  "players": [
    {
      "id": 12345,
      "username": "Player1",
      "email": "player@email.com",
      "balance": 5000,
      "wager": 1200,
      "ip_address": "192.168.1.1",
      "session_token": "abc123..."
    }
  ]
}

// This gateway will ONLY expose:
[
  {
    "username": "Player1",
    "wager": 1200
  }
]
```

All sensitive fields are automatically removed before any data leaves your gateway.

### How It Works
1. Your leaderboard website makes a request to YOUR gateway (not your casino API)
2. The gateway verifies the API key
3. The gateway fetches data from your casino API (using credentials YOU control)
4. The gateway sanitizes the response, keeping ONLY username and wager
5. Your website receives only the safe, sanitized data

**Your casino API URL and credentials never leave your gateway.**

---

## 📋 Setup Instructions

### Step 1: Deploy to Zuplo

1. Go to [Zuplo](https://portal.zuplo.com/) and sign up/login
2. Click **"New Project"**
3. Choose **"Import from GitHub"** or upload this project
4. Click **"Deploy"**

Your gateway will be deployed at: `https://your-project-name.zuplo.app`

### Step 2: Configure Your Casino Token

1. In your Zuplo dashboard, go to **"Settings"** → **"Environment Variables"**
2. Click **"Add Variable"**
3. Set:
   - **Name:** `CASINO_COOKIE`
   - **Value:** Your casino account token, e.g. thrill.com cookie
   - --**Name:** `CASINO_URL`
   - **Value:** The casino endpoint to make the request to. E.g. thrill's endpoint is https://api.thrill.com/referral/v1/referral-links

4. Click **"Save"**

> ⚠️ **Important:** This URL stays private in your Zuplo environment. Nobody else can see it.

### Step 3: Create an API Key

1. In your Zuplo dashboard, go to **"Services"** → **"API Key Manager"**
2. Click **"Create Consumer"**
3. Enter a name (e.g., "Leaderboard Website")
4. Click **"Create"**
5. Copy the generated API key - you'll need this for your leaderboard website

> 💡 **Tip:** You can create multiple API keys and revoke them individually if needed.

### Step 4: Connect Your Leaderboard Website

In your leaderboard website code, make requests to:

```
https://your-project-name.zuplo.app/leaderboard
```

**Include the API key in your request header:**

```javascript
fetch('https://your-project-name.zuplo.app/leaderboard', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  }
})
```

---

## 🧪 Testing Your Gateway

### Test with curl:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  https://your-project-name.zuplo.app/leaderboard
```

You should receive a JSON response with only usernames and wagers:

```json
[
  {
    "username": "Player1",
    "wager": 1200
  },
  {
    "username": "Player2",
    "wager": 950
  }
]
```

### Test without API key:

```bash
curl https://your-project-name.zuplo.app/leaderboard
```

You should receive an error (proving your gateway is protected).

---

## 🔧 How Data Sanitization Works

This gateway is designed to work with **any casino API response structure**. It:

1. **Automatically finds the leaderboard data** - whether it's a top-level array or nested in an object
2. **Intelligently extracts usernames** - looks for fields named: `username`, `user`, `player`, or `name`
3. **Intelligently extracts wagers** - looks for fields named: `wager`, `bet`, `amount`, or `value`
4. **Removes everything else** - all other data is discarded

This means it will work even if your casino API structure changes or differs from expectations.

---

## 🚨 Security Checklist

- ✅ Gateway is deployed under **your** Zuplo account
- ✅ Casino API URL is stored in **your** environment variables (private)
- ✅ Only **you** control the API keys
- ✅ Only username and wager data is exposed
- ✅ All other sensitive data is automatically removed
- ✅ You can revoke access anytime by changing/deleting API keys

---

## 📊 What Data is Exposed vs. Protected

### ✅ Exposed (Safe for Public Display)
- Player usernames
- Wager amounts

### 🔒 Protected (Automatically Removed)
- Player IDs
- Email addresses
- IP addresses
- Session tokens
- Account balances
- Personal information
- Any other fields from your casino API

---

## ❓ FAQ

**Q: Can the leaderboard developer see my casino API credentials?**
A: No. Your casino API URL and any authentication credentials are stored in YOUR Zuplo environment variables, which only you can access.

**Q: What if my casino API returns different field names?**
A: The gateway uses intelligent pattern matching. It will find fields like `username`, `user`, `player`, `name` for usernames, and `wager`, `bet`, `amount`, `value` for wagers automatically.

**Q: Can I revoke access later?**
A: Yes! Simply delete or regenerate the API key in your Zuplo dashboard. The leaderboard will stop working until you provide a new key.

**Q: Does this expose my casino API URL?**
A: No. The leaderboard website only knows YOUR gateway URL (`your-project.zuplo.app`), not your casino API URL.

**Q: What happens if my casino API goes down?**
A: The gateway will return an error. Your casino API availability is independent of this gateway.

**Q: Can I monitor who's accessing this?**
A: Yes! Zuplo provides analytics showing all requests, response times, and errors in your dashboard.

---

## 🔄 Maintenance

### Updating Your Casino API URL
1. Go to Zuplo dashboard → Settings → Environment Variables
2. Edit the `CASINO_URL` variable
3. Save (changes are immediate, no redeployment needed)

### Rotating API Keys
1. Go to Zuplo dashboard → Services → API Key Manager
2. Create a new API key
3. Update your leaderboard website with the new key
4. Delete the old API key

### Monitoring
- Check Zuplo dashboard → Analytics for request logs
- Monitor error rates to ensure your casino API is responding

---

## 📞 Support

For Zuplo-specific issues, visit [Zuplo Documentation](https://zuplo.com/docs)

For gateway configuration questions, contact your leaderboard developer.

---

## 📄 License

This gateway code is provided as-is for your private use.
