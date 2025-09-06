# QR Reader — GitHub Pages Ready

This project is a simple, browser-based QR code reader that you can host directly on **GitHub Pages**. It uses the [html5-qrcode](https://github.com/mebjas/html5-qrcode) library to scan QR codes via the device camera or from uploaded images.

---

## 🚀 Features
- Scan QR codes with your device camera
- Upload an image containing a QR code for decoding
- Camera selection (front/back, if available)
- Start/stop scanning controls
- Decoded QR code content displayed instantly
- All processing is done **locally in your browser** — no data leaves your device

---

## 📂 Project Structure
```
qr-reader/
│── index.html   # Main single-page app
│── README.md    # This file
```

---

## 🛠️ How to Deploy on GitHub Pages

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com/new) and create a repo (e.g., `qr-reader`).

2. **Upload files**
   - Add `index.html` and `README.md` to the repository.
   - Commit and push changes to the **main** branch.

3. **Enable GitHub Pages**
   - Navigate to **Settings → Pages** in your repository.
   - Under **Source**, select `main` branch and `/ (root)` folder.
   - Save, and GitHub will give you a deployment link like:
     ```
     https://<username>.github.io/qr-reader/
     ```

4. **Visit your live QR Reader app** 🎉

---

## 📱 Usage
- Open the deployed page in your browser.
- Allow camera permissions when prompted.
- Click **Start camera** to begin scanning.
- Or use the **Upload** option to decode a saved QR code image.

---

## 🔒 Notes
- Works only over **HTTPS** (GitHub Pages provides HTTPS automatically).
- On mobile devices, select the **back camera** for better scanning.
- If no camera is found, you can still decode QR codes by uploading images.

---

## 📜 License
This project is open source and available under the [MIT License](LICENSE).
