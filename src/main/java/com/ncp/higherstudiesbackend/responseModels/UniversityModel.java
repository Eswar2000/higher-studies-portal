package com.ncp.higherstudiesbackend.responseModels;

public class UniversityModel {
    private int universityID;
    private String universityName, location;
    private int minGREMarks,minTOEFLMarks;
    private int acceptanceRate, tuitionFee;

    public UniversityModel(int universityID, String universityName, int acceptanceRate, String location, int minGREMarks, int tuitionFee, int minTOEFLMarks){
        this.universityID=universityID;
        this.universityName=universityName;
        this.acceptanceRate=acceptanceRate;
        this.location=location;
        this.minGREMarks=minGREMarks;
        this.tuitionFee=tuitionFee;
        this.minTOEFLMarks=minTOEFLMarks;
    }

    public StringBuilder getUniversityXML(){
        StringBuilder outputXML=new StringBuilder("");
        outputXML.append("<university>");
        outputXML.append("<id>"+this.universityID+"</id>");
        outputXML.append("<name>"+this.universityName+"</name>");
        outputXML.append("<acceptanceRate>"+this.acceptanceRate+"</acceptanceRate>");
        outputXML.append("<location>"+this.location+"</location>");
        outputXML.append("<minGREMarks>"+this.minGREMarks+"</minGREMarks>");
        outputXML.append("<tuitionFee>"+this.tuitionFee+"</tuitionFee>");
        outputXML.append("<minTOEFLMarks>"+this.minTOEFLMarks+"</minTOEFLMarks>");
        outputXML.append("</university>");

        return outputXML;
    }

}
