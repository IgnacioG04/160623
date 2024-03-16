const express = require('express');
const app = express();
const path = require('path');

// Establece la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para servir los archivos HTML
app.get('/explore', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'explore.html'));
});

app.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feed.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
