package com.ncp.higherstudiesbackend.responseModels;

public class StudentModel {
    private String name,username,email,phoneNumber,secQuestion,secAnswer,passwordHash,examStream,ugUniversity;
    private int examMarks,toeflMarks,pgUniversityID;

    public StudentModel(String name,String username,String email,String phoneNumber,String secQuestion,String secAnswer,String passwordHash,String examStream,String ugUniversity,int examMarks,int toeflMarks,int pgUniversityID){
        this.name=name;
        this.username=username;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.secQuestion=secQuestion;
        this.secAnswer=secAnswer;
        this.passwordHash=passwordHash;
        this.examStream=examStream;
        this.ugUniversity=ugUniversity;
        this.examMarks=examMarks;
        this.toeflMarks=toeflMarks;
        this.pgUniversityID=pgUniversityID;
    }

    public StringBuffer getStudentXML(){
        StringBuffer stringBuffer=new StringBuffer("");
        stringBuffer.append("<student>");
        stringBuffer.append("<name>"+this.name+"</name>");
        stringBuffer.append("<username>"+this.username+"</username>");
        stringBuffer.append("<phoneNumber>"+this.phoneNumber+"</phoneNumber>");
        stringBuffer.append("<secQuestion>"+this.secQuestion+"</secQuestion>");
        stringBuffer.append("<secAnswer>"+this.secAnswer+"</secAnswer>");
        stringBuffer.append("<passwordHash>"+this.passwordHash+"</passwordHash>");
        stringBuffer.append("<examStream>"+this.examStream+"</examStream>");
        stringBuffer.append("<ugUniversity>"+this.ugUniversity+"</ugUniversity>");
        stringBuffer.append("<examMarks>"+this.examMarks+"</examMarks>");
        stringBuffer.append("<toeflMarks>"+this.toeflMarks+"</toeflMarks>");
        stringBuffer.append("<pgUniversityID>"+this.pgUniversityID+"</pgUniversityID>");
        stringBuffer.append("</student>");

        return stringBuffer;

    }

}
