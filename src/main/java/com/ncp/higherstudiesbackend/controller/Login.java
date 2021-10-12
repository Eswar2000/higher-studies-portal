package com.ncp.higherstudiesbackend.controller;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.utilities.AccountManager;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {


    public void doPost(HttpServletRequest req, HttpServletResponse res) {

        try{
            AuthStatus authStatus= AccountManager.checkCredentials(req.getHeader("username"),req.getHeader("authhash"));

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/XML");
                XMLTools.sendXMLResponse(new StringBuffer("<authStatus>Authenticated</authStatus>"),res.getWriter());
                res.setStatus(200);
            } else if (authStatus == AuthStatus.incorrectPassword){
                res.setContentType("application/XML");
                XMLTools.sendXMLResponse(new StringBuffer("<authStatus>NOT AUTHORIZED</authStatus>"),res.getWriter());
                res.setStatus(401);
            } else{
                res.setContentType("application/XML");
                XMLTools.sendXMLResponse(new StringBuffer("<authStatus>No such user</authStatus>"),res.getWriter());
                res.setStatus(404);
            }
        }catch (Exception e) {
            e.printStackTrace();
        }

    }

}


