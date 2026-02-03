import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Button from './Button.tsx';

// Type für User
interface User {
  id: number;
  name: string;
  email: string;
}

// Type für Exercises (basierend auf Prisma-Schema)
interface Exercises {
  id: number;
  user_id: number;
  workout_plan_id: number | null;
  date: string; // DateTime wird als ISO-String serialisiert
  name: string;
  sets: number;
  reps: number[]; // Array von Zahlen
  weights: number[]; // Array von Floats
  users: User; // Relation zu User
  workout_plans: WorkoutPlans | null; // Optionale Relation
}

// Type für WorkoutPlans (falls benötigt)
interface WorkoutPlans {
  id: number;
  // Weitere Felder je nach Schema
}
function Dashboard() {
  const [log, setLogs] = useState([
    { name: 'System started' },
    { name: 'User login' },
    { name: 'Error occurred' },
    { name: 'Data backup completed' },
    { name: 'User logout' },
    { name: 'Configuration changed' },
    { name: 'New user registered' },
    { name: 'Password changed' },
    { name: 'System shutdown' },
    { name: 'Update installed' },
    { name: 'Service restarted' },
    { name: 'Disk space low' },
    { name: 'Network connected' },
    { name: 'Firewall alert' },
    { name: 'Malware detected' },
    { name: 'Performance issue' },
    { name: 'Scheduled task executed' },
    { name: 'Database error' },
    { name: 'Memory usage high' },
    { name: 'CPU overload' },
  ]);

  const [user, setUser] = useState<User[]>([]);
  const [exercises, setExercises] = useState<Exercises[]>([]);

  useEffect(() => {
    axios
      .get<Exercises[]>('http://localhost:3000/api/exercises', {
        withCredentials: true,
      })
      .then((response: AxiosResponse<Exercises[]>) => {
        setExercises(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          // Server antwortete mit Error Status
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request wurde gemacht, aber keine Response
          console.error('Network Error:', error.request);
        } else {
          // Etwas anderes ging schief
          console.error('Request Error:', error.message);
        }
        // Fallback zu den statischen Daten falls API nicht verfügbar
      });
  }, []);

  useEffect(() => {
    axios
      .get<User[]>('http://localhost:3000/api/users', {
        withCredentials: true,
      })
      .then((response: AxiosResponse<User[]>) => {
        setUser(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          // Server antwortete mit Error Status
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request wurde gemacht, aber keine Response
          console.error('Network Error:', error.request);
        } else {
          // Etwas anderes ging schief
          console.error('Request Error:', error.message);
        }
        // Fallback zu den statischen Daten falls API nicht verfügbar
      });
  }, []);

  function UserCard(user: User) {
    return (
      <div className="card w-56 bg-black/10 backdrop-blur-md border border-white/20 shadow-xl">
        <h2 className="text-center text-blue-500">User</h2>

        <p className="text-white text-center text-xs">Mail: {user.email}</p>
        <div className="flex flex-row gap-2 m-2 items-center justify-center">
          <Button w="w-8" border="#3B82F6">
            View
          </Button>
          <Button w="w-8" border="#3B82F6">
            Edit
          </Button>
          <Button w="w-8" border="#3B82F6">
            Delete
          </Button>
          <Button w="w-8" border="#3B82F6">
            Lock
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-900 to-black ">
      <Header />
      <div className="items-center justify-center  flex flex-col pt-5">
        <div className="grid grid-cols-1 gap-3 lg:gap-2 py-2 lg:grid-cols-3 items-center justify-center px-3 lg:px-2 overflow-y-auto max-h-screen">
          <TemplateCards
            title="User Management"
            description="Maintain and manage user accounts, roles, and permissions with ease."
          >
            <h1>Registered Users:</h1>
            <div className="flex flex-col items-center space-y-2 w-full overflow-y-auto max-h-[20dvh] ">
              {user.map((u, index) => (
                <div key={u.id || index} className="mb-2">
                  {UserCard(u)}
                </div>
              ))}
            </div>
          </TemplateCards>

          <TemplateCards
            title="Statistics Dashboard"
            description="Statistic about workouts, nutrition, and user activity."
          >
            <div className="flex flex-col overflow-y-auto items-center w-full max-h-[15dvh]">
              {exercises.map((e, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white text-center text-xs">{e.name}</p>
                </div>
              ))}
            </div>
          </TemplateCards>

          <TemplateCards
            title="History Logs"
            description="Collect, analyze, and monitor system logs for improved troubleshooting and security."
          >
            <div className="flex flex-col overflow-y-auto items-center w-full max-h-[15dvh]">
              {log.map((l, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white text-center text-xs">{l.name}</p>
                </div>
              ))}
            </div>
          </TemplateCards>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
