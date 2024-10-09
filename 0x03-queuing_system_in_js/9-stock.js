import express from 'express';
import redis from 'redis';
import { promisify } from 'util';

const app = express();
const client = redis.createClient();

// Promisify Redis get function for async operations
const getAsync = promisify(client.get).bind(client);

// List of products
const listProducts = [
  { id: 1, name: 'Suitcase 250', price: 50, stock: 4 },
  { id: 2, name: 'Suitcase 450', price: 100, stock: 10 },
  { id: 3, name: 'Suitcase 650', price: 350, stock: 2 },
  { id: 4, name: 'Suitcase 1050', price: 550, stock: 5 },
];

// Function to get item by ID
function getItemById(id) {
  return listProducts.find(product => product.id === id);
}

// Function to reserve stock in Redis
function reserveStockById(itemId, stock) {
  client.set(`item.${itemId}`, stock);
}

// Function to get current reserved stock from Redis
async function getCurrentReservedStockById(itemId) {
  const stock = await getAsync(`item.${itemId}`);
  return stock;
}

// Route to get the list of products
app.get('/list_products', (req, res) => {
  res.json(listProducts.map((product) => ({
    itemId: product.id,
    itemName: product.name,
    price: product.price,
    initialAvailableQuantity: product.stock,
  })));
});

// Route to get details of a specific product by ID
app.get('/list_products/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (!product) {
    res.json({ status: 'Product not found' });
    return;
  }

  const currentStock = await getCurrentReservedStockById(itemId) || product.stock;
  res.json({
    itemId: product.id,
    itemName: product.name,
    price: product.price,
    initialAvailableQuantity: product.stock,
    currentQuantity: parseInt(currentStock),
  });
});

// Route to reserve a product by ID
app.get('/reserve_product/:itemId', async (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const product = getItemById(itemId);

  if (!product) {
    res.json({ status: 'Product not found' });
    return;
  }

  const currentStock = await getCurrentReservedStockById(itemId) || product.stock;

  if (currentStock <= 0) {
    res.json({ status: 'Not enough stock available', itemId: product.id });
    return;
  }

  reserveStockById(itemId, currentStock - 1);
  res.json({ status: 'Reservation confirmed', itemId: product.id });
});

// Start server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
