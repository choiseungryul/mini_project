import { useEffect, useRef, useState } from "react";

function AnimatedNumber({target}) {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 화면에 보일 때 감지하는 observer
    const observer = new IntersectionObserver (
      (entries) => {
        if(entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      {threshold: 0.5} // 50% 이상 보이면 실행
    );

    if(ref.current) observer.observe(ref.current);

    return () => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // 숫자 애니메이션 실행
  useEffect(() => {
    if(!visible) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if(start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, stepTime);    
    return () => clearInterval(timer);
  }, [visible, target]);

    return (
      <h2 ref={ref} className="rolling-number">
        {value.toLocaleString()}+
      </h2>
    );
  }

export default AnimatedNumber;