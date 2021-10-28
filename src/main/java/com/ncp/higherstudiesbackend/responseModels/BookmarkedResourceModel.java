package com.ncp.higherstudiesbackend.responseModels;

public class BookmarkedResourceModel {
    private String resourceName;

    public BookmarkedResourceModel(String resourceName) {
        this.resourceName = resourceName;
    }

    public StringBuilder getBookmarkedResourceXML() {
        StringBuilder outputXML = new StringBuilder("");
        outputXML.append("<resourceName>"+this.resourceName+"</resourceName>");

        return outputXML;

    }
}
