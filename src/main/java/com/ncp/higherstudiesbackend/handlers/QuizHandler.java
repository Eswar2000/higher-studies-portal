package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.QuestionModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;
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
        executeQuery("delete from quizresults where username=\""+username+"\"");
        return questionsXML;
    }

    public static StringBuilder getPreviousQuizResults(String username) throws SQLException, ClassNotFoundException {
        ResultSet quizResult=executeQuery("select sum(iscorrect) as \"quizmarks\" from quizresults where username=\""+username+"\"");
        StringBuilder prevQuizResults = new StringBuilder("");
        if(quizResult.next()){
            prevQuizResults.append("<present>True</present>").append("<curmarks>"+quizResult.getInt("quizmarks")+"</curmarks>");
            return prevQuizResults;
        }
        prevQuizResults.append("<present>False</present>");
        return prevQuizResults;
    }


    public static StringBuilder addQuestionResult(String username, int questionID, String curAnswer) throws SQLException, ClassNotFoundException {
        ResultSet questionResult=executeQuery("select answer from questionpool where ID="+questionID);

        if(questionResult.next()){
            int isCorrect = 0;
            if(questionResult.getString("answer").equals(curAnswer)){
                isCorrect = 1;
            }
            executeUpdate("insert into quizresults values (\""+username+"\","+questionID+","+isCorrect+")");
            StringBuilder questionResponse = new StringBuilder("<isCorrect>"+isCorrect+"</isCorrect>");
            return questionResponse;
        }
        throw new SQLException("Question Not Found");
    }

}
