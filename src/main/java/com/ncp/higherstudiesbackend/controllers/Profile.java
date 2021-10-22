package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ProfileHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "profile-servlet", value = "/profile")
public class Profile extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus = AccountHandler.handleCredentialCheck(req,res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(ProfileHandler.getStudentProfile(req.getHeader("username")),res.getWriter(),"response");
            }

        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

}
