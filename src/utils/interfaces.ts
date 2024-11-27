export interface TokenPayload {
  sub: number;
  type: 'access' | 'refresh';
  role: Roles;
  iat?: any;
  exp?: any;
}
export type Roles = 'admin' | 'common';
