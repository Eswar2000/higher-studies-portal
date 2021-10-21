
   
package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.ProfileModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProfileHandler extends Database {


    public static StringBuilder getAllProfile() throws SQLException, ClassNotFoundException {
        ResultSet resultSet=executeQuery("select * from profile");

        StringBuilder profileXML=new StringBuilder("");

        while(resultSet.next()){
            if(resultSet.getString("username").equals(req.getHeader("username")){
                profileXML.append(new ProfileModel(resultSet.getString("name"),resultSet.getString("ugUniversity"),resultSet.getString("city"),resultSet.getString("exam"),resultSet.getString("email"),resultSet.getString("phoneNumber"),resultSet.getString("securityQuestion"),resultSet.getString("securityAnswer"),resultSet.getString("username")).getProfileXML());
            }

        return profileXML;


    }
     public static boolean UpdateProfile(String name,String username,String email,String ugUniversity,String city ,String exam,String phonenumber,String securityQuestion,String securityAnswer) throws Exception {
        if(email.matches("^[A-Za-z0-9+_.-]+@(.+)$") && username.matches("^[a-zA-Z0-9_]+$")){
            return executeUpdate("insert into profile (name, ugUniversity, city, exam,phoneNumber,securityQuestion,securityAnswer,username) values (\""+name+"\", \""+ugUniversity+"\", \""+email+"\", \""+city+"\",\""+exam+"\",\""+phonenumber+"\",\""+securityQuestion+"\",\""+securityAnswer+"\",\""+username+"\");")>0?true:false;
        }
        return false;
    }


}
