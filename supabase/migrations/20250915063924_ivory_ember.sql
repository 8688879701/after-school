/*
  # Initial Schema for Easy Learn Academy

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique)
      - `phone` (text)
      - `grade_level` (text)
      - `parent_name` (text, required)
      - `parent_email` (text, required)
      - `parent_phone` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `subjects`
      - `id` (uuid, primary key)
      - `name` (text, required, unique)
      - `description` (text)
      - `grade_levels` (text array)
      - `icon` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `enrollments`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `subject_id` (uuid, foreign key)
      - `enrollment_date` (date)
      - `status` (enum: active, inactive, completed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `subject` (text, required)
      - `message` (text, required)
      - `status` (enum: new, contacted, resolved)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to subjects
    - Add policies for contact inquiries submission
    - Add policies for student/enrollment management
*/

-- Create enum types
CREATE TYPE enrollment_status AS ENUM ('active', 'inactive', 'completed');
CREATE TYPE inquiry_status AS ENUM ('new', 'contacted', 'resolved');

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE,
  phone text,
  grade_level text,
  parent_name text NOT NULL,
  parent_email text NOT NULL,
  parent_phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Subjects table
CREATE TABLE IF NOT EXISTS subjects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  grade_levels text[] DEFAULT '{}',
  icon text DEFAULT '📚',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  subject_id uuid REFERENCES subjects(id) ON DELETE CASCADE,
  enrollment_date date DEFAULT CURRENT_DATE,
  status enrollment_status DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, subject_id)
);

-- Contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status inquiry_status DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for subjects (public read access)
CREATE POLICY "Anyone can read subjects"
  ON subjects
  FOR SELECT
  TO public
  USING (true);

-- Policies for contact inquiries (public can insert)
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policies for students (authenticated users can manage)
CREATE POLICY "Authenticated users can read students"
  ON students
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert students"
  ON students
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update students"
  ON students
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policies for enrollments (authenticated users can manage)
CREATE POLICY "Authenticated users can read enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert enrollments"
  ON enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update enrollments"
  ON enrollments
  FOR UPDATE
  TO authenticated
  USING (true);

-- Insert initial subjects data
INSERT INTO subjects (name, description, grade_levels, icon) VALUES
  ('Mathematics', 'From basic arithmetic to advanced calculus, building strong mathematical foundations with proven teaching methods', ARRAY['Elementary', 'Middle School', 'High School', 'College Prep'], '🔢'),
  ('Science', 'Physics, Chemistry, and Biology with hands-on experiments, practical learning, and exam preparation', ARRAY['General Science', 'Physics', 'Chemistry', 'Biology'], '🔬'),
  ('English', 'Reading comprehension, writing skills, grammar, and literature analysis for academic excellence', ARRAY['Elementary', 'Middle School', 'High School', 'Advanced'], '📚'),
  ('Social Studies', 'History, Geography, Civics, and Social Sciences for comprehensive understanding and better grades', ARRAY['World History', 'Local History', 'Geography', 'Civics'], '🌍'),
  ('Telugu', 'Native language proficiency, literature, and communication skills with cultural understanding', ARRAY['Basic', 'Intermediate', 'Advanced', 'Literature'], '🗣️'),
  ('Hindi', 'Second language learning with focus on reading, writing, speaking, and board exam preparation', ARRAY['Basic', 'Intermediate', 'Advanced', 'Literature'], '📝')
ON CONFLICT (name) DO NOTHING;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subjects_updated_at BEFORE UPDATE ON subjects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();