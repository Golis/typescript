// Interfaz de Usuario
interface User {
    id: number;
    nombre: string;
    email: string;
  }
  
  // Función para Simular la Consulta a la API
  function getUserData(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
      if (userId <= 0) {
        reject('ID de usuario no válido.');
        return;
      }
  
      // Simula un retraso de 2 segundos para la consulta
      setTimeout(() => {
        const user: User = {
          id: userId,
          nombre: 'Usuario ' + userId,
          email: `usuario${userId}@ejemplo.com`
        };
        resolve(user);
      }, 2000);
    });
  }
  
  // Función Principal
  function main() {
    const userId = 1; // Puedes cambiar este valor para probar diferentes casos
  
    getUserData(userId)
      .then(user => {
        console.log('Datos del usuario:');
        console.log(`ID: ${user.id}`);
        console.log(`Nombre: ${user.nombre}`);
        console.log(`Email: ${user.email}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Llamada a la función principal
  main();
  