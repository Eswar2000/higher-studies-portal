package com.ncp.higherstudiesbackend.utilities;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class XMLDocument {

    private final Element documentRoot;

    public XMLDocument(Element root){
        this.documentRoot=root;
    }

    public String getAttributeValue(String attributeName){
        return documentRoot.getElementsByTagName(attributeName).item(0).getTextContent();
    }

    public String getAttributeListIndex(String attributeName, int index){
        return documentRoot.getElementsByTagName(attributeName).item(index).getTextContent();
    }

    public NodeList getAttributesList(String attributeName){
        return documentRoot.getElementsByTagName(attributeName);
    }

    public Element getDocumentRoot(){
        return documentRoot;
    }

}
