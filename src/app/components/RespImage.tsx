type imgProps = {
  src: string;
  loading?: "eager" | "lazy";
  sizes?: string;
  priority?: boolean;
  height?: string;
  width?: string;
};

export default function RespImage(props: imgProps) {
  return (
    <img
      alt=""
      src={props.src}
      sizes={props.sizes}
      style={{
        width: props.width ?? "100%",
        height: props.height ?? "auto",
      }}
      loading={props.loading}
    />
  );
}
