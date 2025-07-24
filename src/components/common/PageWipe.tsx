import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageWipe.css'; // tiny CSS file below

export default function PageWipe() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 1) mount wipe instantly
    setShow(true);

    // 2) remove it after animation finishes
    const t = setTimeout(() => setShow(false), 700); // <— duration

    return () => clearTimeout(t);
  }, [location.pathname]); // 🔁 re-run on every route change

  return show ? <div className="page-wipe" /> : null;
}