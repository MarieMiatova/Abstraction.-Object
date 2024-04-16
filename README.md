# Abstraction.-Object
Задача:
Определите объект UserProfileManager, который будет содержать следующие свойства и методы:
users: массив объектов, каждый из которых представляет пользователя и содержит поля id (уникальный идентификатор), name (имя пользователя), и email (электронная почта).
addUser(userInfo): метод для добавления нового пользователя. userInfo должен быть объектом, который содержит name и email. Метод должен автоматически присваивать уникальный id каждому новому пользователю.
removeUser(userId): метод для удаления пользователя по его id.
updateUser(userId, newInfo): метод для обновления информации о пользователе. newInfo может содержать новые значения для name и/или email.
findUserByName(name): метод для поиска пользователя по имени. Метод должен возвращать массив пользователей, чьи имена частично или полностью совпадают с заданным именем.
getAllUsers(): метод, который возвращает массив всех пользователей.


Используйте функцию для генерации уникального id для каждого пользователя.
Убедитесь, что методы корректно обрабатывают добавление, удаление, обновление и поиск пользователей.

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.findUserByName("Ali")); // Находит Alicia