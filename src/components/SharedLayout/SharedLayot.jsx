import React from "react";
import { Header } from "../../components/Header/Header";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  BodyWrapper,

} from "./SharedLayout.styled";

export const SharedLayout = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return setIsHomePage(true);
    } else setIsHomePage(false);
  }, [location]);

  return (
    <>
      <BodyWrapper>
        {isHomePage ? null : <Header />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </BodyWrapper>
    </>
  );
};
