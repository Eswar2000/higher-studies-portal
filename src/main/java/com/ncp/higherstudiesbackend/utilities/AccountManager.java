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

    public static boolean createUser(String name,String username,String email,String passwordHash) throws Exception {
        if(checkCredentials(username,null)==AuthStatus.noSuchUser){
            executeQuery("insert into student (name, username, email, passwordHash) values (\""+name+"\", \""+username+"\", \""+email+"\", \""+passwordHash+"\")");
            return true;
        }
        return false;
    }
}
