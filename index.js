function UserProfileManager() {
    this.users = [];

    this.generateUniqueId = function() {
        return Math.floor(Math.random() * Date.now());
    };

    this.addUser = function(userInfo) {
        const newUser = {
            id: this.generateUniqueId(),
            name: userInfo.name,
            email: userInfo.email
        };
        this.users.push(newUser);
    };

    this.removeUser = function(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    };

    this.updateUser = function(userId, newInfo) {
        const user = this.users.find(user => user.id === userId);
        if (user) {
            if (newInfo.name) {
                user.name = newInfo.name;
            }
            if (newInfo.email) {
                user.email = newInfo.email;
            }
        }
    };

    this.findUserByName = function(name) {
        return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    };

    this.getAllUsers = function() {
        return this.users;
    };
}

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers());

profileManager.updateUser(1, { name: "Alicia" });
profileManager.removeUser(2);

console.log(profileManager.findUserByName("Ali"));