import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div
      data-aos="zoom-in-up">
      <h1 className="text-center" >This is a About Page</h1>
    </div>
  );
}
