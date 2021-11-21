package com.ncp.higherstudiesbackend.handlers;

import com.mysql.cj.jdbc.exceptions.NotUpdatable;
import com.ncp.higherstudiesbackend.responseModels.ProfileModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProfileHandler extends Database {


    public static String getAttributeFromUsername(String username, String attribute) throws SQLException, ClassNotFoundException {

        ResultSet studentProfile=executeQuery("select "+attribute+" from student where username=\""+username+"\"");

        if(studentProfile.next()){
            return studentProfile.getString(attribute);
        }

        return "";
    }

    public static String getStudentPgUniversityName(String username) throws SQLException, ClassNotFoundException {
        ResultSet universityName=executeQuery("select name from university where id="+getAttributeFromUsername(username,"pgUniversityID"));

        if(universityName.next()){
            return universityName.getString("name");
        }

        return "";
    }

    public static StringBuilder getStudentProfile(String username,boolean guestView) throws SQLException, ClassNotFoundException {
        ResultSet studentData=executeQuery("select * from student where username=\""+username+"\"");

        StringBuilder studentProfile=new StringBuilder("");

        if(studentData.next()){
            if(!guestView){
                studentProfile.append(new ProfileModel(studentData.getString("name"),studentData.getString("ugUniversity"),studentData.getString("city"),studentData.getString("examStream"),studentData.getString("email"),studentData.getString("phone"),studentData.getString("secQuestion"),studentData.getString("secAnswer"),studentData.getInt("pgUniversityID"),studentData.getInt("examMarks"),studentData.getInt("toeflMarks"),studentData.getString("username")).getProfileXML());
            }else{
                studentProfile.append(new ProfileModel(studentData.getString("name"),studentData.getString("ugUniversity"),studentData.getString("city"),studentData.getString("examStream"),studentData.getString("email"),studentData.getString("phone"),studentData.getString("secQuestion"),studentData.getString("secAnswer"),studentData.getInt("pgUniversityID"),studentData.getInt("examMarks"),studentData.getInt("toeflMarks"),studentData.getString("username")).getProfileGuestViewXML());
            }
        }

        return studentProfile;

    }




    public static boolean updateStudentProfileAttribute(String username,String fieldName, String fieldValue) throws SQLException, ClassNotFoundException {
        if(fieldName.equals("username") || fieldName.equals("passwordHash")){
            throw new NotUpdatable("Can't Update Primary Key Without Admin Access");
        }
        return executeUpdate("update student set "+fieldName+"=\""+fieldValue+"\" where username =\""+username+"\"")==1;
    }

}
