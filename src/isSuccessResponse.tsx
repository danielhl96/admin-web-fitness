type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is { status: 'success'; data: T } {
  return response.status === 'success';
}
export default isSuccessResponse;
