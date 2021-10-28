package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.responseModels.BookmarkedResourceModel;
import com.ncp.higherstudiesbackend.responseModels.ResourceModel;
import com.ncp.higherstudiesbackend.utilities.Database;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BookmarkedResourceHandler extends Database {

    public static boolean createNewBookmarkedResource(String resourceID, String username) throws Exception {
        return executeUpdate("insert into bookmark (resourceID, studentUsername) values (\""+resourceID+"\", \""+username+"\");")>0;
    }


    public static StringBuilder getBookmarkedResources(String username) throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from bookmark where studentUsername=\""+username+"\"");
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new BookmarkedResourceModel(resultSet.getString("resourceID")).getBookmarkedResourceXML());
        }

        return resourcesXML;
    }
}
