package com.ncp.higherstudiesbackend.handlers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountHandler extends Database {

    public static String handleChangePassword(HttpServletRequest req, HttpServletResponse res) throws Exception{
        return changePassword(req.getHeader("username"), req.getHeader("hashValue"), req.getHeader("newHashValue"));
    }

    public static String changePassword(String username, String hashValue, String newHashValue) throws SQLException, ClassNotFoundException {

        ResultSet resultSet=executeQuery("select passwordHash from student where username=\""+username+"\"");

        if(resultSet.next()){
            if(resultSet.getString("passwordHash").equals(hashValue)){
                int res = executeUpdate("update student set passwordHash=\""+newHashValue+"\" where username=\""+username+"\"");
                if(res){
                    return "Password changed successfully";
                }
                else{
                    return "error";
                }
            }else{
                return "incorrect credentials";
            }
        }
        return AuthStatus.noSuchUser;
    }

    public static String handleForgotPassword(HttpServletRequest req, HttpServletResponse res) throws Exception{
        return forgotPassword(req.getHeader("securityAnswer"), req.getHeader("username"), req.getHeader("newHashValue"));
    }

    public static String forgotPassword(String securityAnswer, String username, String newHashValue) throws SQLException, ClassNotFoundException{
        ResultSet resultSet=executeQuery("select secAnswer from student where username=\""+username+"\"");
            if(resultSet.next()){
            if(resultSet.getString("secAnswer").equals(securityAnswer)){
                int res = executeUpdate("update student set passwordHash=\""+newHashValue+"\" where username=\""+username+"\"");
                if(res){
                    return "Password changed successfully";
                }
                else{
                    return "error";
                }
            }
            else{
                return "Incorrect Security Answer";
            }
        }
        return AuthStatus.noSuchUser;
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
            return executeUpdate("insert into student (name, username, email, passwordHash) values (\""+name+"\", \""+username+"\", \""+email+"\", \""+passwordHash+"\");")>0;
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
