
   
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
                profileXML.append(new ProfileModel(resultSet.getString("name"),resultSet.getString("ugUniversity"),resultSet.getString("city"),resultSet.getString("exam"),resultSet.getString("email"),resultSet.getString("phoneNumber"),resultSet.getString("securityQuestion"),resultSet.getString("securityAnswer"),resultSet.getString("username")).getProfileXML());
            }

        return profileXML;


    }

}
