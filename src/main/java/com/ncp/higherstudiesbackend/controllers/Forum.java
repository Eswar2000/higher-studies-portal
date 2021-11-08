package com.ncp.higherstudiesbackend.controllers;

import com.ncp.higherstudiesbackend.enums.AuthStatus;
import com.ncp.higherstudiesbackend.enums.PostReactionType;
import com.ncp.higherstudiesbackend.handlers.AccountHandler;
import com.ncp.higherstudiesbackend.handlers.ForumHandler;
import com.ncp.higherstudiesbackend.utilities.XMLDocument;
import com.ncp.higherstudiesbackend.utilities.XMLTools;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "forum-servlet", value = "/forum")
public class Forum extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse res){

        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLTools.sendXMLResponse(ForumHandler.getAllPosts(),res.getWriter(),"response");
            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }

    }

    public void doPost(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLDocument newPost = XMLTools.parseXML(req.getInputStream());

                if(ForumHandler.createNewPost(req.getHeader("username"),newPost.getAttributeValue("postText"))){
                    XMLTools.sendXMLResponse(new StringBuilder("Created new post successfully"),res.getWriter(),"response");
                }else{
                    XMLTools.sendXMLResponse(new StringBuilder("Something went wrong"),res.getWriter(),"response");
                }

            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

    public void doPut(HttpServletRequest req, HttpServletResponse res){
        try{
            AuthStatus authStatus= AccountHandler.handleCredentialCheck(req, res);

            if(authStatus == AuthStatus.authenticated){
                res.setContentType("application/xml");
                res.setStatus(200);
                XMLDocument postReaction = XMLTools.parseXML(req.getInputStream());

                if(ForumHandler.performReaction(req.getHeader("username"),Integer.parseInt(postReaction.getAttributeValue("postID")),postReaction.getAttributeValue("reactionType").equals("downVote")?PostReactionType.downVote:PostReactionType.upVote)){
                    XMLTools.sendXMLResponse(new StringBuilder(postReaction.getAttributeValue("reactionType")+" done successfully"),res.getWriter(),"response");
                }else{
                    XMLTools.sendXMLResponse(new StringBuilder("Something went wrong"),res.getWriter(),"response");
                }

            }
        }catch(Exception e){
            res.setStatus(500);
            e.printStackTrace();
        }
    }

}
