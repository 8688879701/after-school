import { useState, useEffect } from 'react'
import { supabase, type Student, type Subject, type Enrollment, type ContactInquiry } from '@/lib/supabase'

// Hook for managing subjects
export const useSubjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubjects()
  }, [])

  const fetchSubjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .order('name')

      if (error) throw error
      setSubjects(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return { subjects, loading, error, refetch: fetchSubjects }
}

// Hook for managing students
export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('name')

      if (error) throw error
      setStudents(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addStudent = async (studentData: Omit<Student, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('students')
        .insert([studentData])
        .select()
        .single()

      if (error) throw error
      setStudents(prev => [...prev, data])
      return { success: true, data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add student'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  return { students, loading, error, addStudent, refetch: fetchStudents }
}

// Hook for managing contact inquiries
export const useContactInquiries = () => {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitInquiry = async (inquiryData: Omit<ContactInquiry, 'id' | 'status' | 'created_at' | 'updated_at'>) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([inquiryData])
        .select()
        .single()

      if (error) throw error
      return { success: true, data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit inquiry'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const fetchInquiries = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setInquiries(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return { inquiries, loading, error, submitInquiry, fetchInquiries }
}

// Hook for managing enrollments
export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<(Enrollment & { student: Student; subject: Subject })[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEnrollments()
  }, [])

  const fetchEnrollments = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          student:students(*),
          subject:subjects(*)
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setEnrollments(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const addEnrollment = async (studentId: string, subjectId: string) => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .insert([{ student_id: studentId, subject_id: subjectId }])
        .select(`
          *,
          student:students(*),
          subject:subjects(*)
        `)
        .single()

      if (error) throw error
      setEnrollments(prev => [data, ...prev])
      return { success: true, data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add enrollment'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  return { enrollments, loading, error, addEnrollment, refetch: fetchEnrollments }
}