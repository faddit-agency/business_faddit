-- Supabase inquiries 테이블 생성 SQL
-- Contact 페이지 문의 데이터를 저장하기 위한 테이블

CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  inquiry_type VARCHAR(100),
  inquiry_details TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 생성 (조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

-- updated_at 자동 업데이트를 위한 트리거 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) 정책 설정 (선택사항)
-- 모든 사용자가 조회/삽입 가능하도록 설정
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 데이터를 삽입할 수 있도록 정책 추가
CREATE POLICY "Allow public insert on inquiries"
    ON inquiries
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 인증된 사용자만 조회할 수 있도록 정책 추가 (필요시)
-- CREATE POLICY "Allow authenticated select on inquiries"
--     ON inquiries
--     FOR SELECT
--     TO authenticated
--     USING (true);

