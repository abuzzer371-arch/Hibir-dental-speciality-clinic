-- Supabase SQL Schema for Hibr Special Dental Care Service

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Appointments Table
CREATE TABLE public.appointments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    treatment_type TEXT NOT NULL,
    reason TEXT,
    status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Cancelled'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Policies
-- Allow anyone to insert (book an appointment)
CREATE POLICY "Allow public inserts on appointments" ON public.appointments
    FOR INSERT TO public
    WITH CHECK (true);

-- Allow authenticated users (staff) to select, update, delete
CREATE POLICY "Allow authenticated full access on appointments" ON public.appointments
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);
