package com.ncp.higherstudiesbackend.controllers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {


    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req,res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/XML");
                XMLTools.sendXMLResponse(new StringBuilder("<authStatus>Authenticated</authStatus>"),res.getWriter(),"authorization");
                res.setStatus(200);
            }
        }catch (Exception e) {
            e.printStackTrace();
        }

    }

}


