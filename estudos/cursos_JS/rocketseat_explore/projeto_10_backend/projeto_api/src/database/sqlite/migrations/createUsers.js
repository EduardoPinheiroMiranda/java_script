const createUsers = `
create table if not exists users(
    id integer primary key autoincrement,
    name varchar(50),
    email varchar(60),
    passwordUser varchar(20),
    avatar varchar(500),
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp
   )
`

module.exports = createUsers
