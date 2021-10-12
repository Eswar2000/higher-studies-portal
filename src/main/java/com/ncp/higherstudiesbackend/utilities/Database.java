package com.ncp.higherstudiesbackend.utilities;

import com.ncp.higherstudiesbackend.responseModels.StudentModel;

import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Database {

    static String dbURL="jdbc:mysql://localhost:3306/higher_studies",username="root",password="sashank123";

    static ResultSet executeQuery(String query) throws  SQLException, ClassNotFoundException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(dbURL,username,password);
        Statement statement = connection.createStatement();
        return statement.executeQuery(query);
    }


    public static StringBuffer sampleQuery() throws SQLException, ClassNotFoundException {

        ResultSet result=executeQuery("select * from student");

        StringBuffer resultString=new StringBuffer("");

        while(result.next()){
            resultString.append(new StudentModel(result.getString("name"),result.getString("username"),result.getString("email"),result.getString("phone"),result.getString("secQuestion"),result.getString("secAnswer"),result.getString("passwordHash"),result.getString("examStream"),result.getString("ugUniversity"),result.getInt("examMarks"),result.getInt("TOEFLMarks"),result.getInt("pgUniversityID")).getStudentXML());
        }

        return resultString;
    }

}
