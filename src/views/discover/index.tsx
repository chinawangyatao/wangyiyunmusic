import React, { memo, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { changeCount } from "@/store/modules/demo";

interface IProps {
  children?: React.ReactNode;
}

const Index: React.FC<IProps> = memo(() => {
  const dispatch = useDispatch();
  const { count } = useSelector((res: IRootState) => {
    return {
      count: res.counter.count,
    };
  }, shallowEqual);
  return (
    <>
      <div>
        <div>discover</div>

        <div>{count}</div>
        <button
          onClick={() => {
            dispatch(changeCount(count - 1));
          }}
        >
          修改
        </button>
        <Link to={"/discover/recommend"}>推荐</Link>
        <Link to={"/discover/ranking"}>排行榜</Link>
        <Link to={"/discover/songs"}>歌单</Link>
        <Link to={"/discover/djradio"}>主播电台</Link>
        <Link to={"/discover/songs"}>歌手</Link>
        <Link to={"/discover/album"}>新碟上架</Link>
      </div>
      <Suspense fallback={""}>
        <Outlet />
      </Suspense>
    </>
  );
});

export default Index;
