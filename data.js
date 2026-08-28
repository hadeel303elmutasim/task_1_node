const fs = require('fs');

const addUserInfo = (userID, userFname, userLname, userAge, userCity) => {
    const allUsers = loadUsers();
    const duplicateUser = allUsers.filter((user) => {
        return user.userID === userID
    });
    if (duplicateUser.length === 0 && allUsers.length < 10) {
            allUsers.push({
            userID: userID,
            userFname: userFname,
            userLname: userLname,
            userAge: userAge,
            userCity: userCity
        });
        saveUsers(allUsers);
        console.log('User added successfully!');
    } else {
        console.log('Error User already exists / maximum user limit reached');
    }
}

const loadUsers = () => {
    try {
        const dataIson = fs.readFileSync('users.json').toString();
        return JSON .parse(dataIson);
    } catch{
        return [];
    }
}
const saveUsers = (allUsers) => {
    const allUsersJson = JSON.stringify(allUsers);
    fs.writeFileSync('users.json', allUsersJson);
}

const listAllInfo = () => {
    const allUsers = loadUsers();
    console.log(allUsers);
}

const viewUser = (userID) => {
    const allUsers = loadUsers();
    const sinlgeUser = allUsers.find ((user) => {
        return user.userID === userID
    })
    if (sinlgeUser) {
        console.log(sinlgeUser);
    } else {
        console.log('User not found');
    }
}

const viewUsersInfo = () => {
    const allUsers = loadUsers();
    allUsers.forEach((user) => {
        console.log("User Full Name :" + user.userFname + " " + user.userLname + " | User City : " + user.userCity);
    });
}

const deleteAllUsers = () => {
    const allUsers = loadUsers();
    if (allUsers.length > 0) {
        fs.writeFileSync('users.json', '');
        console.log('you have successfully deleted all users');
    } else {
        console.log('all users already been deleted');
    }
}

const deleteUser = (userID) => {
    const allUsers = loadUsers();
    const usersToKeep = allUsers.filter((user) => {
        return user.userID !== userID
    })
    if (usersToKeep.length === allUsers.length) {
        console.log(`User with ID ${userID} was not found.`);
    } else {
         saveUsers(usersToKeep);
         console.log('you have successfully deleted the user');
    }

}

module.exports = {
    addUserInfo,
    listAllInfo,
    viewUser,
    viewUsersInfo,
    deleteAllUsers,
    deleteUser
}
