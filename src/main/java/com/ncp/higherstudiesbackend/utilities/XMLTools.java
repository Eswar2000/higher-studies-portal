package com.ncp.higherstudiesbackend.utilities;

import com.ncp.higherstudiesbackend.responseModels.LoginModel;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.namespace.QName;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

public class XMLTools {

    public static void convertToXML(Object object, Writer resWriter, String qNameLocalPart) throws JAXBException {
        JAXBContext jaxbContext=JAXBContext.newInstance(LoginModel.class);
        Marshaller jaxbMarshaller=jaxbContext.createMarshaller();
        jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT,Boolean.TRUE);
//            StringWriter sw=new StringWriter();

//        JAXBElement jaxbElement=
        jaxbMarshaller.marshal(new JAXBElement(new QName("",qNameLocalPart),Object.class,object), resWriter);

    }

}
