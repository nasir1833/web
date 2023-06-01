import React from "react";
import { computerCategory } from "../categories/ComputerCategories";
import CategoryRender from "../components/CategoryRender";

export default function Computer() {
  return (
    <>
      <CategoryRender arrayOfCategory={computerCategory} />
    </>
  );
}
