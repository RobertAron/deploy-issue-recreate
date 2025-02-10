"use client";

import { useEffect, useState } from "react";
import { getData } from "./actions";

export function ComponentThatCallsAction() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    getData()
      .then((data) =>
        setData({
          datas:"!!!!!",
          data,
        })
      )
      .catch((err) => setData({error:"???",err}));
  }, []);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
