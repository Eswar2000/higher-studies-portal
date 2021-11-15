package com.ncp.higherstudiesbackend.utilities;
import java.sql.*;

public class Database {

    static String dbURL="jdbc:mysql://localhost:3306/higher_studies",username="root",password="pieceofshit";

    protected static ResultSet executeQuery(String query) throws  SQLException, ClassNotFoundException{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(dbURL,username,password);
        Statement statement = connection.createStatement();
        return statement.executeQuery(query);
    }

    protected static int executeUpdate(String query) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection=DriverManager.getConnection(dbURL,username,password);
        Statement statement = connection.createStatement();
        return statement.executeUpdate(query);
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
