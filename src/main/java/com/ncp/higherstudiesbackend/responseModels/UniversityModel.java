package com.ncp.higherstudiesbackend.responseModels;

public class UniversityModel {
    public String universityName, acceptanceRate, state, minGREMarks, tuitionFee, minTOEFLMarks;

    UniversityModel(String universityName, String acceptanceRate, String state, String minGREMarks, String tuitionFee, String minTOEFLMarks){
        this.universityName=universityName;
        this.acceptanceRate=acceptanceRate;
        this.state=state;
        this.minGREMarks=minGREMarks;
        this.tuitionFee=tuitionFee;
        this.minTOEFLMarks=minTOEFLMarks;
    }

}
