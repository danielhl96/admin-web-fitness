import { validateEmail } from '../../helper/emailvalid';
import { validatePassword } from '../../helper/passwordvalid';
import { validId } from '../../helper/validId';

describe('Middleware', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('validateEmail', () => {
    it('should call next for a valid email', () => {
      req = { body: { email: 'test@example.com' } };
      validateEmail(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should throw an error for an invalid email', () => {
      req = { body: { email: 'testexample.com' } };
      expect(() => validateEmail(req, res, next)).toThrow(
        'Invalid email format'
      );
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('validatePassword', () => {
    it('should call next for a valid password', () => {
      req = { body: { password: 'Password123!' } };
      validatePassword(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should throw an error for an invalid password', () => {
      req = { body: { password: 'password' } };
      expect(() => validatePassword(req, res, next)).toThrow(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*\)'
      );
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('validId', () => {
    it('should call next for a valid numeric string ID', () => {
      req = { params: { id: '1' } };
      validId(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should call next for a valid number ID', () => {
      req = { params: { id: 2 } };
      validId(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should call next for a valid number ID', () => {
      req = { params: { id: '20' } };
      validId(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should throw an error for an invalid ID', () => {
      req = { params: { id: 'ab' } };
      expect(() => validId(req, res, next)).toThrow('Invalid ID format');
      expect(next).not.toHaveBeenCalled();
    });
    it('should throw an error for an invalid ID', () => {
      req = { params: { id: '2d' } };
      expect(() => validId(req, res, next)).toThrow('Invalid ID format');
      expect(next).not.toHaveBeenCalled();
    });
  });
});
