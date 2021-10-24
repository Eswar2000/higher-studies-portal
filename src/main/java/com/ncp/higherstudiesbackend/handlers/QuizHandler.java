package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.QuestionModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class QuizHandler extends Database {


    public static StringBuilder getAllQuestions(String username) throws Exception{
        //TODO do JDBC call to get all questions and return to controller

        //Query: select * from quiz order by RAND() LIMIT 10 where examStream=ProfileHandler.getAttributeFromUsername

        ResultSet resultSet=executeQuery("");

        StringBuilder questionsXML = new StringBuilder("");

        while(resultSet.next()){
            ResultSet optionsResult=executeQuery("select * from options where questionID="+resultSet.getString("id"));
            List<String> options = new ArrayList<>();
            while(optionsResult.next()){
                options.add(optionsResult.getString("option"));
            }
            questionsXML.append(new QuestionModel(resultSet.getString("question"),options,resultSet.getString("answer")).getQuestionXML());
        }

         return questionsXML;
    }

}
