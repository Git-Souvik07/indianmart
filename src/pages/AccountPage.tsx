import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Mail, Phone, Home, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface Profile {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

const AccountPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  
  const [formData, setFormData] = useState<Profile>({
    id: user?.id || '',
    name: user?.name || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (user?.id) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData(prev => ({
          ...prev,
          ...data,
          name: data.name || user?.name || ''
        }));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login\" state={{ from: { pathname: '/account' } }} />;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      
      setSuccessMessage('Profile updated successfully!');
      setIsEditing(false);
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Account</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-12 text-white">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <User className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold">{formData.name}</h2>
              <p className="text-green-100">{user?.email}</p>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="p-6">
            {successMessage && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
                {successMessage}
              </div>
            )}
            
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                {error}
              </div>
            )}
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Profile Information</h3>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        !isEditing ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        !isEditing ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Home className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          !isEditing ? 'bg-gray-50' : 'bg-white'
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        !isEditing ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        !isEditing ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        !isEditing ? 'bg-gray-50' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
              </div>
              
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md disabled:opacity-75"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;