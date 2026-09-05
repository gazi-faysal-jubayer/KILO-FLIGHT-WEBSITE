# Batch 2k23 Registration Portal - Google Sheet Integration Guide

This guide details how the **Batch 2k23 Registration Portal** on the website (`/join-us`) logs candidate applications straight into your Google Sheet table in real-time, just like a Google Form.

---

### 🔗 Your Google Sheet Link
**Google Sheet**: [BATCH 2K23 REGISTRATION PORTAL- responces](https://docs.google.com/spreadsheets/d/11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74/edit?usp=sharing)  
**Sheet ID**: `11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74`

---

## ⚡ Quick 2-Minute Setup

### Step 1: Open Google Apps Script
1. Open your sheet: [https://docs.google.com/spreadsheets/d/11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74/edit](https://docs.google.com/spreadsheets/d/11KIBktsbfgudDzLVVcw28Rbh-0C4itJszaEKVFt2D74/edit)
2. In the top Google Sheets menu, click **Extensions** ➔ **Apps Script**.

---

### Step 2: Paste the Script
1. In the Apps Script code editor, delete any existing code inside `Code.gs`.
2. Open [`scripts/google-apps-script-recruitment.js`](./scripts/google-apps-script-recruitment.js), copy the entire code, and paste it into `Code.gs`.
3. Click the **Save** disk icon (or press `Ctrl + S`).

---

### Step 3: Format the Sheet Headings Immediately
1. At the top of the Apps Script toolbar, click the function dropdown (where it says `doPost` or `myFunction`) and select **`setupHeadings`**.
2. Click **Run**.
3. *If prompted for permissions*: Click **Review permissions** ➔ Choose your Google Account ➔ Click **Advanced** ➔ Click **Go to Untitled project (unsafe)** ➔ Click **Allow**.
4. Check your Google Sheet tab! The 12 columns will now have clean, formatted table headings with dark motorsport navy `#0F172A`, bold white text, and optimal column widths.

---

### Step 4: Deploy as a Web App (Allows Website to Save Responses)
1. In the top right corner of the Apps Script window, click the blue **Deploy** button ➔ **New deployment**.
2. Click the **gear icon (⚙️)** beside "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Batch 2k23 Recruitment Webhook`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: **`Anyone`** *(Crucial: This lets the portal submit responses automatically)*
4. Click **Deploy**.
5. Copy the **Web app URL** (starts with `https://script.google.com/macros/s/.../exec`).

---

### Step 5: Connect to the Website
Open your `.env.local` file and add or update:
```env
GOOGLE_SCRIPT_RECRUITMENT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```
*Tip: You can also test submissions immediately from the website portal at [`/join-us`](http://localhost:3000/join-us)!*

---

## 📋 Table Column Headings Reference

| Col | Heading | Source in Registration Portal |
| :--- | :--- | :--- |
| **A** | **Timestamp (BST)** | Auto-generated Bangladesh Standard Time |
| **B** | **Full Name** | 1. Full Name (`fullName`) |
| **C** | **Roll Number** | 2. Student Roll Number (`rollNumber`, 23XXXXX) |
| **D** | **Department** | 3. Academic Department (ME, EEE, CSE, etc.) |
| **E** | **Institutional Email** | 4. KUET Institutional Email (`*@stud.kuet.ac.bd`) |
| **F** | **WhatsApp Number** | 5. WhatsApp / Contact (+880...) |
| **G** | **Primary Sub-Team** | 6. Primary Sub-Team Preference |
| **H** | **Secondary Sub-Team** | 7. Secondary Sub-Team Preference |
| **I** | **Technical Software & Skills** | 8. Software & Practical Skills (SolidWorks, ANSYS, etc.) |
| **J** | **Workshop Learnings Summary**| 9. Workshop Technical Summary |
| **K** | **Statement of Purpose & Availability** | 10. Statement of Purpose |
| **L** | **Portfolio / CV Link** | 11. Drive/GitHub/LinkedIn link |
