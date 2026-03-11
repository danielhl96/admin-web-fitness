import { validateEmail } from '../../helper/emailvalid';
import { validatePassword } from '../../helper/passwordvalid';
import { validId } from '../../helper/validId';

describe('Middleware Tests', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = { Headers: {}, body: { email: 'testexample.com' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('validateEmail', () => {
    it('should return false for an invalid email', () => {
      expect(() => validateEmail(req, res, next)).toThrow(
        'Invalid email format'
      );
    });
  });
});

describe('Middleware Tests', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = { Headers: {}, params: { id: '1' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
  describe('validId', () => {
    it('should call next for a valid ID', () => {
      validId(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});

describe('Middleware Tests', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = { Headers: {}, params: { id: 'ab' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
  describe('validId', () => {
    it('should throw an error for an invalid ID', () => {
      expect(() => validId(req, res, next)).toThrow('Invalid ID format');
      expect(next).not.toHaveBeenCalled();
    });
  });
});

describe('Middleware Tests', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = { Headers: {}, body: { password: 'Password123!' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
  describe('validatePassword', () => {
    it('should return true for a valid password', () => {
      validatePassword(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
