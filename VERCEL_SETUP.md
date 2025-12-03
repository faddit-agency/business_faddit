# Vercel 배포 가이드

## GitHub 리포지토리 연결 완료 ✅
- 리포지토리: https://github.com/faddit-agency/business_faddit.git
- 브랜치: main

## Vercel 배포 방법

### 방법 1: Vercel 웹 대시보드 (권장)

1. **Vercel 접속 및 로그인**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 추가**
   - "Add New..." → "Project" 클릭
   - GitHub 인증 후 `faddit-agency/business_faddit` 리포지토리 선택

3. **프로젝트 설정**
   - Framework Preset: **Next.js** (자동 감지)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `.next` (기본값)

4. **환경 변수** (현재는 필요 없음)
   - 필요시 추가

5. **Deploy 클릭**
   - 자동으로 빌드 및 배포 시작

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 자동 배포 설정

Vercel은 GitHub와 연결되면 자동으로:
- `main` 브랜치에 푸시될 때마다 프로덕션 배포
- Pull Request 생성 시 프리뷰 배포

## 추가 설정 (선택사항)

### 커스텀 도메인
1. Vercel 대시보드 → 프로젝트 → Settings → Domains
2. 원하는 도메인 추가

### 환경 변수
- Supabase 연동 시 환경 변수 추가 필요
- Settings → Environment Variables에서 관리

