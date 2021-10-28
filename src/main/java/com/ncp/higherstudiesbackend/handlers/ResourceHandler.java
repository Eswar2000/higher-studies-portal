package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.ResourceModel;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.xml.transform.Result;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResourceHandler extends Database {
    public static StringBuilder getAllResources() throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from resource");
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new ResourceModel(resultSet.getInt("ID"), resultSet.getString("name"), resultSet.getString("author"), resultSet.getString("coverURL"), resultSet.getString("source")).getResourceXML());
        }

        return resourcesXML;
    }

    public static boolean createResource(String resourceName, String author, String coverURL, String source) throws Exception {
        return executeUpdate("insert into resource (name, author, coverURL, source) values (\""+resourceName+"\", \""+author+"\", \""+coverURL+"\", \""+source+"\");")>0;
    }

    public static StringBuilder getResourcesByUserId(String author) throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from resource where author=\""+author+"\"");
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new ResourceModel(resultSet.getInt("ID"), resultSet.getString("name"), resultSet.getString("author"), resultSet.getString("coverURL"), resultSet.getString("source")).getResourceXML());
        }

        return resourcesXML;
    }
}


