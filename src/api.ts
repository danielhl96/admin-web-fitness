/// <reference types="vite/client" />

import axios, { AxiosRequestConfig } from 'axios';
import { Admin, Exercises, Meal, User } from './types';

const PORT = import.meta.env.VITE_PORT || '3000';
const API_URL = import.meta.env.VITE_API_URL || `http://localhost:${PORT}/api/`;
const API_ADMIN_URL =
  import.meta.env.VITE_API_ADMIN_URL || `http://localhost:${PORT}/admins/`;

type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

async function apiRequest<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await axios.request<T>({
      method,
      url,
      data,
      ...config,
      withCredentials: true,
    });
    return { status: 'success', data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return {
          status: 'error',
          message: error.response.data?.error || 'Server error',
        };
      } else if (error.request) {
        return { status: 'error', message: 'Network error' };
      } else {
        return { status: 'error', message: error.message };
      }
    } else {
      return { status: 'error', message: 'Unknown error' };
    }
  }
}

export async function handleEmailChange(
  email: string,
  userId: number
): Promise<ApiResponse<{ message: string }>> {
  const response = await apiRequest<{ message: string }>(
    'put',
    `${API_URL}email/${userId}`,
    { email }
  );
  return response;
}

type PasswordChangeData = {
  message: string;
};

export async function handlePasswordChange(
  password: string,
  userId: number
): Promise<ApiResponse<PasswordChangeData>> {
  const response = await apiRequest<PasswordChangeData>(
    'put',
    `${API_URL}password/${userId}`,
    { password }
  );
  return response;
}

type AccountDeleteData = {
  message: string;
};

export async function handleAccountDelete(
  userId: number
): Promise<ApiResponse<AccountDeleteData>> {
  const response = await apiRequest<AccountDeleteData>(
    'delete',
    `${API_URL}user/${userId}`
  );

  return response;
}

type AdminDeleteData = {
  message: string;
};

export async function handleAdminDelete(
  adminId: number
): Promise<ApiResponse<AdminDeleteData>> {
  const response = await apiRequest<AdminDeleteData>(
    'delete',
    `${API_ADMIN_URL}delete/${adminId}`
  );

  return response;
}

type LockToggleData = {
  message: string;
};

export async function handleLockToggle(
  userId: number,
  locked: boolean
): Promise<ApiResponse<LockToggleData>> {
  const response = await apiRequest<LockToggleData>(
    'put',
    `${API_URL}user_lock/${userId}`,
    { locked }
  );

  return response;
}

type AdminCreateData = {
  message: string;
  adminId: number;
};

export async function handleAdminCreate(
  email: string,
  password: string
): Promise<ApiResponse<AdminCreateData>> {
  const response = await apiRequest<AdminCreateData>(
    'post',
    `${API_ADMIN_URL}register`,
    { email, password }
  );

  return response;
}

type PasswordGenerateData = {
  password: string;
};

export async function handleGeneratePassword(): Promise<
  ApiResponse<PasswordGenerateData>
> {
  const response = await apiRequest<PasswordGenerateData>(
    'get',
    `${API_URL}createPassword`
  );
  return response;
}

type AdminResponse = {
  readonly admins: readonly Admin[];
};
export async function fetchAdmins(): Promise<ApiResponse<AdminResponse>> {
  const response = await apiRequest<AdminResponse>(
    'get',
    `${API_ADMIN_URL}get`
  );
  return response;
}

export async function fetchUsers(): Promise<
  ApiResponse<{ users: readonly User[] }>
> {
  const response = await apiRequest<{ users: readonly User[] }>(
    'get',
    `${API_URL}users`
  );
  return response;
}

type MealResponse = {
  readonly meals: readonly Meal[];
};

export async function fetchMeals(): Promise<ApiResponse<MealResponse>> {
  const response = await apiRequest<MealResponse>('get', `${API_URL}meals`);
  return response;
}

type ExercisesResponse = {
  readonly exercises: readonly Exercises[];
};

export async function fetchExercises(): Promise<
  ApiResponse<ExercisesResponse>
> {
  const response = await apiRequest<ExercisesResponse>(
    'get',
    `${API_URL}exercises`
  );
  return response;
}
