import React from 'react';
import { Link } from 'react-router-dom';

function sanitize(input) {
  return input.toLowerCase();
}

function generateLink(item, kind, id) {
  switch (kind) {
    case 'users':
      return (
        <Link key={kind + id} className="user-result" to={`${kind}/${id}`}>
          <span>User</span>
          {item.username}
        </Link>
      );
    case 'posts':
      return (
        <Link key={kind + id} className="post-result" to={`${kind}/${id}`}>
          <span>Post</span>
          {item.title} <span>By</span> {item.author}
        </Link>
      );
    case 'feminists':
      return (
        <Link
          key={kind + id}
          className="feminists-result"
          to={`feminists/${id}`}
        >
          <span>Woman</span>
          {item.name}
        </Link>
      );
    default:
      return;
  }
}
///////////////////////////////
export function list(list, searchTerm) {
  //   const { list, searchTerm } = state;
  let filteredList = [];
  if (list.length) {
    list.forEach((item) => {
      //   debugger;
      if (item.username) {
        return sanitize(item.username).includes(sanitize(searchTerm))
          ? filteredList.push(generateLink(item, 'users', item.id))
          : null;
      } else if (item.title) {
        return sanitize(item.title).includes(sanitize(searchTerm))
          ? filteredList.push(generateLink(item, 'posts', item.id))
          : null;
      } else if (item.name) {
        return sanitize(item.name).includes(sanitize(searchTerm))
          ? filteredList.push(generateLink(item, 'feminists', item.id))
          : null;
      }
    });
  }
  return filteredList;
}
