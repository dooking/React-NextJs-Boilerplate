export const isProdEnv = process.env.NODE_ENV === 'production' ? true : false;

export const S3_URL = 'https://d1u043k7pheoq9.cloudfront.net';

export const SERVER_URL =
  process.env.NODE_ENV == 'production'
    ? 'https://server.bidi.style/api'
    : 'https://dev.bidi.style/api';

export const CLIENT_URL =
  process.env.NODE_ENV == 'production'
    ? 'https://bidi-ai.com'
    : 'https://dev.bidi-ai.com';

export const SERVICE_TITLE = 'AI Style 궁합 분석';
