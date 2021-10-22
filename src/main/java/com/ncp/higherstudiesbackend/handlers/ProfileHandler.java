package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProfileHandler extends Database {


    public static String getNameFromUsername(String username) throws SQLException, ClassNotFoundException {

        ResultSet studentProfile=executeQuery("select name from student where username=\""+username+"\"");

        if(studentProfile.next()){
            return studentProfile.getString("name");
        }

        return "";



    }

}
