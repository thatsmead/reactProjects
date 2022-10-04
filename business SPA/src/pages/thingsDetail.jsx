import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import classes from "./thingsDetail.module.css";
import Card from "../components/UI/Card";

const DUMMY_THINGS = [
  {
    id: "first-thing",
    title: "First thing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Aenean at viverra augue, at porttitor arcu. Vestibulum ante mi, luctus sit amet mattis non, fringilla in eros. Pellentesque ut magna rhoncus, semper diam ac, consectetur purus.",
  },
  {
    id: "second-thing",
    title: "Second thing",
    text: "Aenean eros diam, eleifend ac finibus vel, aliquet egestas lectus. Phasellus vestibulum enim vel quam auctor, vitae ornare ipsum facilisis. Nulla dui sapien, aliquam nec nibh non, sagittis bibendum turpis. Mauris ut risus tellus. Mauris facilisis faucibus quam a interdum. Quisque mauris enim, viverra et blandit placerat, fringilla non orci. Maecenas eget mauris posuere ex aliquet cursus vel ac urna.",
  },
  {
    id: "third-thing",
    title: "Third thing",
    text: "Quisque augue augue, dapibus vel dolor commodo, congue maximus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas id dolor ornare, congue arcu ut, lacinia odio. Nulla eu scelerisque magna, non tristique nulla. Pellentesque condimentum felis sit amet pellentesque pulvinar. Quisque eu neque aliquet, venenatis mi venenatis, tincidunt sapien.",
  },
  {
    id: "fourth-thing",
    title: "Fourth thing",
    text: "Nunc diam nibh, ornare a dolor eget, viverra euismod tellus. Phasellus tincidunt iaculis lorem et consectetur. Donec vitae porta eros. Aliquam et efficitur erat. Maecenas nec turpis ultrices, faucibus diam at, vulputate sapien. Nam eu ex vitae nibh dignissim dapibus et eu purus. Fusce pharetra dui sapien. Fusce ac blandit neque. Praesent in nulla eget diam scelerisque rhoncus. Aenean auctor volutpat congue.",
  },
];

function ThingsDetail() {
  const params = useParams();

  const theThing = DUMMY_THINGS.find((thing) => thing.id === params.thingId);
  if (!theThing) {
    return <NotFound />;
  }

  return (
    <Card>
      <h1 className={classes.detailTitle}>{theThing.title}</h1>
      <p className={classes.detailText}>{theThing.text}</p>
    </Card>
  );
}

export default ThingsDetail;
