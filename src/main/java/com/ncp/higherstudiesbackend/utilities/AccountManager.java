package com.ncp.higherstudiesbackend.utilities;


import com.ncp.higherstudiesbackend.enums.AuthStatus;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AccountManager extends Database {
    public static AuthStatus checkCredentials(String username, String hashValue) throws SQLException, ClassNotFoundException {
        //TODO Invoke JDBC call, check credentials and return AuthStatus

        ResultSet resultSet=executeQuery("select passwordHash from student where username=\""+username+"\"");

        if(resultSet.next()){
            if(resultSet.getString("passwordHash").equals(hashValue)){
                return AuthStatus.authenticated;
            }else{
                return AuthStatus.incorrectPassword;
            }
        }
        return AuthStatus.noSuchUser;
    }
}
