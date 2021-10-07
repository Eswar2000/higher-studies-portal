package com.ncp.higherstudiesbackend.responseModels;

import java.util.ArrayList;
import java.util.List;

public class LoginModel{
    public String username;
    public String password;
    public List employees;
    public int status;

    public LoginModel(String username, String password, int status){
        this.username=username;
        this.password=password;

        employees=new ArrayList();

        this.status=status;

        for(int i=0;i<5;i++){
            employees.add(i);
        }
    }

//    public StringBuffer getXMLOutput(){
//        StringBuffer output=new StringBuffer();
//
//        output.append("<?xml version='1.0' encoding='ISO-8859-1'?>\n");
//        output.append("<username>"+username+"</username>\n");
//        output.append("<password>"+password+"</password>\n");
//        return output;
//    }

}