package com.ncp.higherstudiesbackend.handlers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountHandler extends Database {


    public static StringBuilder changePassword(String username, String hashValue, String newHashValue) throws Exception {

        if(checkCredentials(username,hashValue) == AuthStatus.authenticated){
            if(executeUpdate("update student set passwordHash=\""+newHashValue+"\" where username=\""+username+"\"")>0){
                return new StringBuilder("Password changed successfully");
            }
            else{
                return new StringBuilder("An error occurred while changing the password");
            }
        }
        throw new Exception("Incorrect Credentials");
    }


    public static StringBuilder getSecurityQuestion(String username) throws SQLException, ClassNotFoundException {

        ResultSet queryResult = executeQuery("select secQuestion from student where username=\""+username+"\"");

        if(queryResult.next()){
            return new StringBuilder(queryResult.getString("secQuestion"));
        }

        return new StringBuilder("No such user");

    }


    public static StringBuilder forgotPasswordSetPassword(String securityAnswer, String username, String newHashValue) throws Exception {
        ResultSet resultSet=executeQuery("select secAnswer from student where username=\""+username+"\"");

        if(resultSet.next()){
            if(resultSet.getString("secAnswer").equals(securityAnswer)){
                if(executeUpdate("update student set passwordHash=\""+newHashValue+"\" where username=\""+username+"\"") > 0){
                    return new StringBuilder("Password changed successfully");
                }
                else{
                    throw new Exception("An error has occurred");
                }
            }
            else{
                throw new Exception("Incorrect Security Answer");
            }
        }
        throw new Exception("No such user");
    }

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
            return executeUpdate("insert into student (name, username, email, passwordHash,examStream) values (\""+name+"\", \""+username+"\", \""+email+"\", \""+passwordHash+"\",\"GRE\");")>0;
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
