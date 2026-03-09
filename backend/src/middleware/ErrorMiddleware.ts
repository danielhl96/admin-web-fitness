export const errorMiddleware = (err: any, req: any, res: any) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ message });
};
