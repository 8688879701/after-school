import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Student {
  id: string
  name: string
  email: string
  phone: string
  grade_level: string
  parent_name: string
  parent_email: string
  parent_phone: string
  created_at: string
  updated_at: string
}

export interface Subject {
  id: string
  name: string
  description: string
  grade_levels: string[]
  icon: string
  created_at: string
  updated_at: string
}

export interface Enrollment {
  id: string
  student_id: string
  subject_id: string
  enrollment_date: string
  status: 'active' | 'inactive' | 'completed'
  created_at: string
  updated_at: string
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'contacted' | 'resolved'
  created_at: string
  updated_at: string
}