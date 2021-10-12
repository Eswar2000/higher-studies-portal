package com.ncp.higherstudiesbackend.responseModels;

public class UniversityModel {
    public String universityName, location;
    public int minGREMarks,minTOEFLMarks;
    public double acceptanceRate, tuitionFee;

    public UniversityModel(String universityName, double acceptanceRate, String location, int minGREMarks, double tuitionFee, int minTOEFLMarks){
        this.universityName=universityName;
        this.acceptanceRate=acceptanceRate;
        this.location=location;
        this.minGREMarks=minGREMarks;
        this.tuitionFee=tuitionFee;
        this.minTOEFLMarks=minTOEFLMarks;
    }

}
