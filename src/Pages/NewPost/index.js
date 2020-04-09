import React, { useState } from 'react';
import postActions from '../../Redux/Actions/postActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [post, setPost] = useState({ title: '', content: '' });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActions.createPostToAPI(post));
    history.push('/posts');
  }
  return (
    <>
      <h1 className="page-header">Create New Post</h1>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
          required
        />
        <CKEditor
          editor={ClassicEditor}
          data=""
          value={post.content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPost({ ...post, content: data });
          }}
        />
        <input className="submit-button" type="submit" value="Create Post" />
      </form>
    </>
  );
}
