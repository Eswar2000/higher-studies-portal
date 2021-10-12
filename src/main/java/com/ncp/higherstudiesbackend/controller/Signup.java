package com.ncp.higherstudiesbackend.controller;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.utilities.AccountManager;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "signupServlet",value = "/signup")

public class Signup extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res) {
        try{

        }catch (Exception e) {
            e.printStackTrace();
        }

    }
}
