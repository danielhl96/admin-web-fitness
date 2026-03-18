import { prisma, prismaUser } from '../../prisma/Prisma';
import {
  fetchUsers,
  deleteUser,
  setUserLockout,
  createUser,
  updateUserPassword,
  updateUserMail,
  getUserById,
} from '../../service/user.service';
beforeAll(async () => {
  await prisma.$connect();
  await prismaUser.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
  await prismaUser.$disconnect();
});

describe('UserService', () => {
  var userid: number;
  it('should fetch all users', async () => {
    const users = await fetchUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  it('should create a new user', async () => {
    const user = await createUser('test@test.de', 'password123');
    userid = user.id;
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email', 'test@test.de');
  });
  it('should not create a user with an existing email', async () => {
    await expect(createUser('test@test.de', 'password123')).rejects.toThrow(
      'Email already in use'
    );
  });

  it('should delete a user', async () => {
    const user = await deleteUser(userid);
    expect(user).toHaveProperty('id', userid);
  });

  it('should not delete a non-existing user', async () => {
    await expect(deleteUser(9999)).rejects.toThrow('User not found');
  });

  it('should get a user by id', async () => {
    const user = await createUser('getme@test.de', 'password123');
    const fetchedUser = await getUserById(user.id);
    expect(fetchedUser).toHaveProperty('id', user.id);
    await deleteUser(user.id);
  });

  it('should not get a non-existing user by id', async () => {
    await expect(getUserById(9999)).rejects.toThrow('User not found');
  });

  it('should update a user email', async () => {
    const user = await createUser('update@test.de', 'password123');
    const updatedUser = await updateUserMail(user.id, 'newemail@test.de');
    expect(updatedUser).toHaveProperty('email', 'newemail@test.de');
    await deleteUser(user.id);
  });

  it('should not update a user email if email is in use', async () => {
    const user1 = await createUser('user1@test.de', 'password123');
    const user2 = await createUser('user2@test.de', 'password123');
    await expect(updateUserMail(user2.id, 'user1@test.de')).rejects.toThrow(
      'Email already in use'
    );
    await deleteUser(user1.id);
    await deleteUser(user2.id);
  });

  it('should update a user password', async () => {
    const user = await createUser('pwchange@test.de', 'password123');
    const updatedUser = await updateUserPassword(user.id, 'newpassword');
    // We can't check the password directly, but we can ensure it ran without error.
    expect(updatedUser).toHaveProperty('id', user.id);
    await deleteUser(user.id);
  });

  it('should lock a user', async () => {
    const user = await createUser('lock@test.de', 'password123');
    const lockedUser = await setUserLockout(user.id, true);
    expect(lockedUser).toHaveProperty('locked', true);
    await deleteUser(user.id);
  });

  it('should unlock a user', async () => {
    const user = await createUser('unlock@test.de', 'password123');
    await setUserLockout(user.id, true); // First lock the user
    const unlockedUser = await setUserLockout(user.id, false);
    expect(unlockedUser).toHaveProperty('locked', false);
    await deleteUser(user.id);
  });
});
