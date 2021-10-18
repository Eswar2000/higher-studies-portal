package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;

public class QuizHandler extends Database {


    public static void getAllQuestions(String examStream) throws Exception{
        //TODO do JDBC call to get all questions and return to controller

        ResultSet resultSet=executeQuery("");

        while(resultSet.next()){
            //TODO create question objects & get the XMLs
        }

        // return outputXML;
    }

}
