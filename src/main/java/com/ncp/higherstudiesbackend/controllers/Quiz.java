package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.QuizHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "quiz-servlet",value = "/quiz")
public class Quiz extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){

        try{

            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req,res);

            if(authStatus==AuthStatus.authenticated){
                res.setContentType("application/xml");
                XMLDocument reqDocument = XMLTools.parseXML(req.getInputStream());
                if(reqDocument.getAttributeValue("query").equals("prevResult")){
                    XMLTools.sendXMLResponse(QuizHandler.getPreviousQuizResults(req.getHeader("username")),res.getWriter(),"response");
                } else if(reqDocument.getAttributeValue("query").equals("questions")){
                    XMLTools.sendXMLResponse(QuizHandler.getAllQuestions(req.getHeader("username")),res.getWriter(),"response");
                }else{
                    XMLTools.sendXMLResponse(new StringBuilder("Invalid Request! Specify query"), res.getWriter(), "response");
                }
            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }

    }

    public void doPost(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req,res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                XMLDocument reqDocument = XMLTools.parseXML(req.getInputStream());
                XMLTools.sendXMLResponse(QuizHandler.addQuestionResult(req.getHeader("username"),Integer.parseInt(reqDocument.getAttributeValue("questionID")),reqDocument.getAttributeValue("curAnswer")),res.getWriter(),"response");
            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

}
