/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import { useState } from 'react';
import { Appointment } from './types';

export default function App() {
  // In a real app, this would be fetched from Supabase.
  // For this demonstration, we use local state so bookings show up immediately in the admin panel.
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      created_at: new Date().toISOString(),
      full_name: 'Abebe Kebede',
      phone: '+251 91 123 4567',
      email: 'abebe@example.com',
      preferred_date: '2026-07-25',
      preferred_time: '10:00 AM',
      treatment_type: 'Whitening',
      reason: 'Routine checkup and whitening',
      status: 'Pending'
    }
  ]);

  const addAppointment = (appt: Omit<Appointment, 'id' | 'created_at' | 'status'>) => {
    const newAppt: Appointment = {
      ...appt,
      id: Math.random().toString(36).substring(2, 9),
      created_at: new Date().toISOString(),
      status: 'Pending'
    };
    setAppointments([...appointments, newAppt]);
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage onSubmitBooking={addAppointment} />} />
        <Route path="/admin" element={<AdminDashboard appointments={appointments} onUpdateStatus={updateAppointmentStatus} />} />
      </Routes>
    </Router>
  );
}
