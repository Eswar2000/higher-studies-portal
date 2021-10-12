package com.ncp.higherstudiesbackend.controller;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.responseModels.LoginModel;
import com.ncp.higherstudiesbackend.responseModels.StudentModel;
import com.ncp.higherstudiesbackend.utilities.Authentication;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;
import javax.xml.bind.JAXBException;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {




    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {

        //TODO Do JDBC call and check credentials below instead of object creation



        try{
            if(Authentication.checkCredentials("","") == AuthStatus.authenticated){
                res.setContentType("application/xml");

                XMLTools.sendXMLResponse(Database.sampleQuery(),res.getWriter());
                res.setStatus(200);
            } else if (Authentication.checkCredentials("","") == AuthStatus.incorrectPassword){
                res.setStatus(401);
            } else{
                res.setStatus(404);
            }
        }catch (Exception e) {
            e.printStackTrace();
        }

    }

}


