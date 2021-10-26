package com.ncp.higherstudiesbackend.handlers;

import com.ncp.higherstudiesbackend.enums.PostReactionType;
import com.ncp.higherstudiesbackend.responseModels.PostModel;
import com.ncp.higherstudiesbackend.utilities.Database;

import javax.xml.transform.Result;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

public class ForumHandler extends Database {

    public static StringBuilder getAllPosts() throws SQLException, ClassNotFoundException {
        ResultSet posts=executeQuery("select * from feed");

        StringBuilder postsXML=new StringBuilder("");

        while(posts.next()){

            ResultSet reactions=executeQuery("select studentUsername,type from reaction where postID="+posts.getInt("ID"));

            List<String> upVoteUsernames=new ArrayList<>();
            List<String> downVoteUsernames=new ArrayList<>();

            while(reactions.next()){
                if(reactions.getInt("type") == 1){
                    upVoteUsernames.add(reactions.getString("studentUsername"));
                }else{
                    downVoteUsernames.add(reactions.getString("studentUsername"));
                }
            }

            postsXML.append(new PostModel(ProfileHandler.getAttributeFromUsername(posts.getString("studentUsername"),"name"),posts.getString("postDateTime"),posts.getString("post"),upVoteUsernames,downVoteUsernames).getPostXML());
        }

        return postsXML;

    }

    public static boolean createNewPost(String username, String postText) throws SQLException, ClassNotFoundException {
        String isoDateTime = ZonedDateTime.now(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT);
        return executeUpdate("insert into feed (post,postDateTime,studentUsername) values (\""+postText+"\",\""+isoDateTime+"\",\""+username+"\")")==1;
    }

    public static boolean performReaction(String username, int postID, PostReactionType postReactionType) throws SQLException, ClassNotFoundException {

        ResultSet reactionResult=executeQuery("select * from reaction where studentUsername=\""+username+"\" and postID="+postID);
        int postReaction=(postReactionType == PostReactionType.upVote)?1:-1;

        if(reactionResult.next()){
            PostReactionType databaseReaction=reactionResult.getInt("type")==1?PostReactionType.upVote:PostReactionType.downVote;
            if(databaseReaction==postReactionType){
                return executeUpdate("delete from reaction where studentUsername=\""+username+"\" and postID="+postID)==1;
            }else{
                return executeUpdate("update reaction set type="+postReaction+" where studentUsername=\""+username+"\" and postID="+postID)==1;
            }
        }

        return executeUpdate("insert into reaction values ("+postID+",\""+username+"\","+postReaction+")")==1;
    }

}
