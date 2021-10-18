package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@WebServlet(name = "signupServlet",value = "/signup")

public class Signup extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        //This is the sample XML
        //<?xml version = "1.0"?>
        //<signup>
        //    <username>Sashank</username>
        //    <hello>Hello2</hello>
        //    <nhello>Not Hello</nhello>
        //</signup>

        //The parseXML uses another function getReqBodyAsString (This function does what its name says).
        //The parseXML function returns an XMLDocument object whose properties can be accessed by using the getAttributeValue function
        //Using the getAttributesList returns a NodeList which can then be iterated in case we need to traverse through a list

        try{
            XMLDocument signUpRequestXML=XMLTools.parseXML(req.getInputStream());
            PrintWriter resWriter = res.getWriter();
            res.setContentType("application/xml");
            if(AccountHandler.createUser(signUpRequestXML.getAttributeValue("name"),signUpRequestXML.getAttributeValue("username"),signUpRequestXML.getAttributeValue("email"),signUpRequestXML.getAttributeValue("passwordHash"))){
                System.out.println("User created");
                res.setStatus(200);
                XMLTools.sendXMLResponse(new StringBuilder("<status>Account Created</status>"),resWriter,"response");
            }
            else {
                res.setStatus(200);
                XMLTools.sendXMLResponse(new StringBuilder("<status>Failed To Create New User</status>"),resWriter,"response");
            }
        }catch (Exception e) {
            res.setStatus(500);
        }

    }
}

