package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.UniversityHandler;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet(name = "universityServlet",value = "/university")

public class University extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res){
        try{
            res.setContentType("application/xml");
            res.setStatus(200);
            if(req.getParameter("includeNotAdmitted")!=null && req.getParameter("includeNotAdmitted").equals("true")){
                XMLTools.sendXMLResponse(UniversityHandler.getAllUniversities(true),res.getWriter(),"response");
                return;
            }
            XMLTools.sendXMLResponse(UniversityHandler.getAllUniversities(false),res.getWriter(),"response");
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

}
