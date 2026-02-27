# 🚗 3D Car Showroom

An interactive **3D Car Showroom Web Application** built using React and Three.js.
Users can explore a 3D car model in 360°, zoom in/out, change colors dynamically, and switch between Day/Night environments.

---

## 🌟 Live Features

* 🔄 360° Car Rotation
* 🔍 Zoom In / Zoom Out
* 🎨 Dynamic Car Color Customization
* 🌗 Day / Night Mode Toggle
* 💡 Realistic Lighting & Shadows
* ⚡ GPU-Accelerated Rendering
* 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React
* 🎨 Tailwind CSS
* 🌍 Three.js
* 🧩 React Three Fiber
* 🎬 Drei

### Graphics Engine

* ⚡ WebGL (Used internally by Three.js for GPU rendering)

---

## 📂 Project Structure

```
car-showroom/
│
├── public/
│   └── models/        # 3D Car Model (.glb/.gltf)
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── Dockerfile
├── vite.config.js
├── package.json
└── index.html
```

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/UdhayaKiran30/car-showroom.git

# Navigate into the folder
cd car-showroom

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at:

```
http://localhost:5173/
```

---

## 🎮 How It Works

### 🔹 3D Rendering

The `<Canvas>` component from React Three Fiber renders the 3D scene.

### 🔹 Rotation & Zoom

OrbitControls allow:

* Mouse drag → Rotate car
* Scroll → Zoom in/out

### 🔹 Color Customization

Car material color updates dynamically using React state.

### 🔹 Day/Night Mode

Lighting intensity and environment background change based on toggle state.

---

## 📦 Docker Support

To build and run using Docker:

```bash
docker build -t car-showroom .
docker run -p 3000:3000 car-showroom
```

---

## 🎯 Future Enhancements

* 🚘 Multiple Car Models
* 💰 Dynamic Price Calculation
* 🎵 Engine Sound Effects
* 📊 Feature Comparison
* 🌐 Live Deployment

---

## 👨‍💻 Author

**Udhaya Kiran**
GitHub: [https://github.com/UdhayaKiran30](https://github.com/UdhayaKiran30)
