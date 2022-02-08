import ReactMarkdown from "react-markdown";

function Image({ item }) {
  return (
    <div style={{ backgroundImage: `url('${item.image})`}}>
      <h3>{item.title}</h3>
    </div>
  );
}

function Content({ item }) {
  return (
    <div>
      <ReactMarkdown children={item.content} />
    </div>
  );
}

function CTA({ item }) {
  return <a href={item.link}>{item.title}</a>;
}

const components = {
  content: Content,
  photo: Image,
  cta: CTA
}

export default function Builder(props) {
  const Component = components[props.type];
  return <Component item={props.item} />;
}