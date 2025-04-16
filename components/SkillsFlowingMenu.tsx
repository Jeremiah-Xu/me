import React, { useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import '@/app/globals.css';

interface Skill {
  name: string;
  description: string;
  imageUrl: string;
}

interface MenuItem {
  title: string;
  color: string;
  image: string;
  skills: Skill[];
  onClick: () => void;
}

function SkillsFlowingMenu({ items }: { items: MenuItem[] }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setActiveSkill(activeSkill === title ? null : title);
  };

  return (
    <div className="menu-wrap w-full">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            onClick={() => handleItemClick(item.title)}
            isActive={activeSkill === item.title}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ title, color, image, skills, onClick, isActive }: MenuItem & { isActive: boolean }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x: number, y: number, x2: number, y2: number) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className={`text-${color}`}>{title}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="menu__item flex-1 relative" ref={itemRef}>
      <button
        className="menu__item-link w-full"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={`text-2xl font-bold text-${color}`}>
          {title}
        </span>
      </button>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
      {isActive && (
        <div className={`mt-2 p-4 rounded-lg border border-${color}/10 bg-black backdrop-blur-sm space-y-4`}>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-lg border border-${color}/10">
                {/* <div className="w-12 h-12 relative">
                  <Image src={skill.imageUrl} alt={skill.name} layout="fill" objectFit="cover" className="rounded-full" />
                </div> */}
                
                <div>
                  <h4 className="font-medium text-white">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: skill.description || '' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsFlowingMenu;