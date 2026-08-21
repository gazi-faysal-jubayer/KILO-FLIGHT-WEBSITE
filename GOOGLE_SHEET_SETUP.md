# Team Kilo Flight - Google Sheets Team Directory Guide

This guide explains how any team member (technical or non-technical) can update the **Our Team & Alumni Directory** on the website directly through a **Google Sheet**.

---

## 📊 1. Google Sheet Column Structure

Create a Google Sheet with the following **exact column headers** in the first row (Row 1):

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Name** | **Role** | **Category** | **Department** | **Season** | **Image_URL** | **LinkedIn** | **Bio** |

### 📝 Column Descriptions & Allowed Values:

1. **Name** *(Required)*: Full Name of the member (e.g., `Mahir Faysal`).
2. **Role** *(Required)*: Specific title (e.g., `Team Captain (2026)`, `Aero Lead`, `Chief Faculty Advisor`, `Powertrain Engineer`).
3. **Category** *(Required - Choose one)*:
   - `Advisor` ➔ Displays under Faculty Advisors & Mentors
   - `Captain` ➔ Team Captains & Technical Directors
   - `Lead` ➔ Sub-team Department Leads
   - `Member` ➔ Student Engineers & Crew
   - `Alumni` ➔ Graduated members & Founders
4. **Department** *(Required)*: Academic department & batch (e.g., `Mechanical Eng. '22`, `ECE '23`, `IPE '20`).
5. **Season** *(Required)*: The competition year/season (e.g., `2026`, `2025`, `2024`, `2023`, `2021`, `Founders`). *If someone served in multiple seasons, separate with space like: `2025 2026`*.
6. **Image_URL** *(Optional)*:
   - Direct image link (e.g., `https://example.com/photo.jpg` or `images/team/photo.jpg`)
   - **Google Drive link**: You can paste a standard Google Drive share link (e.g., `https://drive.google.com/file/d/1a2b3c.../view`). The website automatically converts it into a displayable photo!
   - If left blank, a default racing avatar is automatically used.
7. **LinkedIn** *(Optional)*: Profile URL (e.g., `https://linkedin.com/in/username`).
8. **Bio** *(Optional)*: Short 1-2 sentence description of their work or research focus.

---

## 📋 2. Sample Data Rows

```csv
Name,Role,Category,Department,Season,Image_URL,LinkedIn,Bio
Prof. Dr. Sobahan Mia,Chief Faculty Advisor,Advisor,Mechanical Eng.,all,images/logo.png,https://linkedin.com,Advising automotive composite research and international competition strategy.
Dr. Md. Abdullah-Al-Bari,Technical Faculty Mentor,Advisor,Mechanical Eng.,all,images/logo.png,https://linkedin.com,Advising vehicle dynamics and chassis structural FEA validation.
Mahir Faysal,Team Captain (2026),Captain,Mechanical Eng. '22,2026,images/team/joecalih-UmTZqmMvQcw-unsplash.jpg,https://linkedin.com,Leading overall vehicle design and competition team operations.
Abrar Hossain,Aero Lead,Lead,Mechanical Eng. '22,2026 2025,images/team/abstral-official-bdlMO9z5yco-unsplash.jpg,https://linkedin.com,Leading 3D CFD simulations and natural jute composite vacuum bagging.
Sajid Rahman,Powertrain Lead,Lead,Mechanical Eng. '22,2026 2025,images/team/soundtrap-rAT6FJ6wltE-unsplash.jpg,https://linkedin.com,Managing engine dyno calibration and custom exhaust tuning.
Kazi Shahadat Hossain,Founding Captain (2018),Alumni,Mechanical Eng. '16,founders 2021,images/team/abstral-official-bdlMO9z5yco-unsplash.jpg,https://linkedin.com,Founded Team Kilo Flight at KUET in 2018.
```

---

## 🔗 3. How to Connect Your Google Sheet to the Website

1. Open your Google Sheet.
2. Click **Share** (top right button).
3. Under *General access*, change to **"Anyone with the link can view"**.
4. Copy the Sheet URL from your browser address bar:
   `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
5. The **Sheet ID** is the long string of letters and numbers between `/d/` and `/edit`:
   ➔ `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
6. Open [`js/team-fetcher.js`](file:///d:/code/website/KILO-FLIGHT-WEBSITE/js/team-fetcher.js) and paste your Sheet ID at line 7:
   ```javascript
   const GOOGLE_SHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
7. That's it! Any time you add, edit, or remove a row in your Google Sheet, the website updates automatically!
