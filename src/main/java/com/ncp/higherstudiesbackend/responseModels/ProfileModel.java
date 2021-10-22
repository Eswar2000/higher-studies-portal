package com.ncp.higherstudiesbackend.responseModels;

public class ProfileModel {
    private String name,ugUniversity,city, examStream,email,phoneNumber,securityQuestion,securityAnswer;
    private int pgUniversityID;
    private int examMarks, toeflMarks;

    public ProfileModel(String name, String ugUniversity, String city, String examStream, String email, String phoneNumber, String securityQuestion, String securityAnswer, int pgUniversityID, int examMarks, int toeflMarks){
        this.name=name;
        this.ugUniversity=ugUniversity;
        this.city=city;
        this.examStream = examStream;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.securityQuestion=securityQuestion;
        this.securityAnswer=securityAnswer;
        this.pgUniversityID=pgUniversityID;
        this.examMarks=examMarks;
        this.toeflMarks=toeflMarks;
    }

    public StringBuffer getProfileXML(){
        StringBuffer profileXML=new StringBuffer("");

        profileXML.append("<studentProfile>");
        profileXML.append("<name>"+this.name+"</name>");
        profileXML.append("<ugUniversity>"+this.ugUniversity+"</ugUniversity>");
        profileXML.append("<city>"+this.city+"</city>");
        profileXML.append("<examStream>"+this.examStream +"</examStream>");
        profileXML.append("<email>"+this.email+"</email>");
        profileXML.append("<phoneNumber>"+this.phoneNumber+"</phoneNumber>");
        profileXML.append("<securityQuestion>"+this.securityQuestion+"</securityQuestion>");
        profileXML.append("<securityAnswer>"+this.securityAnswer+"</securityAnswer>");
        profileXML.append("<pgUniversityID>"+this.pgUniversityID+"</pgUniversityID>");
        profileXML.append("<examMarks>"+this.examMarks+"</examMarks>");
        profileXML.append("<toeflMarks>"+this.toeflMarks+"</toeflMarks>");
        profileXML.append("</studentProfile>");

        return profileXML;
    }

}
