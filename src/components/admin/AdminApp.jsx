"use client"; 
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PeopleIcon from '@mui/icons-material/People';
import PostIcon from '@mui/icons-material/Book';
import CommentIcon from '@mui/icons-material/Comment';
import PhotoIcon from '@mui/icons-material/Photo';
import AlbumIcon from '@mui/icons-material/Album';
import TodoIcon from '@mui/icons-material/CheckBox';
import AdminDashboard from "./dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin dashboard={AdminDashboard} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
      icon={PeopleIcon}
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
      icon={PostIcon}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      icon={CommentIcon}
    />
    <Resource
      name="photos"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
      icon={PhotoIcon}
    />
    <Resource
      name="albums"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
      icon={AlbumIcon}
    />
    <Resource
      name="todos"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
      icon={TodoIcon}
    />
  </Admin>
);

export default AdminApp;