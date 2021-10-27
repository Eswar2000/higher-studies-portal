package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ResourceHandler;
import com.ncp.higherstudiesbackend.handlers.UniversityHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "resourceServlet",value = "/resource")

public class Resource extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) {
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(ResourceHandler.getAllResources(), res.getWriter(), "resources");
            }
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }
    }
}
