import { useState } from "react";
import Emergency from "./Emergency";
import Hospital from "./Hospital";
import Choice from "./Choice";
import Data from "./Data";

export default function CharacterOne() {
    const [obj, setObj] = useState({
        state: 0,
        isMajor: false,
    });

    const stages = {
        "EMERGENCY": 0,
        "CHOICE": 1,
        "HOSPITAL": 2,
        "DATA": 3,
    }

    switch(obj.stage) {
        case 0:
            return <Emergency stages={stages} setObj={setObj} obj={obj} />
        case 1:
            return <Choice stages={stages} setObj={setObj}  obj={obj} />
        case 2:
            return <Hospital stages={stages} setObj={setObj} obj={obj} />
        case 3:
            return <Data stages={stages} setObj={setObj} obj={obj} />
        default:
            return <Emergency stages={stages} setObj={setObj} obj={obj} />
    }
}