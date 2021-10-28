package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.BookmarkedResourceHandler;
import com.ncp.higherstudiesbackend.handlers.ResourceHandler;
import com.ncp.higherstudiesbackend.handlers.UniversityHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

@WebServlet(name = "bookmarkedResourceServlet",value = "/bookmark")

public class BookmarkedResource extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) {
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(BookmarkedResourceHandler.getBookmarkedResources(req.getHeader("username")), res.getWriter(), "bookmarkedResources");
            }
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }
    }

    public void doPost(HttpServletRequest req, HttpServletResponse res) {
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);
            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                PrintWriter resWriter = res.getWriter();
                XMLDocument bookmarkRequest = XMLTools.parseXML(req.getInputStream());

                if(BookmarkedResourceHandler.createNewBookmarkedResource(bookmarkRequest.getAttributeValue("resourceID"),req.getHeader("username"))) {
                    XMLTools.sendXMLResponse(new StringBuilder("<status>Resource Bookmarked</status>"),resWriter,"bookmarkedResources");
                }
                else {
                    XMLTools.sendXMLResponse(new StringBuilder("<status>Error in Bookmarking Resource</status>"),resWriter,"bookmarkedResources");
                }
            }
        }catch (Exception e) {
            res.setStatus(500);
            e.printStackTrace();
        }
    }
}
