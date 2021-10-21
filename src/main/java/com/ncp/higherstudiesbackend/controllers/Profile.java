package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ProfileHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet(name = "profileServlet",value = "/profile")

public class Profile extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(ProfileHandler.getAllProfile(),res.getWriter(),"profiles");
            }

        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }
        public void doPost(HttpServletRequest req, HttpServletResponse res) {

 
        try{
            XMLDocument signUpRequestXML=XMLTools.parseXML(req.getInputStream());
            PrintWriter resWriter = res.getWriter();
            res.setContentType("application/xml");
            if(AccountHandler.createUser(signUpRequestXML.getAttributeValue("name"),signUpRequestXML.getAttributeValue("username"),signUpRequestXML.getAttributeValue("email"),signUpRequestXML.getAttributeValue("city"),signUpRequestXML.getAttributeValue("phonemumber"))){
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
