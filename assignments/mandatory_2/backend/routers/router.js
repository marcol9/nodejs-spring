import Router from "express";
const router = Router();
import { db } from "../database/shopConnection.js";
import { authenticateUser, checkIfAdmin } from "../public/auth.js";

router.get("/items", async (req, res) => {
  try {
    const items = await db.all("SELECT id,name,price,category,description,inStock FROM items");
    res.send({ data: items });
  } catch {
    res.status(500).send();
  }
});
router.get("/items-by-category", async (req, res) => {
  const category = req.query.category;
  console.log(category)
  try {
    const items = await db.all("SELECT id,name,price,category,description,inStock,picture FROM items WHERE category =?", [category]);
    res.send({ data: items });
  } catch (e) {
    res.status(500).send();
    console.log(e)
  }
});

router.get("/item/:itemId", async (req, res) => {
  try {
    const item = await db.get("SELECT id,name,price,category,description,inStock FROM items WHERE id =?", [req.params.itemId]);
    res.send({ data: item });
  } catch {
    res.status(500).send();
  }
});
router.post("/items", authenticateUser, checkIfAdmin, async (req, res) => {
  try {
    const newItem = req.body;
    await db.run("INSERT INTO items (name,price,category,description,inStock) VALUES(?,?,?,?,?)", [
      newItem.name,
      newItem.price,
      newItem.category,
      newItem.description,
      newItem.inStock,
    ]);
    res.send({ data: newItem });
  } catch {
    res.status(500).send();
  }
});
router.put("/item/:itemId", authenticateUser, checkIfAdmin, async (req, res) => {
  try {
    const item = req.body;
    const itemId = req.params.itemId;
    const updatedItem = await db.run("UPDATE items SET name = ?, price = ?, category = ?, description = ?, inStock =? WHERE id = ?", [
      item.name,
      item.price,
      item.category,
      item.description,
      item.inStock,
      itemId,
    ]);
    res.send({ data: updatedItem });
  } catch {
    res.status(500).send();
  }
});

router.delete("/item/:itemId", authenticateUser, checkIfAdmin, async (req, res) => {
  const itemId = req.params.itemId;
  try {
    await db.run("DELETE FROM items WHERE id = ?", [itemId]);
    res.send({ message: "Success" });
  } catch {
    res.status(500).send();
  }
});

export default router;
