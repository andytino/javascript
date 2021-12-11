function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        // this trong block nay khac voi this o tren, no tuong duong voi object goi no
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.class = "JS"

const author = new User("Việt", "Thắng", "avatar1")
const user = new User("Đỗ", "Quyên", "avatar2")

author.gender = "Male"
author.role = "admin"
user.gender = "FeMale"

console.log(author)
console.log(user)