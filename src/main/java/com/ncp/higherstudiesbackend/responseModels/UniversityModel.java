package com.ncp.higherstudiesbackend.responseModels;

public class UniversityModel {
    private int universityID;
    private String universityName, location, siteURL;
    private int minGREMarks,minTOEFLMarks;
    private int acceptanceRate, tuitionFee;

    public UniversityModel(int universityID, String universityName, int acceptanceRate, String location, int minGREMarks, int tuitionFee, int minTOEFLMarks, String siteURL){
        this.universityID=universityID;
        this.universityName=universityName;
        this.acceptanceRate=acceptanceRate;
        this.location=location;
        this.minGREMarks=minGREMarks;
        this.tuitionFee=tuitionFee;
        this.minTOEFLMarks=minTOEFLMarks;
        this.siteURL=siteURL;
    }

    public StringBuilder getUniversityXML(){

        StringBuilder universityXML=new StringBuilder("");
        universityXML.append("<university>");
        universityXML.append("<id>"+this.universityID+"</id>");
        universityXML.append("<name>"+this.universityName+"</name>");
        universityXML.append("<acceptanceRate>"+this.acceptanceRate+"</acceptanceRate>");
        universityXML.append("<location>"+this.location+"</location>");
        universityXML.append("<minGREMarks>"+this.minGREMarks+"</minGREMarks>");
        universityXML.append("<tuitionFee>"+this.tuitionFee+"</tuitionFee>");
        universityXML.append("<minTOEFLMarks>"+this.minTOEFLMarks+"</minTOEFLMarks>");
        universityXML.append("<siteURL>"+this.siteURL+"</siteURL>");
        universityXML.append("</university>");

        return universityXML;
    }

}
