package com.ncp.higherstudiesbackend.utilities;


import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.namespace.QName;
import java.io.PrintWriter;
import java.io.Writer;

public class XMLTools {

    public static void sendXMLResponse(StringBuffer xmlResponse, PrintWriter resWriter){
        resWriter.println(new StringBuffer("<?xml version=\"1.0\" encoding=\"UTF-8\"?>").append(xmlResponse));
    }

    public static void convertToXML(Object object, Writer resWriter, String qNameLocalPart) throws JAXBException {
        JAXBContext jaxbContext=JAXBContext.newInstance(object.getClass());
        Marshaller jaxbMarshaller=jaxbContext.createMarshaller();
        jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT,Boolean.TRUE);
        jaxbMarshaller.marshal(new JAXBElement(new QName("",qNameLocalPart),Object.class,object), resWriter);

    }

}
