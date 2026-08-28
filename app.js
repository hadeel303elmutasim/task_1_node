const yargs = require('yargs');
const datafile = require('./data')

yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        userID: {
            describe: 'User id',
            demandOption: true,
            type: 'string'
        },
        userFname: {
            describe: 'User first name',
            demandOption: true,
            type: 'string'
        },
        userLname: {
            describe: 'User last name',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (x) => {
        datafile.addUserInfo(x.userID, x.userFname, x.userLname, x.userAge, x.userCity);
    }
})

yargs.command({
    command: 'listall',
    describe: 'View all users information',
    handler: () => {
        datafile.listAllInfo();
    }
})

yargs.command({
    command: 'viewuser',
    describe: 'View the needed user information',
    builder: {
        userID: {
            describe: 'User id',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        datafile.viewUser(x.userID);
    }
})

yargs.command({
    command: 'viewallusers',
    describe: 'View all users information just full name and city',
    handler: () => {
        datafile.viewUsersInfo();
    }
});

yargs.command({
    command: 'deleteall',
    describe: 'Delete all users information',
    handler: () => {
        datafile.deleteAllUsers();
    }
});

yargs.command({
    command: 'deleteuser',
    describe: 'Delete certain user information',
    builder: {
        userID: {
            describe: 'User id',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        datafile.deleteUser(x.userID);
    }
});

yargs.parse();