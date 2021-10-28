package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.QuestionModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class QuizHandler extends Database {


    public static StringBuilder getAllQuestions(String username) throws Exception{

        ResultSet resultSet=executeQuery("select * from questionpool where examStream=\""+ProfileHandler.getAttributeFromUsername(username,"examStream")+"\" order by RAND() LIMIT 10");

        StringBuilder questionsXML = new StringBuilder("");

        while(resultSet.next()){
            ResultSet optionsResult=executeQuery("select * from choice where qID="+resultSet.getString("ID")+" order by RAND() LIMIT 3");
            List<String> options = new ArrayList<>();
            while(optionsResult.next()){
                options.add(optionsResult.getString("opt"));
            }
            questionsXML.append(new QuestionModel(resultSet.getString("question"),options,resultSet.getString("answer")).getQuestionXML());
        }
        executeUpdate("delete from quiz where studentUsername=\""+username+"\"");
        return questionsXML;
    }

    public static StringBuilder getPreviousQuizResults(String username) throws SQLException, ClassNotFoundException {
        ResultSet quizResult=executeQuery("select sum(iscorrect) as \"quizmarks\",count(*) as \"questionsAttended\" from quiz where studentUsername=\""+username+"\"");
        StringBuilder prevQuizResults = new StringBuilder("");
        if(quizResult.next() && quizResult.getInt("questionsAttended") > 0){
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
            ResultSet prevResult=executeQuery("select * from quiz where studentUsername=\""+username+"\" and qID="+questionID);

            if(prevResult.next()){
                executeUpdate("update quiz set isCorrect= "+isCorrect+" where studentUsername=\""+username+"\" and qID="+questionID);
            }else {
                executeUpdate("insert into quiz values (\""+username+"\","+questionID+","+isCorrect+")");
            }
            StringBuilder questionResponse = new StringBuilder("<isCorrect>"+isCorrect+"</isCorrect>");
            return questionResponse;
        }
        throw new SQLException("Question Not Found");
    }

}
