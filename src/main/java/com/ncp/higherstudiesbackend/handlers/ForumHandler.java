package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.enums.PostReactionType;
import com.ncp.higherstudiesbackend.responseModels.PostModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ForumHandler extends Database {

    public static StringBuilder getAllPosts() throws SQLException, ClassNotFoundException {
        ResultSet posts=executeQuery("");

        StringBuilder postsXML=new StringBuilder("");

        while(posts.next()){
//            postsXML.append(new PostModel(ProfileHandler.getNameFromUsername(posts.getString("postUsername")),posts.getString("postDateTime"),posts.getString("post"),upvotesList,downVotesList));
        }

        return postsXML;


    }

    public static boolean createNewPost(String username, String postText) throws SQLException, ClassNotFoundException {
        return executeUpdate("")==1;
    }

    public static boolean performReaction(String username, String postID, PostReactionType postReactionType) throws SQLException, ClassNotFoundException {
        return executeUpdate("")==1;
    }

}
