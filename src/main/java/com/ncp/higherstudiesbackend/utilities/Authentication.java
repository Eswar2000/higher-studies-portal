package com.ncp.higherstudiesbackend.utilities;


import com.ncp.higherstudiesbackend.enums.AuthStatus;

public class Authentication {
    public static AuthStatus checkCredentials(String username, String hashValue){
        //TODO Invoke JDBC call, check credentials and return bool
        return AuthStatus.authenticated;
    }
}
