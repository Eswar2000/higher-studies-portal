package com.ncp.higherstudiesbackend.responseModels;

public class ResourceModel {
    private String resourceName, author, coverURL, storageLocation;

    public ResourceModel(String resourceName, String author, String coverURL, String storageLocation) {
        this.resourceName = resourceName;
        this.author = author;
        this.coverURL = coverURL;
        this.storageLocation = storageLocation;
    }

    public StringBuilder getResourceXML() {
        StringBuilder outputXML = new StringBuilder("");
        outputXML.append("<resource>");
        outputXML.append("<resourceName>"+this.resourceName+"</resourceName>");
        outputXML.append("<author>"+this.author+"</author>");
        outputXML.append("<coverURL>"+this.coverURL+"</coverURL>");
        outputXML.append("<storageLocation>"+this.storageLocation+"</storageLocation>");
        outputXML.append("</resource>");

        return outputXML;

    }

}