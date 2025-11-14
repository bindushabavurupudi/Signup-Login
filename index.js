function signup(userName){
    let usernames = ["Bindusha", "Ritika", "Pranathi", "Navya", "Pravalika", "Uhanjani"];
    if(usernames.includes(userName)){
        return "User Already Registered, Please Login";
    }
    else{
        usernames.push(userName);
        return "Signup Successfull, Please Login";
    }
}

function login(userName, password){
    let usernames = ["Bindusha", "Ritika", "Pranathi", "Navya", "Pravalika", "Uhanjani"];
    for(let i=0; i<usernames.length; i++){
        if(usernames[i] === userName && password === "Emp@123"){
            return "Login Successful...";
        }
        else if(usernames[i] === userName && password !== "Emp@123"){
            return "Wrong Password....";
        }
    }
    return "User Not Found, Please Signup";

}
