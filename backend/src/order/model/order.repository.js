import OrderModel from "./order.schema.js";
import mongoose from "mongoose";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  const session = await mongoose.startSession();

  try{
    session.startTransaction();

    //reduce the stock
    for (let order of resp.orderedItems) {
      order.product.stock -= order.quantity;
      if(order.product.stock < 0){
        throw new Error("Not enough stock for " + order.product.name);
      }
      await order.product.save({session});
    }

    //create the order
    const order = new OrderModel(data);
    const resp = await order.save({session});
    
    session.commitTransaction();
    return resp;

  }catch(error){
    session.abortTransaction();
    throw new Error(error);
  }finally{
    session.endSession();
  }
}


