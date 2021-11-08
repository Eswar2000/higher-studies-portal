package com.ncp.higherstudiesbackend.controllers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ProfileHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req,res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/XML");
                XMLTools.sendXMLResponse(new StringBuilder("<authStatus>Authenticated</authStatus>"+ "<name>"+ProfileHandler.getAttributeFromUsername(req.getHeader("username"),"name")+"</name>"+"<pgUniversityName>"+ProfileHandler.getStudentPgUniversityName(req.getHeader("username"))+"</pgUniversityName>"),res.getWriter(),"response");
                res.setStatus(200);
            }
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }

    }

}


