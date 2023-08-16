import React, { memo } from "react";
interface IProps {
  children?: React.ReactNode;
}
const Index: React.FC<IProps> = memo(() => {
  return <>focus</>;
});

export default Index;
