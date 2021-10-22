package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.ProfileModel;
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

    public static StringBuilder getStudentProfile(String username) throws SQLException, ClassNotFoundException {
        ResultSet studentData=executeQuery("select * from student where username=\""+username+"\"");

        StringBuilder studentProfile=new StringBuilder("");

        if(studentData.next()){
            studentProfile.append(new ProfileModel(studentData.getString("name"),studentData.getString("ugUniversity"),studentData.getString("city"),studentData.getString("examStream"),studentData.getString("email"),studentData.getString("phone"),studentData.getString("secQuestion"),studentData.getString("secAnswer"),studentData.getInt("pgUniversityID"),studentData.getInt("examMarks"),studentData.getInt("toeflMarks")).getProfileXML());
        }

        return studentProfile;

    }

}
