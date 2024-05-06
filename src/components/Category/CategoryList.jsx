import React from "react";
import { categoryList } from "../../constants/info";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return <div className="flex flex-row items-center justify-evenly gap-3 mt-4 font-semibold">{categoryList && categoryList.map((item) => {
    return <CategoryCard key={item.id} {...item}/>})}</div>;
};

export default CategoryList;
