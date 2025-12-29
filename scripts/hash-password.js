const argon2 = require('argon2');

async function hashPassword() {
  const password = '2802';
  const hash = await argon2.hash(password);
  console.log('Username: admin');
  console.log('Password: 2802');
  console.log('\nSQL INSERT:');
  console.log(`INSERT INTO admin_users (username, password, nombre) VALUES ('admin', '${hash}', 'Administrador');`);
}

hashPassword();
