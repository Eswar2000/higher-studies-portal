package com.ncp.higherstudiesbackend.requestHandlers;


import com.ncp.higherstudiesbackend.responseModels.LoginModel;
import com.ncp.higherstudiesbackend.utilities.ObjectToXML;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.namespace.QName;

@WebServlet(name = "loginServlet",value = "/login")
public class Login extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("application/xml");

        LoginModel loginResponse=new LoginModel("sashank","hello",9);

        PrintWriter resWriter=res.getWriter();

        try{
            ObjectToXML.convertToXML(loginResponse,resWriter,"loginResponse");
            res.setStatus(200);
        } catch (JAXBException e) {
            e.printStackTrace();
        }

//        resWriter.println(loginResponse.getXMLOutput());

    }

}


