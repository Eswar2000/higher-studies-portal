package com.ncp.higherstudiesbackend.controllers;


import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "forgotPasswordServlet",value = "/forgotPassword")
public class ForgotPassword extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{
            res.setContentType("application/xml");

//            XMLDocument userResponse = XMLTools.parseXML(req.getInputStream());

            res.setStatus(200);
            XMLTools.sendXMLResponse(AccountHandler.getSecurityQuestion(req.getParameter("username")), res.getWriter(),"response");

        }catch (Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }


    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            res.setContentType("application/xml");

            XMLDocument userResponse = XMLTools.parseXML(req.getInputStream());

            res.setStatus(200);

            XMLTools.sendXMLResponse(AccountHandler.forgotPasswordSetPassword(userResponse.getAttributeValue("securityAnswer"),userResponse.getAttributeValue("username"),userResponse.getAttributeValue("newHash")),res.getWriter(),"response");
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }

    }

}


