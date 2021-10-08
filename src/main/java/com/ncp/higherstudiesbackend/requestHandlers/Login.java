package com.ncp.higherstudiesbackend.requestHandlers;


import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.responseModels.LoginModel;
import com.ncp.higherstudiesbackend.utilities.Authentication;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import javax.xml.bind.JAXBException;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("application/xml");

        //TODO Do JDBC call and check credentials below instead of object creation
        LoginModel loginResponse=new LoginModel("sashank","hello",9);

        try{
            if(Authentication.checkCredentials("","") == AuthStatus.authenticated){
                XMLTools.convertToXML(loginResponse,res.getWriter(),"loginResponse");
                res.setStatus(200);
            } else if (Authentication.checkCredentials("","") == AuthStatus.incorrectPassword){
                res.setStatus(401);
            } else{
                res.setStatus(404);
            }
        }catch (JAXBException e) {
            e.printStackTrace();
        }

    }

}


