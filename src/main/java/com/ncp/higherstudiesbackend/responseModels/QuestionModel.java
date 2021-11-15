package com.ncp.higherstudiesbackend.responseModels;

import java.util.List;
import java.util.Random;

public class QuestionModel {

    private String questionText;
    private List<String> options;
    private String answer;
    private int questionID;

    public QuestionModel(String questionText, List<String> options, String answer, int questionID){
        this.questionText = questionText;
        this.options=options;
        this.answer=answer;
        this.questionID=questionID;
    }

    public StringBuffer getQuestionXML(){
        StringBuffer questionXML=new StringBuffer("");

        questionXML.append("<question>");
        questionXML.append("<questionText>"+this.questionText+"</questionText>");


        Random random=new Random();

        int randomIndex=random.nextInt(options.size());

        for(int i=0;i< options.size();i++){
            if(randomIndex==i){
                questionXML.append("<option>"+this.answer+"</option>");
            }
            questionXML.append("<option>"+options.get(i)+"</option>");
        }
        questionXML.append("<questionID>"+this.questionID+"</questionID>");
        questionXML.append("</question>");

        return questionXML;

    }

}
