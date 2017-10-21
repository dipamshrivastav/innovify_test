/**
 * Created by Admin on 10/20/2017.
 */

app.service("UserService", ["$q", "$filter", function($q, $filter){
    //user model
    this.usersData = [{id:1, name: 'Dipam', email:"dipam@gmail.com", phone:8181818181, city:"Vapi"}];

    //getUsers used to get list of users
    this.getUsers = function(){
        return this.usersData;
    }

    /*get used to get existing user by id
    Args:-
        id: user id
     */
    this.get = function(id){
        var user = $filter("filter")(this.usersData, {id:id})[0];
        return user;
    }

    /*create is used to add new user in user list
     Args:-
     user: user object
     */
    this.create = function(user){
        var lastUser = this.usersData[this.usersData.length-1];
        user.id = lastUser ? (lastUser.id + 1) : 1;
        this.usersData.push(user);
        return true;
    }

    /*update is used to update existing user from user list
     Args:-
     id: existing user's id
     user: new user object
     */
    this.update = function(id, user){
        var existingUser = this.get(id);
        if (existingUser) {
            this.usersData[this.usersData.indexOf(existingUser)] = user;
            return true;
        }
        return false;
    }

    /*delete is used to delete existing user from user list
     Args:-
     id: existing user's id
     */
    this.delete = function(id){
        var existingUser = this.get(id);
        if (existingUser) {
            this.usersData.splice(this.usersData.indexOf(existingUser), 1);
            return true;
        }
        return false;
    }
}]);
