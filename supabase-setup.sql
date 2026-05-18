-- ================================================
-- HAWEE Leadership Program — Supabase Setup SQL
-- Chạy file này trong: Supabase Dashboard → SQL Editor
-- Project: hawee-leadership-2026 (project MỚI, TÁCH BIỆT hawee-website)
-- ================================================

-- 1. Enrolled Students (admin thêm email thủ công sau khi xác nhận đăng ký)
CREATE TABLE IF NOT EXISTS enrolled_students (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  full_name text,
  session_number int DEFAULT 1,  -- buổi học hiện tại của học viên
  enrolled_at timestamptz DEFAULT now()
);

ALTER TABLE enrolled_students ENABLE ROW LEVEL SECURITY;

-- Chỉ cho phép user đọc dòng có email khớp với email đăng nhập của họ
CREATE POLICY "users check own enrollment" ON enrolled_students
  FOR SELECT TO authenticated
  USING (auth.email() = email);

-- 2. Resources (tài liệu học tập — admin điền qua Supabase Dashboard)
CREATE TABLE IF NOT EXISTS resources (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  session_number int DEFAULT 0,   -- 0 = tất cả học viên, 1–6 = buổi cụ thể
  resource_type text DEFAULT 'pdf',  -- pdf | video | link | slide
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Chỉ học viên đã đăng ký mới thấy tài liệu
CREATE POLICY "enrolled students read resources" ON resources
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM enrolled_students
      WHERE email = auth.email()
    )
  );

-- 3. (Tuỳ chọn) Test: thêm 1 học viên mẫu để kiểm tra
-- INSERT INTO enrolled_students (email, full_name, session_number)
-- VALUES ('test@example.com', 'Học viên Mẫu', 1);

-- 4. (Tuỳ chọn) Test: thêm 1 tài liệu mẫu để kiểm tra
-- INSERT INTO resources (title, description, file_url, session_number, resource_type, display_order)
-- VALUES (
--   'Tài liệu Buổi 1 — Lãnh đạo bản thân',
--   'Slide và tài liệu đọc thêm buổi 1',
--   'https://drive.google.com/...',
--   1, 'pdf', 1
-- );
