import React from "react";
import { generalKnowledgeCategory } from "../categories/GeneralKnowledgeCategory";
import CategoryRender from "../components/CategoryRender";

export default function GeneralKnowledge() {
  return <CategoryRender arrayOfCategory={generalKnowledgeCategory}/>;
}
