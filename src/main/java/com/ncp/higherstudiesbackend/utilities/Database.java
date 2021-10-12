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


//    public static StringBuffer sampleQuery() throws SQLException, ClassNotFoundException {
//
//        ResultSet resultSet=executeQuery("select * from student");
//
//        StringBuffer resultString=new StringBuffer("");
//
//        while(resultSet.next()){
//            resultString.append(new StudentModel(resultSet.getString("name"),resultSet.getString("username"),resultSet.getString("email"),resultSet.getString("phone"),resultSet.getString("secQuestion"),resultSet.getString("secAnswer"),resultSet.getString("passwordHash"),resultSet.getString("examStream"),resultSet.getString("ugUniversity"),resultSet.getInt("examMarks"),resultSet.getInt("TOEFLMarks"),resultSet.getInt("pgUniversityID")).getStudentXML());
//        }
//
//        return resultString;
//    }

}
