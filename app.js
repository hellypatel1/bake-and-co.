const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const productRoutes = require('./routes/products');

app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/products', productRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
