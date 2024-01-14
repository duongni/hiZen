import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  //icon is optional
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {" "}
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-normal">{title}</label>
    </button>
  );
};

const FeatureItem = () => {
  return <div>{title}</div>;
};
export default Button;
