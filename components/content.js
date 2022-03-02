import styles from "../styles/components/content.module.css";
import ReactMarkdown from "react-markdown";

function Image({ item }) {
  return (
    <div className={styles.image} style={{ backgroundImage: `url('${item.image}')`}}>
      {item.text ? <h3>{item.text}</h3> :  <></> }
    </div>
  );
}

function Text({ item }) {
  return (
    <div>
      <ReactMarkdown children={item.text} />
    </div>
  );
}

function CTA({ item }) {
  return <a href={item.link}>{item.text}</a>;
}

const components = {
  text: Text,
  photo: Image,
  cta: CTA
}

export default function Content(props) {
  const Component = components[props.type];
  return <Component item={props.item} />;
}