package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.ResourceModel;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResourceHandler extends Database {
    public static StringBuilder getAllResources() throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from resource");
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new ResourceModel(resultSet.getString("name"), resultSet.getString("author"), resultSet.getString("coverURL"), resultSet.getString("storageLocation")).getResourceXML());
        }

        return resourcesXML;
    }

    public static boolean handleCreateResource(HttpServletRequest req, HttpServletResponse res) throws Exception {
            return createResource(req.getParameter("name"), req.getParameter("author"),
                    req.getParameter("coverURL"), req.getParameter("storageLocation"));
    }

    public static boolean createResource(String resourceName, String author, String coverURL, String storageLocation) throws Exception {
        return executeUpdate("insert into resource (name, author, coverURL, storageLocation) values (\""+resourceName+"\", \""+author+"\", \""+coverURL+"\", \""+storageLocation+"\");")>0?true:false;
    }

    public static StringBuilder getResourcesByUserId(String userID) throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from resource where author="+userID);
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new ResourceModel(resultSet.getString("name"), resultSet.getString("author"), resultSet.getString("coverURL"), resultSet.getString("storageLocation")).getResourceXML());
        }

        return resourcesXML;
    }
}


