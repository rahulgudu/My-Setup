export function sendLog(data, res, statusCode = 200) {
    if (res) {
        res.status(statusCode).json({ data });
    }
    else {
        console.log(data);
    }
}
