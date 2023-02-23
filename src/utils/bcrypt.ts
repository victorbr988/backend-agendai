import bcrypt from 'bcrypt';

export async function encrypted (password: string): Promise<string> {
  const passwordEncrypted = await bcrypt.hash(password, 10);

  return passwordEncrypted;
};

export async function comparePassword(password: string, passwordEncrypted: string): Promise<boolean> {
  const isEqualPassword: boolean = await  bcrypt.compare(password, passwordEncrypted);

  return isEqualPassword;
};