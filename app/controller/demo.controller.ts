import { Request, Response } from "express";
import { DemoModel } from "../model";
import { CommonResponse } from "./controllerInterface";

const demoController = async (req: Request, res: Response) => {
    try {
        const demoData = await DemoModel.find();
        const response: CommonResponse<typeof demoData> = {
            success: true,
            data: demoData,
        };
        res.status(200).json(response) 
        

    } catch (error) {
        const response: CommonResponse<null> = {
            success: false,
            message: "Internal Server Error",
        };
        res.status(500).json(response) 
        console.log(error);
        return;
    }
};

export default demoController;
