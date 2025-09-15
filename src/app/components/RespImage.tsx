type imgProps = {
  src: string;
  loading?: "eager" | "lazy";
  sizes?: string;
  priority?: boolean;
  height?: string;
};

export default function RespImage(props: imgProps) {
  return (
    <img
      alt=""
      src={props.src}
      sizes={props.sizes}
      style={{
        width: "100%",
        height: props.height ?? "auto",
      }}
      loading={props.loading}
    />
  );
}
