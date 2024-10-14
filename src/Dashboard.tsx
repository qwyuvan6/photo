import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { LogOut, Image } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const togglePhotoSelection = (index: number) => {
    setSelectedPhotos(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Generate 200 photo templates
  const photoTemplates = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">Personal Photo Vault</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-5 gap-4">
            {photoTemplates.map((photo, index) => (
              <div
                key={photo}
                className={`aspect-square bg-gray-200 rounded-lg cursor-pointer overflow-hidden transition-all duration-200 ease-in-out ${
                  selectedPhotos.includes(index) ? 'ring-4 ring-purple-500 ring-opacity-50 scale-95' : 'hover:shadow-lg hover:scale-105'
                }`}
                onClick={() => togglePhotoSelection(index)}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-2xl font-bold">{photo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;