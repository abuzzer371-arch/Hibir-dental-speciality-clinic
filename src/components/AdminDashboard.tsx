import { useState } from 'react';
import { Appointment } from '../types';
import { Link } from 'react-router-dom';
import { Calendar, User, Phone, Clock, ChevronDown, Check, X, Shield, ArrowLeft } from 'lucide-react';

export default function AdminDashboard({ 
  appointments, 
  onUpdateStatus 
}: { 
  appointments: Appointment[],
  onUpdateStatus: (id: string, status: Appointment['status']) => void
}) {
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'>('All');
  
  const filteredAppointments = appointments.filter(a => filter === 'All' || a.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-900">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight text-slate-900">HIBR ADMIN</h1>
              <p className="text-[10px] text-teal-600 uppercase font-bold tracking-widest">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-slate-500 hover:text-teal-600 flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Link>
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border border-teal-200 shadow-sm">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Appointments Overview</h2>
            <p className="text-sm text-slate-500 mt-1">Manage incoming booking requests and patient schedules.</p>
          </div>
          <div className="relative">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="appearance-none border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 py-2.5 pl-4 pr-10 bg-white font-semibold text-slate-700 outline-none w-full sm:w-auto"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="bg-white shadow-xl shadow-slate-200/40 rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-slate-50 border-b border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Patient</th>
                  <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Date & Time</th>
                  <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Treatment</th>
                  <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 text-right text-[11px] font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Calendar className="w-12 h-12 text-slate-200 mb-3" />
                        <p className="text-slate-500 font-medium">No appointments found matching this filter.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((appt) => (
                    <tr key={appt.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 border border-slate-200 group-hover:border-teal-200 group-hover:text-teal-600 transition-colors">
                            <User className="h-5 w-5" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-slate-900">{appt.full_name}</div>
                            <div className="text-xs text-slate-500 truncate max-w-[150px]" title={appt.reason}>{appt.reason || 'No reason provided'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mb-0.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> {appt.phone}</div>
                        <div className="text-xs text-slate-500 pl-5">{appt.email || 'No email'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mb-0.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {appt.preferred_date}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {appt.preferred_time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 inline-flex text-xs font-bold rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {appt.treatment_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 inline-flex text-[11px] font-bold uppercase tracking-wider rounded-full border
                          ${appt.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                          ${appt.status === 'Confirmed' ? 'bg-teal-50 text-teal-700 border-teal-200' : ''}
                          ${appt.status === 'Completed' ? 'bg-slate-50 text-slate-600 border-slate-200' : ''}
                          ${appt.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                        `}>
                          {appt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          {appt.status === 'Pending' && (
                            <>
                              <button onClick={() => onUpdateStatus(appt.id, 'Confirmed')} className="text-teal-600 hover:text-white hover:bg-teal-600 bg-teal-50 border border-teal-100 p-1.5 rounded-lg transition-colors" title="Confirm">
                                <Check className="w-4 h-4" />
                              </button>
                              <button onClick={() => onUpdateStatus(appt.id, 'Cancelled')} className="text-red-600 hover:text-white hover:bg-red-600 bg-red-50 border border-red-100 p-1.5 rounded-lg transition-colors" title="Cancel">
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          )}
                          {appt.status === 'Confirmed' && (
                            <button onClick={() => onUpdateStatus(appt.id, 'Completed')} className="text-slate-600 hover:text-white hover:bg-slate-800 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                              Complete
                            </button>
                          )}
                          {appt.status === 'Completed' && (
                            <span className="text-slate-400 text-xs font-bold flex items-center justify-end gap-1"><Check className="w-3 h-3" /> Done</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
