package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.QuizHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "quiz-servlet",value = "/path")
public class Quiz extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){

        try{

            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req,res);

            if(authStatus==AuthStatus.authenticated){
                res.setContentType("application/xml");

                XMLTools.sendXMLResponse(QuizHandler.getAllQuestions(req.getHeader("username")),res.getWriter(),"questions");

            }


        }catch(Exception e){

        }

    }


}
