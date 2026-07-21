export interface Appointment {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email?: string;
  preferred_date: string;
  preferred_time: string;
  treatment_type: string;
  reason?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}
