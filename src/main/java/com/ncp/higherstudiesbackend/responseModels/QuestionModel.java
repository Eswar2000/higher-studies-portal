package com.ncp.higherstudiesbackend.responseModels;

import java.util.List;
import java.util.Random;

public class QuestionModel {

    private String questionText;
    private List<String> options;
    private String answer;

    public QuestionModel(String questionText, List<String> options, String answer){
        this.questionText = questionText;
        this.options=options;
        this.answer=answer;
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
        questionXML.append("</question>");

        return questionXML;

    }

}
