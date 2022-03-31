import Router from "express";
const router = Router();
import { db } from "../database/shopConnection.js";

router.get("/items", async (req, res) => {
  const items = await db.all("SELECT id,name,price,category,description,inStock FROM items");
  res.send({ data: items });
});
router.get("/item/:userId", async (req, res) => {
  const item = await db.get("SELECT id,name,price,category,description,inStock FROM items WHERE id =?", [req.params.userId]);
  res.send({ data: item });
});

export default router;
