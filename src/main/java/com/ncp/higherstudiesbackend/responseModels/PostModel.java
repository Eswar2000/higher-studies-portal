package com.ncp.higherstudiesbackend.responseModels;

import java.util.List;

public class PostModel {
    private String postAuthorName, postDateTime, postText;
    private List upVoteIDs, downVoteIDs;

    public PostModel(String postAuthorName, String postDateTime, String postText, List upVoteIDs, List downVoteIDs){
        this.postAuthorName=postAuthorName;
        this.postDateTime=postDateTime;
        this.postText = postText;
        this.upVoteIDs=upVoteIDs;
        this.downVoteIDs=downVoteIDs;
    }

    public StringBuffer getPostXML(){
        StringBuffer postXML=new StringBuffer("");

        postXML.append("<post>");
        postXML.append("<postAuthorName>"+this.postAuthorName+"</postAuthorName>");
        postXML.append("<postDateTime>"+this.postDateTime+"</postDateTime>");
        postXML.append("<postText>"+postText+"</postText>");
        postXML.append("<reactions>");
        for(int i=0;i<upVoteIDs.size();i++){
            postXML.append("<upVoteID>"+upVoteIDs.get(i)+"</upVoteID>");
        }
        for(int i=0;i<downVoteIDs.size();i++){
            postXML.append("<downVoteID>"+downVoteIDs.get(i)+"</downVoteID>");
        }
        postXML.append("</reactions>");
        postXML.append("</post>");

        return postXML;

    }

}
