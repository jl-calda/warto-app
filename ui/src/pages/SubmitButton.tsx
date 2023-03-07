import { MouseEventHandler } from "react";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";

type Props = {
  label: string;
  className?: string;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};

const SubmitButton = (props: Props) => {
  return (
    <button
      type="submit"
      className={`${
        props.className ? props.className : ""
      } px-3 py-2 rounded-md flex space-x-2 items-center justify-center bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer transition duration-300`}
    >
      <>
        <span>{props.label}</span>
        <HiOutlineArrowUpOnSquare />
      </>
    </button>
  );
};

export default SubmitButton;
