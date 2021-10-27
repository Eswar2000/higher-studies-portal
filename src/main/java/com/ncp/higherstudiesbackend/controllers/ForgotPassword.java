package com.ncp.higherstudiesbackend.controllers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "forgotPasswordServlet",value = "/forgotPassword")
public class ForgotPassword extends HttpServlet {


    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            res.setContentType("application/XML");
            XMLTools.sendXMLResponse(AccountHandler.handleForgotPassword(req,res),res.getWriter(),"forgot Password");
            res.setStatus(200);
        }catch (Exception e) {
            e.printStackTrace();
        }

    }

}


