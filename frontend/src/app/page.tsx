"use client";

import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  let data;
  useEffect(() => {
    axios(`http://${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/v1/main`, {
      method: "get",
    }).then((res) => {
      data = res;
    });
  }, []);
  return <div>{data}</div>;
}
