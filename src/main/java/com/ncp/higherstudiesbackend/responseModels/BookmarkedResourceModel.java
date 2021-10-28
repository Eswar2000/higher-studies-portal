package com.ncp.higherstudiesbackend.responseModels;

public class BookmarkedResourceModel {
    private String resourceName, username;

    public BookmarkedResourceModel(String resourceName, String username) {
        this.resourceName = resourceName;
        this.username = username;
    }

    public StringBuilder getBookmarkedResourceXML() {
        StringBuilder outputXML = new StringBuilder("");
        outputXML.append("<bookmarkedResource>");
        outputXML.append("<resourceName>"+this.resourceName+"</resourceName>");
        outputXML.append("<username>"+this.username+"</username>");
        outputXML.append("</bookmarkedResource>");

        return outputXML;

    }
}
