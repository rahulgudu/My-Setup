export function sendLog<T>(data: T, res?: any, statusCode: number = 200): void {
  if (res) {
    res.status(statusCode).json({ data });
  } else {
    console.log(data);
  }
}
