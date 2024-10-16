import ProgressBar from "../../components/elements/bar/ProgressBar";
import TextCard from "../../components/elements/card/TextCard";
import QuizNavigationPartial from "../../components/partials/QuizNavigationPartial";
import { useEffect, useRef, useState } from "react";

const ThirdQuizQuestionPage = () => {
  const percentage = 100;
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState(null);
  const [color, setColor] = useState(null);
  const [connectedLines, setConnectedLines] = useState([]);

  const drawLine = (ctx, x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();
  };

  const renderAllLines = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    connectedLines.forEach(line => {
      drawLine(ctx, line.x1, line.y1, line.x2, line.y2, line.color);
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging && startPoint && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const rect = startPoint.getBoundingClientRect();

      const x1 = rect.left + rect.width / 2 - canvasRect.left;
      const y1 = rect.top + rect.height / 2 - canvasRect.top;
      const x2 = event.clientX - canvasRect.left;
      const y2 = event.clientY - canvasRect.top;

      renderAllLines(ctx);
      drawLine(ctx, x1, y1, x2, y2, color);
    }
  };

  const handleMouseUp = (event) => {
    if (isDragging && startPoint && canvasRef.current) {
      console.log('ok')
      const ctx = canvasRef.current.getContext('2d');
      setIsDragging(false);

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const endPoints = document.querySelectorAll('.end-point');
      let connected = false;

      endPoints.forEach(endPoint => {
        const rect = endPoint.getBoundingClientRect();
        const distX = Math.abs(rect.left + rect.width / 2 - event.clientX);
        const distY = Math.abs(rect.top + rect.height / 2 - event.clientY);

        if (distX < 30 && distY < 30 && endPoint.getAttribute('data-color') === color) {
          const x1 = startPoint.getBoundingClientRect().left + startPoint.getBoundingClientRect().width / 2 - canvasRect.left;
          const y1 = startPoint.getBoundingClientRect().top + startPoint.getBoundingClientRect().height / 2 - canvasRect.top;
          const x2 = rect.left + rect.width / 2 - canvasRect.left;
          const y2 = rect.top + rect.height / 2 - canvasRect.top;

          setConnectedLines(prevLines => [...prevLines, { x1, y1, x2, y2, color }]);
          connected = true;

          endPoint.setAttribute('data-connected', 'true');
          startPoint.setAttribute('data-connected', 'true');
        }
      });

      if (!connected) {
        renderAllLines(ctx);
      }
    }
  };

  const handleMouseDown = (event, point) => {
    if (point.getAttribute('data-connected') === 'true') {
      return;
    }
    setIsDragging(true);
    setStartPoint(point);
    setColor(point.getAttribute('data-color'));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    document.querySelectorAll('.start-point').forEach(point => {
      point.addEventListener('mousedown', (e) => handleMouseDown(e, point));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('.start-point').forEach(e => {
        e.removeEventListener('mousedown', handleMouseDown);
      });
    };
  }, [isDragging, startPoint, color, connectedLines]);

  return (
    <div className="relative h-screen w-full flex justify-center flex-col items-center">
      <QuizNavigationPartial link="/quiz/3" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%]">
        <div className="flex justify-center gap-2 flex-col">
          <p className={`font-semibold ${percentage == 100 ? 'text-primary' : 'text-darkText'}`}>{Math.floor(percentage)}{percentage == 100 ? '% siap lanjut menjelajah!' : '% menuju penuh!'}</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="relative w-[90%] h-[50vh] border-2 border-white flex justify-between items-center mx-auto">
      {/* Titik awal kabel */}
      <div className="start-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-red-500 left-[2%] top-[20%]" data-color="red"></div>
      <div className="start-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-blue-500 left-[2%] top-[40%]" data-color="blue"></div>
      <div className="start-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-yellow-500 left-[2%] top-[60%]" data-color="yellow"></div>

      {/* Titik akhir kabel */}
      <div className="end-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-red-500 right-[2%] top-[20%]" data-color="red"></div>
      <div className="end-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-blue-500 right-[2%] top-[40%]" data-color="blue"></div>
      <div className="end-point h-[3rem] w-[3rem] rounded-full absolute border-2 border-white bg-yellow-500 right-[2%] top-[60%]" data-color="yellow"></div>

      {/* Canvas untuk menggambar kabel */}
      <canvas id="canvas" ref={canvasRef} className="absolute w-full h-full top-0 left-0"></canvas>
    </div>
      <div className="flex flex-col items-center text-center justify-center gap-6 w-[60%]">
        <div className="text-3xl font-bold text-darkText">Cocokkan uangmu!</div>
        <ul className="flex gap-5">
            <li className="cursor-pointer">
              <TextCard>Langsung mengambil</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>Membayar dengan uang</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>Meminta pada orang lain</TextCard>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default ThirdQuizQuestionPage;