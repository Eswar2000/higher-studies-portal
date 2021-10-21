
   
package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.ProfileModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProfileHandler extends Database {


    public static StringBuilder getAllUniversities() throws SQLException, ClassNotFoundException {
        ResultSet resultSet=executeQuery("select * from profile");

        StringBuilder universitiesXML=new StringBuilder("");

        while(resultSet.next()){
            if(resultSet.getInt("id")!=1){
                universitiesXML.append(new ProfileModel(resultSet.getInt("id"), resultSet.getString("name"),resultSet.getInt("acceptanceRate"),resultSet.getString("location"),resultSet.getInt("minGREMarks"),resultSet.getInt("tuitionFee"),resultSet.getInt("minTOEFLMarks")).getUniversityXML());
            }
        }

        return universitiesXML;


    }

}
