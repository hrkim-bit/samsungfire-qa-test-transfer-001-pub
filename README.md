# base-clean

Clean baseline for IVAS QA — `samsungfire-qa-base-clean` GitHub 리포의 source.

## 구조

```
.
├── index.js                         # Express entry
├── package.json                     # 안전한 deps (express ^4.21, helmet, compression, dotenv)
├── src/
│   ├── routes/health.js
│   ├── routes/users.js              # 입력 검증
│   ├── lib/validate.js              # 정규식 기반 sanitize
│   ├── middleware/error.js          # 안전한 에러 핸들러
│   └── config/default.js
└── README.md
```

## 의도

- **취약점 0건** 으로 IVAS 분석 결과 — TC5(S 콜백) 검증용
- 단순 Hello World가 아닌, 실제 분석할 만한 규모의 라우터·미들웨어·검증 로직 포함
- 모든 사용자 입력은 `validate.js`로 검증 후 사용

## 사용

이 코드는 `~/Desktop/work/test_repo/samsungfire-qa-test-clean-001(-pub)` 등에 복사되어 사용. 갱신이 필요하면 해당 로컬 폴더에서 직접 복사·commit·push.
