import { useState } from "react";
import CategoryData from "../services/CategoryApi";

export default function Category() {
  const [category, setCategory] = useState(CategoryData);
  return (
    <div className="btntabs text-end">
      {category.map((item, index) => (
        <button type="button" key={index} className="btn btn-outline-primary">
          {item.title}
        </button>
      ))}
    </div>
  );
}
