package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ResourceHandler;
import com.ncp.higherstudiesbackend.handlers.UniversityHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
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
                XMLDocument resourceRequest=XMLTools.parseXML(req.getInputStream());

                if(resourceRequest.getAttributeValue("author").equals("all")){
                    XMLTools.sendXMLResponse(ResourceHandler.getAllResources(), res.getWriter(), "resources");
                }else{
                    XMLTools.sendXMLResponse(ResourceHandler.getResourcesByUserId(resourceRequest.getAttributeValue("author")), res.getWriter(), "resources");
                }
            }
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }
    }

    public void doPost(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus=AccountHandler.handleCredentialCheck(req,res);

            if(authStatus == AuthStatus.authenticated){

                res.setContentType("application/xml");
                XMLDocument resourceRequest=XMLTools.parseXML(req.getInputStream());
                res.setStatus(200);
                if(ResourceHandler.createResource(resourceRequest.getAttributeValue("resourceName"),resourceRequest.getAttributeValue("author"),resourceRequest.getAttributeValue("coverURL"),resourceRequest.getAttributeValue("source"))){
                    XMLTools.sendXMLResponse(new StringBuilder("Resource Added Successfully"), res.getWriter(), "resourceResponse");
                }else{
                    XMLTools.sendXMLResponse(new StringBuilder("Something went wrong"), res.getWriter(), "resourceResponse");
                }
            }

        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }


}
