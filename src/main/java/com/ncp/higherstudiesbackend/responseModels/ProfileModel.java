package com.ncp.higherstudiesbackend.responseModels;

public class ProfileModel {
    private String name,ugUniversity,city,exam,email,phoneNumber,securityQuestion,securityAnswer,username;

    public ProfileModel(String name,String ugUniversity,String city,String exam,String email,String phoneNumber,String securityQuestion,String securityAnswer,String username){
        this.name=name;
        this.ugUniversity=ugUniversity;
        this.city=city;
        this.exam=exam;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.securityQuestion=securityQuestion;
        this.securityAnswer=securityAnswer;
        this.username=username;
    }

}
