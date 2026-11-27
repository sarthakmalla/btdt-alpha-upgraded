# BTDT Friends & Family Feedback Guide

This guide explains how to generate and share your feedback Google Form in under 1 minute.

---

## Files Saved on Your Computer

1. **Google Apps Script Generator File**:
   - Path: `/Users/sarthakmalla/.gemini/antigravity/scratch/btdt-alpha-upgraded-fix/create_google_form.js`
   - Description: Contains the JavaScript code that automatically constructs the entire Google Form in your personal Google Drive with all sections, questions, multiple-choice options, "Other" write-in options, and text fields.

2. **Complete Question & Option Blueprint**:
   - Path: `/Users/sarthakmalla/.gemini/antigravity/scratch/btdt-alpha-upgraded-fix/GOOGLE_FORM_FEEDBACK_GUIDE.md`
   - Description: This guide, containing the step-by-step walkthrough and text reference.

---

## Step-by-Step Walkthrough (Takes ~30 seconds)

### Step 1: Open Google Apps Script
Open your web browser (Chrome, Safari, etc.) and go to:
👉 **[https://script.new](https://script.new)**
*(Make sure you are logged into the Google Account where you want to store the form).*

### Step 2: Paste the Code
1. You will see an editor with a few placeholder lines:
   ```javascript
   function myFunction() {
   }
   ```
2. Select all (`Cmd + A`) and delete it so the editor is completely blank.
3. Open the file **`create_google_form.js`** (or copy the code from the bottom of this file), and paste it into the editor.

### Step 3: Run the Script
1. Click the **Save** icon (disk icon) or press `Cmd + S`.
2. At the top toolbar, ensure `createBTDTFeedbackForm` is selected in the function dropdown.
3. Click the **Run** button (play icon ▶).

### Step 4: Grant Permission (One-Time Google Security Prompt)
Because the script creates a document in your Google Drive, Google will ask for permission:
1. Click **Review Permissions**.
2. Select your Google account.
3. If you see *"Google hasn’t verified this app"*, click **Advanced** (at the bottom left of the modal).
4. Click **Go to Untitled project (unsafe)**.
5. Click **Allow**.

### Step 5: Get Your Links!
In the **Execution log** window at the bottom of the screen, you will see:
```text
====================================================
BTDT GOOGLE FORM CREATED SUCCESSFULLY!
1. EDIT LINK (for you): https://docs.google.com/forms/d/.../edit
2. SHARE LINK (for friends/family): https://docs.google.com/forms/d/e/.../viewform
====================================================
```
- **Edit Link**: Keep this for yourself. You can customize colors, add questions, or view submitted responses.
- **Share Link**: Send this link via WhatsApp, iMessage, or email to your friends and family alongside your prototype URL:
  `https://sarthakmalla.github.io/btdt-alpha-upgraded/`
