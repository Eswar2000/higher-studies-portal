package com.ncp.higherstudiesbackend.controllers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "changePasswordServlet",value = "/changePassword")
public class ChangePassword extends HttpServlet {


    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            res.setContentType("application/XML");

            XMLDocument passwordChangeRequest = XMLTools.parseXML(req.getInputStream());
            res.setStatus(200);
            XMLTools.sendXMLResponse(AccountHandler.changePassword(req.getHeader("username"),req.getHeader("authhash"),passwordChangeRequest.getAttributeValue("newHash")),res.getWriter(),"response");
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }

    }

}


