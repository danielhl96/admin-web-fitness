import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import { useState } from 'react';
import Button from './Button.tsx';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

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

  const [user, setUser] = useState([
    { name: 'Daniel' },
    { name: 'Max' },
    { name: 'Anna' },
    { name: 'Tom' },
    { name: 'Lisa' },
    { name: 'Mark' },
    { name: 'Sara' },
    { name: 'John' },
    { name: 'Emma' },
    { name: 'Paul' },
    { name: 'Nina' },
    { name: 'Alex' },
    { name: 'Mia' },
    { name: 'David' },
    { name: 'Laura' },
    { name: 'Chris' },
    { name: 'Sophie' },
    { name: 'Mike' },
    { name: 'Julia' },
    { name: 'Felix' },
  ]);

  function UserCard(mail: string, role: string) {
    return (
      <div className="card w-56 bg-black/10 backdrop-blur-md border border-white/20 shadow-xl">
        <h2 className="text-center text-blue-500">User</h2>
        <p className="text-white text-center text-xs">Mail: {mail}</p>
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

      <div className="grid grid-cols-1 gap-3 py-2 lg:grid-cols-3 items-center justify-center px-3  overflow-y-auto max-h-screen">
        <TemplateCards
          title="User location"
          description="Track and visualize user locations in real-time on an interactive map."
        >
          <div className="flex flex-col overflow-y-auto w-full max-h-[20dvh]">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [10, 51], scale: 600 }}
              width={300}
              height={200}
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        geo.properties.NAME === 'Germany'
                          ? '#3B82F6'
                          : '#1313daff'
                      }
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </TemplateCards>

        <TemplateCards
          title="User Management"
          description="Maintain and manage user accounts, roles, and permissions with ease."
        >
          <div className="flex flex-col items-center w-full overflow-y-auto max-h-[20dvh] ">
            {user.map((u, index) => (
              <div key={index} className="mb-2">
                {UserCard(u.name, 'Athlete')}
              </div>
            ))}
          </div>
        </TemplateCards>

        <TemplateCards
          title="Log Management"
          description="Collect, analyze, and monitor system logs for improved troubleshooting and security."
        >
          <div className="flex flex-col overflow-y-auto items-center justify-center w-full max-h-[15dvh]">
            {log.map((l, index) => (
              <div key={index} className="mb-2">
                <p className="text-white text-center text-xs">{l.name}</p>
              </div>
            ))}
          </div>
        </TemplateCards>
      </div>
    </div>
  );
}

export default Dashboard;
