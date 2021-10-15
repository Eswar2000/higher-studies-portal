package com.ncp.higherstudiesbackend.utilities;


import org.w3c.dom.Document;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.namespace.QName;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.*;

public class XMLTools {

    public static void sendXMLResponse(StringBuilder xmlResponse, PrintWriter resWriter, String rootName){
        StringBuilder xmlDocument=new StringBuilder("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        xmlDocument.append("<").append(rootName).append(">\n").append(xmlResponse).append("</").append(rootName).append(">");

        resWriter.println(xmlDocument);
    }

    public static void convertObjectToXML(Object object, Writer resWriter, String qNameLocalPart) throws JAXBException {
        JAXBContext jaxbContext=JAXBContext.newInstance(object.getClass());
        Marshaller jaxbMarshaller=jaxbContext.createMarshaller();
        jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT,Boolean.TRUE);
        jaxbMarshaller.marshal(new JAXBElement(new QName("",qNameLocalPart),Object.class,object), resWriter);

    }

    public static StringBuilder getReqBodyAsString(InputStream reqReader) throws IOException {

        BufferedReader reqBuffer=new BufferedReader(new InputStreamReader(reqReader));

        StringBuilder stringBuilder = new StringBuilder("");
        String temp=reqBuffer.readLine();

        while(temp != null && !temp.equals("")){
            stringBuilder.append(temp);
            temp=reqBuffer.readLine();
        }

        return stringBuilder;
    }

    public static XMLDocument parseXML(InputStream reqReader) throws Exception {
        StringBuilder bodyString=getReqBodyAsString(reqReader);
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bodyString.toString().getBytes("UTF-8"));


//        System.out.println(bodyString);
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        Document document=builder.parse(byteArrayInputStream);

        document.getDocumentElement().normalize();

        return new XMLDocument(document.getDocumentElement());
    }

}
