import { useState, useRef } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { v4 as uuid } from "uuid";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import InputForm from "../components/InputForm";

const Post = () => {
  const search = useRef(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [addressQuery, setAddressQuery] = useState("");
  const [postalCode, setPostalCode] = useState("");

  //HANDLERS
  const handleAddressChange = (e: any) => {
    setAddressQuery(e.target.value);
  };

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    console.log(query);
    const response = await fetch(
      `https://developers.onemap.sg/commonapi/search?searchVal=${query}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
    );
    const data = await response.json();
    const results = data.results;
    setOptions(results);
    setIsLoading(false);
  };

  //STYLES
  const labelStyle = "text-sm font-medium text-stone-700";
  const inputStyle =
    "px-3 py-2 border-1 bg-stone-100 rounded-md col-span-4 focus:outline-none focus:ring-1 focus:ring-stone-600 break-words";

  return (
    <section className="">
      <h1>Post a room</h1>
      <form className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        <div>
          <label className={labelStyle} htmlFor="images">
            <div className="h-full bg-stone-50 w-full justify-center items-center flex">
              <HiOutlineArrowUpTray className="h-20 w-20 text-stone-500" />
            </div>
          </label>
          <input
            type="file"
            id="images"
            className="hidden"
            multiple
            accept="jpeg, png, jpg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className={labelStyle} htmlFor="address">
            Post title
          </label>
          <input
            className={`${inputStyle}`}
            type="text"
            id="address"
            placeholder="Title of Post..."
          />
          <label className={labelStyle} htmlFor="address">
            Post description
          </label>
          <input
            className={`${inputStyle}`}
            type="text"
            id="address"
            placeholder="Description..."
          />
          <label className={labelStyle} htmlFor="address">
            Address
          </label>
          <input className={`${inputStyle}`} type="text" id="address" />
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-2">
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="block">
                Block No
              </label>
              <input
                className={`${inputStyle}`}
                type="text"
                id="block"
                placeholder="Block No."
                readOnly
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="postal-code">
                Postal Code
              </label>
              <input
                className={`${inputStyle}`}
                type="text"
                id="postal-code"
                readOnly
                placeholder="Postal Code"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="building">
                Building Name
              </label>
              <input
                className={`${inputStyle}`}
                type="text"
                id="building"
                placeholder="Building Name"
                readOnly
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="road">
                Road Name
              </label>
              <input
                className={`${inputStyle}`}
                type="text"
                id="road"
                placeholder="Road Name"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="address">
                Price
              </label>
              <input className={`${inputStyle}`} type="text" id="address" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className={labelStyle} htmlFor="address">
                Availability
              </label>
              <input className={`${inputStyle}`} type="date" id="address" />
            </div>
            <InputForm label="Price" type="text" id="price" input={""} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Post;
