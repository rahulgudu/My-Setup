import { sendLog } from "../features/sendLog.js";
import { TryCatch } from "../middleware/error.js";
export const testController = TryCatch(async (req, res) => {
    return sendLog({ message: "test" }, res);
});
