"use client";

import { useEffect } from "react";

const HideCookieIconOnMobile = () => {
  useEffect(() => {
    document.body.classList.add("hide-cookie-icon-mobile");
    return () => {
      document.body.classList.remove("hide-cookie-icon-mobile");
    };
  }, []);

  return null;
};

export default HideCookieIconOnMobile;
