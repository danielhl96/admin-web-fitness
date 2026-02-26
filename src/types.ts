import { NotifyProps } from './Components/notify';

export type AdminCreateData = {
  message: string;
  adminId: number;
};
export type PasswordChangeData = {
  message: string;
};
export type AccountDeleteData = {
  message: string;
};
export type AdminDeleteData = {
  message: string;
};
export type LockToggleData = {
  message: string;
};
export type PasswordGenerateData = {
  password: string;
};

export type UI_STATE<T> =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      error: string;
    }
  | {
      type: 'success';
      data: T;
    };

export interface User {
  readonly id: number;
  readonly email: string;
  readonly weight: number; // in kg
  readonly height: number; // in cm
  readonly age: number; // in years
  readonly gender: 'male' | 'female';
  readonly activity_level: string;
  readonly goal: string;
  readonly bfp: number; // body fat percentage
  readonly waist: number; // in cm
  readonly hip: number; // in cm
  readonly bmi: number; // body mass index
  readonly calories: number; // daily caloric needs
  locked: boolean; // Kann sich ändern, also nicht readonly
}

export type UserCredentials = {
  email: string;
  password: string;
  confirmPassword?: string; // Optional, nur für Registrierung
};

export interface Meal {
  readonly id: number;
  readonly user_id: number;
  readonly date: string;
  readonly name: string;
  readonly calories: number;
  readonly protein: number;
  readonly carbs: number;
  readonly fats: number;
}

export interface Exercises {
  readonly id: number;
  readonly user_id: number;
  readonly workout_plan_id: number | null;
  readonly date: string;
  readonly name: string;
  readonly sets: number;
  readonly reps: number[];
  readonly weights: number[];
  readonly users: User;
  readonly workout_plans: WorkoutPlans | null;
}

export interface WorkoutPlans {
  readonly id: number;
}

export interface Admin {
  readonly id: number;
  readonly masterid: boolean;
  readonly email: string;
}

export interface ModalAccountAddProps {
  onSaved?: () => Promise<void> | void;
  setIsAddingAccount: (adding: boolean) => void;
  onPasswordChange?: (password: string) => void;
  onConfirmPasswordChange?: (password: string) => void;
  onEmailChange?: (email: string) => void;
  email?: string;
  password?: string;
  confirmPassword?: string;
  errorPassword?: (hasError: boolean) => void;
  errorConfirmPassword?: (hasError: boolean) => void;
  errorEmail?: (hasError: boolean) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
  confirmPasswordHasError?: boolean;
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

export interface ModalAccountDeleteProps {
  setDeleting: (deleting: boolean) => void;
  selectedUser: User;
  onSaved?: () => Promise<void> | void;
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

export interface ModalforAdminProps {
  onClose: () => void;
  email?: string;
  password?: string;
  errorEmail?: (hasError: boolean) => void;
  errorPassword?: (hasError: boolean) => void;
  onPasswordChange?: (value: string) => void;
  onEmailChange?: (value: string) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}
