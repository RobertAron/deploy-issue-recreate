"use client";

import { useEffect, useState } from "react";
import { myAction } from "./action";

export function ClientThing() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    myAction().then((res) => setData(res));
  }, []);
  return <pre>{JSON.stringify({ theData: data }, null, 2)}</pre>;
}
