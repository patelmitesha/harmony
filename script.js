const cameraSelect = document.getElementById("camera-select");
const startButton = document.getElementById("start-button");
const readerDiv = document.getElementById("reader");
const output = document.getElementById("output");
let html5QrCode = null;

// Detect iOS device
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// List cameras (non-iOS only, since iOS often fails enumerateDevices)
async function listCameras() {
  if (isIOS()) {
    cameraSelect.innerHTML = '<option value="ios">iOS device (use back camera)</option>';
    return;
  }
  try {
    const devices = await Html5Qrcode.getCameras();
    cameraSelect.innerHTML = '';
    devices.forEach(dev => {
      const opt = document.createElement("option");
      opt.value = dev.id;
      opt.textContent = dev.label || dev.id;
      cameraSelect.appendChild(opt);
    });
    if (devices.length) {
      cameraSelect.value = devices[0].id;
    }
  } catch (e) {
    console.error("Camera error:", e);
    cameraSelect.innerHTML = '<option value="">No cameras found</option>';
  }
}

listCameras();

startButton.addEventListener("click", () => {
  if (html5QrCode) {
    html5QrCode.stop().then(() => html5QrCode.clear()).catch(() => {});
  }

  const config = { fps: 10, qrbox: 250 };
  html5QrCode = new Html5Qrcode("reader");

  if (isIOS()) {
    // Force back camera on iOS Safari
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeMessage => {
        output.innerText = "QR Code detected: " + qrCodeMessage;
      },
      errorMessage => {
        console.warn(`QR scan error: ${errorMessage}`);
      }
    ).catch(err => {
      output.innerText = "Unable to start camera: " + err;
    });
  } else {
    // Normal flow for desktop/Android
    const cameraId = cameraSelect.value;
    html5QrCode.start(
      cameraId,
      config,
      qrCodeMessage => {
        output.innerText = "QR Code detected: " + qrCodeMessage;
      },
      errorMessage => {
        console.warn(`QR scan error: ${errorMessage}`);
      }
    ).catch(err => {
      output.innerText = "Unable to start camera: " + err;
    });
  }
});
