import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

export const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    return bcrypt.hashSync(password, salt);
};

export const comparePassword = (candidatePassword, storedPassword) => {
    return bcrypt.compareSync(candidatePassword, storedPassword);
}