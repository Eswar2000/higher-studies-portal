package com.ncp.higherstudiesbackend.responseModels;

import java.util.List;

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

        for(int i=0;i< options.size();i++){
            questionXML.append("<option>"+options.get(i)+"</option>");
        }

        questionXML.append("<answer>"+this.answer+"</answer>");
        questionXML.append("</question>");

        return questionXML;

    }

}
