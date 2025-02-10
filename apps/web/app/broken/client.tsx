"use client";

import { useEffect, useState } from "react";
import { getData } from "./actions";

export function ComponentThatCallsAction() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    getData()
      .then((data) =>
        {
          console.log("success", data)
          return setData({
            datas: "!!!!!",
            data,
          });
        }
      )
      .catch((err) => {
        console.log('error', err)
        return setData({ error: "???", err });
      });
  }, []);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
