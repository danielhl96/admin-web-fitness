// This file contains helper functions for the dashboard component.
//TypeGuards protect against null and undefined values and provide type safety when working with the data fetched from the API.
// These functions are used to convert the activity level and goal values from the API into human-readable strings that can be displayed in the UI.
export function getActivityLevelString(
  level: string | null | undefined
): string {
  if (level == null) return 'N/A';

  switch (level) {
    case '1.2':
      return 'Not Active';
    case '1.4 ':
      return 'Light Activity';
    case '1.7':
      return 'Active';
    case '2.0':
      return 'Very Active';
    default:
      return 'Unknown';
  }
}

export function getGoalString(goal: string | null | undefined): string {
  if (goal == null) return 'N/A';
  switch (goal) {
    case '1':
      return 'Cut';
    case '2':
      return 'Maintain';
    case '3':
      return 'Bulk';

    default:
      return 'Unknown';
  }
}
