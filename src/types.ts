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

export type UISTATE_USERS =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      error: string;
    }
  | {
      type: 'success';
      user: readonly User[];
    };
export type UISTATE_ADMINS =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      error: string;
    }
  | {
      type: 'success';
      admins: readonly Admin[];
    };

export type UISTATE_MEALS =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      error: string;
    }
  | {
      type: 'success';
      meals: readonly Meal[];
    };

export type UISTATE_EXERCISES =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      error: string;
    }
  | {
      type: 'success';
      exercises: readonly Exercises[];
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
