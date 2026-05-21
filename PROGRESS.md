# PROGRESS

## STEP 1: git 초기화 및 원격 연결 (2026-05-20)
- [x] STEP 1-1: git init
- [x] STEP 1-2: git remote add origin
- [x] STEP 1-3: git branch -M main

## STEP 2: 프로젝트 구조 생성 (2026-05-20)
- [x] STEP 2-1: frontend/ 디렉토리
- [x] STEP 2-2: backend/ 디렉토리
- [x] STEP 2-3: docker/ 디렉토리
- [x] STEP 2-4: .github/workflows/ 디렉토리

## STEP 3: .gitignore 생성 (2026-05-20)
- [x] STEP 3-1: .gitignore 파일 생성

## STEP 4: .env.example 생성 (2026-05-20)
- [x] STEP 4-1: .env.example 파일 생성

## STEP 5: README.md 생성 (2026-05-20)
- [x] STEP 5-1: README.md 파일 생성

## STEP 6: 초기 커밋 (2026-05-20)
- [x] STEP 6-1: git add -A
- [x] STEP 6-2: git commit
- [x] STEP 6-3: git push -u origin main - 사용자가 직접 처리 완료

## STEP 7: Docker + CI/CD 초기 구성 (2026-05-20)
- [x] STEP 7-1: docker-compose.map.yml 생성
- [x] STEP 7-2: docker/frontend/Dockerfile 생성
- [x] STEP 7-3: docker/backend/Dockerfile 생성
- [x] STEP 7-4: docker/backend/Caddyfile 생성
- [x] STEP 7-5: .github/workflows/deploy.yml 생성
- [x] STEP 7-6: .env.example 업데이트

## STEP 8: docker-compose.map.yml 구조 수정 (2026-05-20)
- [x] STEP 8-1: docker-compose.map.yml 재작성

## STEP 9: Laravel + Next.js 앱 초기 코드 생성 (2026-05-20)
- [x] STEP 9-1: backend/ Laravel 핵심 파일 생성
- [x] STEP 9-2: frontend/ Next.js 초기 파일 생성
- [x] STEP 9-3: docker/backend/Caddyfile 수정 (리버스 프록시)

## STEP 10: .gitignore 보완 및 커밋·푸시 (2026-05-20)
- [x] STEP 10-1: .gitignore에 .claude/ 추가
- [x] STEP 10-2: git add -A && commit
- [x] STEP 10-3: git push origin main

## STEP 11: Dockerfile lockfile 의존성 제거 및 커밋·푸시 (2026-05-21)
- [x] STEP 11-1: docker/frontend/Dockerfile 수정
- [x] STEP 11-2: git commit && push

## STEP 12: frontend/public 디렉토리 생성 및 커밋·푸시 (2026-05-21)
- [x] STEP 12-1: frontend/public/.gitkeep 생성
- [x] STEP 12-2: git commit && push

## STEP 13: composer.lock 제거 + storage 디렉토리 구조 생성 (2026-05-21)
- [x] STEP 13-1: docker/backend/Dockerfile 수정
- [x] STEP 13-2: backend/storage + bootstrap/cache 디렉토리 생성
- [x] STEP 13-3: git commit && push

## STEP 14: .gitignore storage 예외 추가 및 커밋·푸시 (2026-05-21)
- [x] STEP 14-1: .gitignore 예외 추가
- [x] STEP 14-2: git commit && push

## STEP 15: Dockerfile COPY 경로 수정 및 커밋·푸시 (2026-05-21)
- [x] STEP 15-1: docker/backend/Dockerfile 수정
- [x] STEP 15-2: git commit && push

## STEP 16: backend Dockerfile apt 패키지 추가 및 커밋·푸시 (2026-05-21)
- [x] STEP 16-1: docker/backend/Dockerfile 수정
- [x] STEP 16-2: git commit && push

## STEP 17: zslab-map SSL 인증서 발급 + nginx 설정 (2026-05-21)
- [ ] STEP 17-1: certbot SSL 인증서 발급
- [ ] STEP 17-2: 인증서 gateway certs 디렉토리로 복사
- [ ] STEP 17-3: nginx.conf에 zslab-map 서버 블록 추가
- [ ] STEP 17-4: nginx 설정 검증 및 reload

## STEP 18: zslab-map nginx 설정 추가 (2026-05-21)
- [x] STEP 18-1: 인증서 복사 (/home/gateway/certs/zslab-map.duckdns.org)
- [x] STEP 18-2: nginx.conf에 zslab-map 서버 블록 추가 (sed -i)
- [x] STEP 18-3: nginx 검증 및 reload

## STEP 19: Laravel 필수 라우트 및 기본 파일 생성 (2026-05-21)
- [x] STEP 19-1: backend/routes/ 파일 생성 (api.php, web.php, console.php)
- [x] STEP 19-2: backend/config/ 파일 생성 (app, database, cache, session, logging)
- [ ] STEP 19-3: git commit && push
