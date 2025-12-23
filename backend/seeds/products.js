import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Chocolate Cupcake",
    price: 350.00,
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Butter Croissant",
    price: 280.00,
    image:
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Blueberry Muffin",
    price: 300.00,
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Chocolate Fudge Cake",
    price: 4500.00,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "French Baguette",
    price: 260.00,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Strawberry Donut",
    price: 220.00,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Cinnamon Roll",
    price: 320.00,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Cheese Bread Bun",
    price: 200.00,
    image:
      "https://images.unsplash.com/photo-1691862471023-fb5dcea0bcf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWVzZSUyMGJyZWFkJTIwYnVufGVufDB8fDB8fHww",
  },
];

async function seedDatabase() {
  try {
    // Clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // Insert bakery products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("🍞 Bakery products seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
