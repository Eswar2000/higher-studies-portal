package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.UniversityModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UniversityHandler extends Database {


    public static StringBuilder getAllUniversities(boolean includeNotAdmitted) throws SQLException, ClassNotFoundException {
        ResultSet resultSet=executeQuery("select * from university");

        StringBuilder universitiesXML=new StringBuilder("");

        while(resultSet.next()){
            if(includeNotAdmitted || resultSet.getInt("id")!=1){
                universitiesXML.append(new UniversityModel(resultSet.getInt("id"), resultSet.getString("name"),resultSet.getInt("acceptanceRate"),resultSet.getString("location"),resultSet.getInt("minGREMarks"),resultSet.getInt("tuitionFee"),resultSet.getInt("minTOEFLMarks")).getUniversityXML());
            }
        }

        return universitiesXML;


    }

}
