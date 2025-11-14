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