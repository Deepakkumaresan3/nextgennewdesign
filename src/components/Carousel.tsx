import React, { Children, useCallback, useEffect, useRef, useState } from 'react';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import './Carousel.css';

interface CarouselProps {
  children: React.ReactNode;
  ariaLabel: string;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const GAP = 24;

const getItemsPerView = (width: number) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const Carousel: React.FC<CarouselProps> = ({ children, ariaLabel, autoPlay = true, interval = 4500, className = '' }) => {
  const items = Children.toArray(children);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() => getItemsPerView(window.innerWidth));
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver((entries) => {
      setViewportWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => setItemsPerView(getItemsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerView));
  const maxStart = Math.max(0, items.length - itemsPerView);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = useCallback(
    (index: number) => {
      setPage(((index % pageCount) + pageCount) % pageCount);
    },
    [pageCount]
  );

  useEffect(() => {
    if (!autoPlay || isPaused || pageCount <= 1) return undefined;
    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, isPaused, pageCount]);

  const itemWidth = viewportWidth > 0 ? (viewportWidth - GAP * (itemsPerView - 1)) / itemsPerView : 0;
  const itemBasis = itemWidth > 0 ? `${itemWidth}px` : `${100 / itemsPerView}%`;
  const startIndex = Math.min(page * itemsPerView, maxStart);
  const offset = itemWidth > 0 ? startIndex * (itemWidth + GAP) : 0;

  return (
    <div
      className={`carousel ${className}`.trim()}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-track" style={{ transform: `translateX(-${offset}px)` }}>
          {items.map((child, i) => (
            <div className="carousel-item" key={i} style={{ flex: `0 0 ${itemBasis}`, width: itemBasis }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 && (
        <>
          <button type="button" className="carousel-arrow prev" onClick={() => goTo(page - 1)} aria-label="Previous">
            <ChevronLeftRoundedIcon />
          </button>
          <button type="button" className="carousel-arrow next" onClick={() => goTo(page + 1)} aria-label="Next">
            <ChevronRightRoundedIcon />
          </button>

          <div className="carousel-dots">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={`carousel-dot ${i === page ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
