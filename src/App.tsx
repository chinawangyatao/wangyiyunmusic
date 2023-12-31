import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "@/router";
function App() {
  return (
    <>
      <div className={"App"}>
        <div className={"nav"}>
          <Link to={"/discover"}>发现音乐</Link>
          <Link to={"/mine"}>我的音乐</Link>
          <Link to={"/focus"}>关注</Link>
          <Link to={"/download"}>下载客户端</Link>
        </div>
      </div>

      <Suspense fallback={"loading..."}>
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </>
  );
}

export default App;
