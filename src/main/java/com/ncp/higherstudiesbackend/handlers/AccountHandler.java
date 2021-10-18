package com.ncp.higherstudiesbackend.handlers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountHandler extends Database {
    public static AuthStatus checkCredentials(String username, String hashValue) throws SQLException, ClassNotFoundException {

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
        if(email.matches("^[A-Za-z0-9+_.-]+@(.+)$") && username.matches("^[a-zA-Z0-9_]+$") && checkCredentials(username,null)==AuthStatus.noSuchUser){
            return executeUpdate("insert into student (name, username, email, passwordHash) values (\""+name+"\", \""+username+"\", \""+email+"\", \""+passwordHash+"\");")>0?true:false;
        }
        return false;
    }

    public static AuthStatus handleCredentialCheck(HttpServletRequest req, HttpServletResponse res) throws Exception {
        AuthStatus authStatus= AccountHandler.checkCredentials(req.getHeader("username"),req.getHeader("authhash"));

        if (authStatus == AuthStatus.incorrectPassword){
            res.setContentType("application/XML");
            XMLTools.sendXMLResponse(new StringBuilder("<authStatus>NOT AUTHORIZED</authStatus>"),res.getWriter(),"authorization");
            res.setStatus(401);
        } else if (authStatus == AuthStatus.noSuchUser){
            res.setContentType("application/XML");
            XMLTools.sendXMLResponse(new StringBuilder("<authStatus>No such user</authStatus>"),res.getWriter(),"authorization");
            res.setStatus(404);
        }
        return authStatus;
    }

}
