package com.ncp.higherstudiesbackend.controllers;

import com.mysql.cj.jdbc.exceptions.NotUpdatable;
import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ProfileHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "profile-servlet", value = "/profile")
public class Profile extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{

            if(req.getParameter("user")!=null){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(ProfileHandler.getStudentProfile(req.getParameter("user"),true),res.getWriter(),"response");
                return;
            }
            AuthStatus authStatus = AccountHandler.handleCredentialCheck(req,res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                if(!(req.getParameter("attribute") == null) && !(req.getParameter("attribute").equals("")) && !req.getParameter("attribute").equals("all")){
                    XMLTools.sendXMLResponse(new StringBuilder("<attributeValue>"+ProfileHandler.getAttributeFromUsername(req.getHeader("username"),req.getParameter("attribute"))+"</attributeValue>"),res.getWriter(),"response");
                    return;
                }
                XMLTools.sendXMLResponse(ProfileHandler.getStudentProfile(req.getHeader("username"),false),res.getWriter(),"response");
            }

        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

    public void doPut(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus = AccountHandler.handleCredentialCheck(req,res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLDocument updateRequest = XMLTools.parseXML(req.getInputStream());

                try{
                    if(ProfileHandler.updateStudentProfileAttribute(req.getHeader("username"),updateRequest.getAttributeValue("fieldName"),updateRequest.getAttributeValue("fieldValue"))){
                        XMLTools.sendXMLResponse(new StringBuilder("Updated Successfully"),res.getWriter(),"response");
                    }
                    else{
                        XMLTools.sendXMLResponse(new StringBuilder("Something Went Wrong"),res.getWriter(),"response");
                    }
                }catch(NotUpdatable e){
                    res.setStatus(403);
                    XMLTools.sendXMLResponse(new StringBuilder("Unauthorized Attempt To Modify Critical Data"),res.getWriter(),"response");
                }

            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

}
