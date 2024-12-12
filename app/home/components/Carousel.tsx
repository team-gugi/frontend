'use client';

import Image from 'next/image';
import samsung from '../../public/icons/logo_samsung.svg';
import lg from '../../public/icons/logo_lg.svg';
import lotte from '../../public/icons/logo_lotte.svg';
import SSG from '../../public/icons/logo_SSG.svg';
import kt from '../../public/icons/logo_kt.svg';
import kiwoom from '../../public/icons/logo_kiwoom.svg';
import doosan from '../../public/icons/logo_doosan.svg';
import kia from '../../public/icons/logo_kia.svg';
import nc from '../../public/icons/logo_nc.svg';
import hanwha from '../../public/icons/logo_hanhwa.svg';
import { useState, useRef } from 'react';

export default function Carousel() {
  const images = [
    { key: 'samsung', url: samsung },
    { key: 'lg', url: lg },
    { key: 'lotte', url: lotte },
    { key: 'SSG', url: SSG },
    { key: 'kt', url: kt },
    { key: 'kiwoom', url: kiwoom },
    { key: 'doosan', url: doosan },
    { key: 'kia', url: kia },
    { key: 'nc', url: nc },
    { key: 'hanwha', url: hanwha },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    containerRef.current.scrollLeft -= x - startX;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="px-24 pt-20 pb-10 gap-2">
        <span className="text-14 font-medium text-Gray">구단 바로가기</span>
        <section
          className="py-8 gap-8 items-center overflow-hidden overflow-x-auto scroll-snap-x scroll-snap-mandatory"
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          ref={containerRef}
        >
          <div
            className="flex flex-row items-center gap-10 py-8 cursor-grab transform-gpu"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
          >
            {images.map((image) => (
              <a href={`/detail/${image.key}`} key={image.key}>
                <Image
                  src={image.url}
                  alt={`구단 로고: ${image.key}`}
                  width={46}
                  height={46}
                  className="min-w-46 max-w-full"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
