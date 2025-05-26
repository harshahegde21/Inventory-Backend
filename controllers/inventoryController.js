import Products from "../models/inventoryModel.js";

const addItem = async (req, res) => {
  try {
    if (!req.body) {
      res.status(401).json({
        status: "Bad Request",
        message: "Please give required details!",
      });
    } else {
      const { id, name, description, price, quantity } = req.body;
      await Products.create({
        id,
        name,
        description,
        price,
        quantity,
      });
    }
    console.log("Item added");

    res
      .status(200)
      .json({ status: "Success", message: "Item added successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ status: "Internal server error" });
  }
};

const getItems = async (req, res) => {
  try {
    const allProducts = await Products.find({});
    if (allProducts.length < 1) {
      res.status(404).json({ status: "empty", message: "Item not found" });
    } else {
      res.status(200).json(allProducts);
    }
  } catch (error) {
    res
      .status(501)
      .json({
        status: "Internal Server Error",
        message: "Not able to fetch the items",
      });
  }
};
const removeItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Products.deleteOne({ id });
    if (result.deletedCount == 1) {
      res
        .status(200)
        .json({ status: "success", message: "Item deleted successfully" });
    } else {
      res.status(404).json({ staus: "not found", message: "Item not found" });
    }
  } catch (error) {
    res
      .status(501)
      .json({ status: "Internal Server Error", message: "Not able to delete" });
  }
};

const getOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    const oneItem = await Products.findOne({ id });
    if (!oneItem) {
      res.status(404).json({ status: "not found", message: "Item not found" });
    } else {
      res.status(200).json(oneItem);
    }
  } catch (error) {
    res
      .status(501)
      .json({
        status: "Internal Server Error",
        message: "Not able to find item",
      });
  }
};
const updateItem = async (req, res) => {
  try {
    if (!req.body) {
      res
        .send(501)
        .json({
          status: "error",
          message: "Enter the all the deatails to update",
        });
    }
    const ids = req.params.id;
    const { id, name, description, price, quantity } = req.body;
    const updatedItem = await Products.findOneAndUpdate(
      { id: ids },
      { $set: { id, name, description, price, quantity } }
    );
    res.status(200).json({
      status: "success",
      message: "Item updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message,
    });
  }
};

export { addItem, getItems, getOneItem, updateItem, removeItem };
