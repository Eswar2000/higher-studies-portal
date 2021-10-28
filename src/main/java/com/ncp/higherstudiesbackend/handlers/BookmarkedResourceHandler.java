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

    public static boolean createNewBookmarkedResourceHandler(HttpServletRequest req, HttpServletResponse res) throws Exception {
        return createNewBookmarkedResource(req.getParameter("resourceName"), req.getHeader("username"));
    }

    public static boolean createNewBookmarkedResource(String resourceName, String username) throws Exception {
        return executeUpdate("insert into bookmarkedResource (resourceName, username) values (\""+resourceName+"\", \""+username+"\");")>0?true:false;
    }


    public static StringBuilder getBookmarkedResources(String username) throws SQLException, ClassNotFoundException {
        ResultSet resultSet = executeQuery("select * from bookmarkedResource where username=\""+username+"\"");
        StringBuilder resourcesXML = new StringBuilder("");

        while(resultSet.next()) {
            resourcesXML.append(new BookmarkedResourceModel(resultSet.getString("resourceName"), resultSet.getString("username")).getBookmarkedResourceXML());
        }

        return resourcesXML;
    }
}
