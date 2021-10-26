import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
  doc
} from "@firebase/firestore";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import { db } from "../firebase";
import Moment from 'react-moment';


function Post({ id, username, usrImg, img, caption }) {

  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);


  useEffect(
    () => onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      snapshot => setComments(snapshot.docs)
    ),
    [db, id]
  );


  useEffect(
    () => onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    ),
    [db, id]
  );

  const LikePost = async (e) => {
    await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
      username: session.user.username,
    });
  };


  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className=" bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={usrImg} alt=""
          className="rounded-full obect-contain h-12 w-12 border p-1 mr-3" />
        <p className="flex-1 font-bold" >{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      <img src={img} alt=""
        className="object-cover w-full"
      />
      {/* Button */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon
              className="btn"
              onClick={LikePost}
            />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn " />
        </div>
      )}


      {/* Captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1" >{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div
          className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div
              className="flex items-center space-x-2 mb-3"
              key={comment.id}
            >
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">
                  {comment.data().username}
                </span>{" "}
                {comment.data().comment}
              </p>
              <Moment
                fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            className=" border-none flex-1 focus:ring-0 outline-none"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="add a comment..."
          />
          <button
            className="font-semibold text-blue-400"
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )
      }
    </div >
  )
}

export default Post
