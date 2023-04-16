import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Props = {
  color?: string;
  model: string;
};

function Selection({ color, model }: Props) {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const currentLine = data.filter((item) => item.model === model);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:4000/getData");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div
      className={` pb-6 pl-2.5 relative w-[200px] border border-[#999] text-[#999] rounded-lg cursor-pointer ${
        active &&
        "border-[color:var(--cx-color-primary)] text-[color:var(--cx-color-primary)] shadow"
      }`}
      onClick={() => setActive((prev) => !prev)}
    >
      <p className="legend text-[0.8rem]">Color / Design</p>
      <div className="text-white absolute inset-0 flex justify-between items-center px-5 text-[0.9rem]">
        <p>{color}</p>
        <GoChevronDown
          size={25}
          fill={"#44d62c"}
          className={`${active && "rotate-180"}`}
        />
        <div
          className={`absolute -top-28 left-0 bg-[#111] text-[#888] w-full h-fit rounded-lg border border-[#666]  ${
            active ? "" : "hidden"
          }`}
        >
          {currentLine.map((item) => (
            <p
              key={item._id}
              onClick={() => navigate("/mice/" + item._id)}
              className={`pl-4 pt-2 pb-1 cursor-pointer hover:bg-[black] rounded-lg ${
                item.color === color ? "text-white" : null
              }`}
            >
              <span>{item.color}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selection;
