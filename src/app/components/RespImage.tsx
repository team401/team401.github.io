import Image, { StaticImageData } from "next/image";

type imgProps = {
  src: StaticImageData;
  loading?: "eager" | "lazy";
  sizes?: string;
  priority?: boolean;
};

export default function RespImage(props: imgProps) {
  return (
    <Image
      alt=""
      src={props.src}
      sizes={props.sizes}
      style={{
        width: "100%",
        height: "auto",
      }}
      loading={props.loading}
      priority={props.priority}
    />
  );
}
