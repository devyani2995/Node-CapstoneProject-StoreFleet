// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try{
    const orderData = req.body;
    orderData.user = req.user._id;
    orderData.paidAt = new Date();
    const resp = createNewOrderRepo(req.body);
    console.log(resp)
    res.status(201).json({ success: true, msg: "order placed!", resp });
  }catch(error){
    return next(new ErrorHandler(400, error));
  }

};