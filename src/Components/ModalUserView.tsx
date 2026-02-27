import React, { useMemo } from 'react';
import TemplateModal from './TemplateModal';
import Button from './Button';
import { ModalUserViewProps } from '../types';
import {
  getActivityLevelString,
  getGoalString,
} from '../Pages/Dashboard/HelperFunctions.tsx';

function ModalUserView({
  user,
  onClose,
}: ModalUserViewProps): React.ReactElement | null {
  if (!user) return null;
  const activityLevel = useMemo(
    () => getActivityLevelString(user.activity_level),
    [user.activity_level]
  );
  const goalString = useMemo(() => getGoalString(user.goal), [user.goal]);
  return (
    <TemplateModal title="User View">
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-2 gap-2 text-base">
        <span className="font-bold">ID:</span>
        <span>{user.id || 'N/A'}</span>
        <span className="font-bold">Email:</span>
        <span className="break-words">{user.email || 'N/A'}</span>
        <span className="font-bold">Weight:</span>
        <span>{user.weight != null ? `${user.weight} kg` : 'N/A'}</span>
        <span className="font-bold">Height:</span>
        <span>{user.height != null ? `${user.height} cm` : 'N/A'}</span>
        <span className="font-bold">Age:</span>
        <span>{user.age != null ? `${user.age} years` : 'N/A'}</span>
        <span className="font-bold">Gender:</span>
        <span>{user.gender || 'N/A'}</span>
        <span className="font-bold">Activity Level:</span>
        <span>{activityLevel || 'N/A'}</span>
        <span className="font-bold">Goals:</span>
        <span>{goalString || 'N/A'}</span>
        <span className="font-bold">Body Fat Percentage:</span>
        <span>{user.bfp != null ? `${user.bfp}%` : 'N/A'}</span>
        <span className="font-bold">Waist Circumference:</span>
        <span>{user.waist != null ? `${user.waist} cm` : 'N/A'}</span>
        <span className="font-bold">Hip Circumference:</span>
        <span>{user.hip != null ? `${user.hip} cm` : 'N/A'}</span>
        <span className="font-bold">BMI:</span>
        <span>{user.bmi != null ? user.bmi.toFixed(0) : 'N/A'}</span>
        <span className="font-bold">Caloric Needs:</span>
        <span>
          {user.calories != null ? `${user.calories} kcal/day` : 'N/A'}
        </span>
        <div className="col-span-2  mt-2">
          <div className="divider divider-primary"></div>
        </div>
        <div className="col-span-2">
          <Button w="w-full" border="#FF0000" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </TemplateModal>
  );
}

export default ModalUserView;
