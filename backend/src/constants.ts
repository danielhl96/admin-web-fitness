// Backend constants
export const COOKIE_MAX_AGE = 60 * 60 * 1000; // 1 hour
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
export const RATE_LIMIT_MAX_REQUESTS = 100;
export const BODY_LIMIT = '10mb';
export const JWT_ISSUER = 'admin-web-fitness';
export const JWT_AUDIENCE = 'admin-web-fitness';
export const JWT_EXPIRES_IN = '1h';
export const ARGON2_TIME_COST = 3;
export const ARGON2_MEMORY_COST = 256;
export const ARGON2_PARALLELISM = 4;
export const ARGON2_HASH_LENGTH = 32;
export const PASSWORD_MIN_LENGTH = 8;
