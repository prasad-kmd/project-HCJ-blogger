import { r, j as n, c2 as A, g as b, B as M } from "https://www.reactbits.dev/assets/index-DNYnb78v.js";
import { T as O, P, a as B, C as D, b as G } from "https://www.reactbits.dev/assets/PropTable-BJA3at5K.js";
import { u as _ } from "https://www.reactbits.dev/assets/useForceRerender-D3ukqnMi.js";
import { C as F } from "https://www.reactbits.dev/assets/Customize-Ddje7XkC.js";
import { P as N } from "https://www.reactbits.dev/assets/PreviewSelect-CTH1vtpV.js";
import { D as U } from "https://www.reactbits.dev/assets/Dependencies-ChngNZXI.js";
import { l as T } from "https://www.reactbits.dev/assets/reactbits-gh-white-CqQws3wJ.js";
import { l as V } from "https://www.reactbits.dev/assets/reactbits-gh-black-Jf969WKW.js";
import "https://www.reactbits.dev/assets/index-CnVdu7zC.js";
import "https://www.reactbits.dev/assets/field-BJFV3dKX.js";
const q = ({
    logo: h,
    logoAlt: m = "Logo",
    items: p,
    className: g = "",
    ease: d = "power3.out",
    baseColor: x = "#fff",
    menuColor: f,
    buttonBgColor: y,
    buttonTextColor: u,
  }) => {
    const [R, o] = r.useState(!1),
      [l, i] = r.useState(!1),
      v = r.useRef(null),
      E = r.useRef([]),
      s = r.useRef(null),
      k = () => {
        const e = v.current;
        if (!e) return 260;
        if (window.matchMedia("(max-width: 768px)").matches) {
          const t = e.querySelector(".card-nav-content");
          if (t) {
            const c = t.style.visibility,
              w = t.style.pointerEvents,
              j = t.style.position,
              $ = t.style.height;
            (t.style.visibility = "visible"),
              (t.style.pointerEvents = "auto"),
              (t.style.position = "static"),
              (t.style.height = "auto"),
              t.offsetHeight;
            const I = 60,
              z = 16,
              S = t.scrollHeight;
            return (
              (t.style.visibility = c),
              (t.style.pointerEvents = w),
              (t.style.position = j),
              (t.style.height = $),
              I + S + z
            );
          }
        }
        return 260;
      },
      C = () => {
        const e = v.current;
        if (!e) return null;
        b.set(e, { height: 60, overflow: "hidden" }),
          b.set(E.current, { y: 50, opacity: 0 });
        const a = b.timeline({ paused: !0 });
        return (
          a.to(e, { height: k, duration: 0.4, ease: d }),
          a.to(
            E.current,
            { y: 0, opacity: 1, duration: 0.4, ease: d, stagger: 0.08 },
            "-=0.1"
          ),
          a
        );
      };
    r.useLayoutEffect(() => {
      const e = C();
      return (
        (s.current = e),
        () => {
          e == null || e.kill(), (s.current = null);
        }
      );
    }, [d, p]),
      r.useLayoutEffect(() => {
        const e = () => {
          if (s.current)
            if (l) {
              const a = k();
              b.set(v.current, { height: a }), s.current.kill();
              const t = C();
              t && (t.progress(1), (s.current = t));
            } else {
              s.current.kill();
              const a = C();
              a && (s.current = a);
            }
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, [l]);
    const H = () => {
        const e = s.current;
        e &&
          (l
            ? (o(!1),
              e.eventCallback("onReverseComplete", () => i(!1)),
              e.reverse())
            : (o(!0), i(!0), e.play(0)));
      },
      L = (e) => (a) => {
        a && (E.current[e] = a);
      };
    return n.jsx("div", {
      className: `card-nav-container ${g}`,
      children: n.jsxs("nav", {
        ref: v,
        className: `card-nav ${l ? "open" : ""}`,
        style: { backgroundColor: x },
        children: [
          n.jsxs("div", {
            className: "card-nav-top",
            children: [
              n.jsxs("div", {
                className: `hamburger-menu ${R ? "open" : ""}`,
                onClick: H,
                role: "button",
                "aria-label": l ? "Close menu" : "Open menu",
                tabIndex: 0,
                style: { color: f || "#000" },
                children: [
                  n.jsx("div", { className: "hamburger-line" }),
                  n.jsx("div", { className: "hamburger-line" }),
                ],
              }),
              n.jsx("div", {
                className: "logo-container",
                children: n.jsx("img", { src: h, alt: m, className: "logo" }),
              }),
              n.jsx("button", {
                type: "button",
                className: "card-nav-cta-button",
                style: { backgroundColor: y, color: u },
                children: "Get Started",
              }),
            ],
          }),
          n.jsx("div", {
            className: "card-nav-content",
            "aria-hidden": !l,
            children: (p || []).slice(0, 3).map((e, a) => {
              var t;
              return n.jsxs(
                "div",
                {
                  className: "nav-card",
                  ref: L(a),
                  style: { backgroundColor: e.bgColor, color: e.textColor },
                  children: [
                    n.jsx("div", {
                      className: "nav-card-label",
                      children: e.label,
                    }),
                    n.jsx("div", {
                      className: "nav-card-links",
                      children:
                        (t = e.links) == null
                          ? void 0
                          : t.map((c, w) =>
                              n.jsxs(
                                "a",
                                {
                                  className: "nav-card-link",
                                  href: c.href,
                                  "aria-label": c.ariaLabel,
                                  children: [
                                    n.jsx(A, {
                                      className: "nav-card-link-icon",
                                      "aria-hidden": "true",
                                    }),
                                    c.label,
                                  ],
                                },
                                `${c.label}-${w}`
                              )
                            ),
                    }),
                  ],
                },
                `${e.label}-${a}`
              );
            }),
          }),
        ],
      }),
    });
  },
  Y = `import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={\`card-nav-container \${className}\`}>
      <nav ref={navRef} className={\`card-nav \${isExpanded ? 'open' : ''}\`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={\`hamburger-menu \${isHamburgerOpen ? 'open' : ''}\`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <img src={logo} alt={logoAlt} className="logo" />
          </div>

          <button
            type="button"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={\`\${item.label}-\${idx}\`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a key={\`\${lnk.label}-\${i}\`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel}>
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
`,
  W = `.card-nav-container {
  position: absolute;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  z-index: 99;
  box-sizing: border-box;
}

.card-nav {
  display: block;
  height: 60px;
  padding: 0;
  background-color: white;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  will-change: height;
}

.card-nav-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.45rem 0.55rem 1.1rem;
  z-index: 2;
}

.hamburger-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 6px;
}

.hamburger-menu:hover .hamburger-line {
  opacity: 0.75;
}

.hamburger-line {
  width: 30px;
  height: 2px;
  background-color: currentColor;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease,
    margin 0.3s ease;
  transform-origin: 50% 50%;
}

.hamburger-menu.open .hamburger-line:first-child {
  transform: translateY(4px) rotate(45deg);
}

.hamburger-menu.open .hamburger-line:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

.logo-container {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  height: 28px;
}

.card-nav-cta-button {
  background-color: #111;
  color: white;
  border: none;
  border-radius: calc(0.75rem - 0.35rem);
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-nav-cta-button:hover {
  background-color: #333;
}

.card-nav-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  padding: 0.5rem;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
}

.card-nav.open .card-nav-content {
  visibility: visible;
  pointer-events: auto;
}

.nav-card {
  height: 100%;
  flex: 1 1 0;
  min-width: 0;
  border-radius: calc(0.75rem - 0.2rem);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 8px;
  user-select: none;
}

.nav-card-label {
  font-weight: 400;
  font-size: 22px;
  letter-spacing: -0.5px;
}

.nav-card-links {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-card-link {
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.nav-card-link:hover {
  opacity: 0.75;
}

@media (max-width: 768px) {
  .card-nav-container {
    width: 90%;
    top: 1.2em;
  }

  .card-nav-top {
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }

  .hamburger-menu {
    order: 2;
  }

  .logo-container {
    position: static;
    transform: none;
    order: 1;
  }

  .card-nav-cta-button {
    display: none;
  }

  .card-nav-content {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 0.5rem;
    bottom: 0;
    justify-content: flex-start;
  }

  .nav-card {
    height: auto;
    min-height: 60px;
    flex: 1 1 auto;
    max-height: none;
  }

  .nav-card-label {
    font-size: 18px;
  }

  .nav-card-link {
    font-size: 15px;
  }
}
`,
  X = `import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={\`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] \${className}\`}
    >
      <nav
        ref={navRef}
        className={\`card-nav \${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]\`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className={\`hamburger-menu \${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none\`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={\`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] \${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75\`}
            />
            <div
              className={\`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] \${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75\`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <img src={logo} alt={logoAlt} className="logo h-[28px]" />
          </div>

          <button
            type="button"
            className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-medium cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div
          className={\`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] \${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]\`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={\`\${item.label}-\${idx}\`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={\`\${lnk.label}-\${i}\`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
`,
  J = `import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={\`card-nav-container \${className}\`}>
      <nav ref={navRef} className={\`card-nav \${isExpanded ? 'open' : ''}\`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={\`hamburger-menu \${isHamburgerOpen ? 'open' : ''}\`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <img src={logo} alt={logoAlt} className="logo" />
          </div>

          <button
            type="button"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={\`\${item.label}-\${idx}\`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a key={\`\${lnk.label}-\${i}\`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel}>
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
`,
  K = `import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={\`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] \${className}\`}
    >
      <nav
        ref={navRef}
        className={\`card-nav \${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]\`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className={\`hamburger-menu \${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none\`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={\`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] \${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75\`}
            />
            <div
              className={\`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] \${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75\`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <img src={logo} alt={logoAlt} className="logo h-[28px]" />
          </div>

          <button
            type="button"
            className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-medium cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div
          className={\`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] \${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]\`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={\`\${item.label}-\${idx}\`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={\`\${lnk.label}-\${i}\`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
`,
  Q = {
    dependencies: "gsap",
    usage: `import CardNav from './CardNav'
import logo from './logo.svg';

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};`,
    code: Y,
    css: W,
    tailwind: X,
    tsCode: J,
    tsTailwind: K,
  },
  ce = () => {
    const h = [
        {
          name: "logo",
          type: "string",
          default: "-",
          description: "URL for the logo image",
        },
        {
          name: "logoAlt",
          type: "string",
          default: "Logo",
          description: "Alt text for the logo image",
        },
        {
          name: "items",
          type: "CardNavItem[]",
          default: "-",
          description:
            "Array of navigation items with label, bgColor, textColor, and links",
        },
        {
          name: "className",
          type: "string",
          default: "''",
          description: "Additional CSS classes for the navigation container",
        },
        {
          name: "ease",
          type: "string",
          default: "power3.out",
          description: "GSAP easing function for animations",
        },
        {
          name: "baseColor",
          type: "string",
          default: "#fff",
          description: "Background color for the navigation container",
        },
        {
          name: "menuColor",
          type: "string",
          default: "undefined",
          description: "Color for the hamburger menu lines",
        },
        {
          name: "buttonBgColor",
          type: "string",
          default: "#111",
          description: "Background color for the CTA button",
        },
        {
          name: "buttonTextColor",
          type: "string",
          default: "white",
          description: "Text color for the CTA button",
        },
      ],
      [m, p] = r.useState("light"),
      [g, d] = r.useState("power3.out"),
      [x, f] = _(),
      y = [
        { value: "power3.out", label: "power3.out" },
        { value: "back.out(1.7)", label: "back.out(1.7)" },
        { value: "elastic.out(1, 0.8)", label: "elastic.out(1, 0.8)" },
        { value: "circ.out", label: "circ.out" },
      ],
      u = [
        {
          label: "About",
          bgColor: "#0D0716",
          textColor: "#fff",
          links: [
            { label: "Company", ariaLabel: "About Company" },
            { label: "Careers", ariaLabel: "About Careers" },
          ],
        },
        {
          label: "Projects",
          bgColor: "#170D27",
          textColor: "#fff",
          links: [
            { label: "Featured", ariaLabel: "Featured Projects" },
            { label: "Case Studies", ariaLabel: "Project Case Studies" },
          ],
        },
        {
          label: "Contact",
          bgColor: "#271E37",
          textColor: "#fff",
          links: [
            { label: "Email", ariaLabel: "Email us" },
            { label: "Twitter", ariaLabel: "Twitter" },
            { label: "LinkedIn", ariaLabel: "LinkedIn" },
          ],
        },
      ],
      o = {
        light: {
          logo: V,
          baseColor: "#fff",
          menuColor: "#000",
          buttonBgColor: "#111",
          buttonTextColor: "#fff",
          backgroundColor: "#f5f5f5",
          items: u,
        },
        dark: {
          logo: T,
          baseColor: "#060010",
          menuColor: "#fff",
          buttonBgColor: "#5227FF",
          buttonTextColor: "#fff",
          backgroundColor: "#060010",
          items: u,
        },
        color: {
          logo: T,
          baseColor: "#5227FF",
          menuColor: "#fff",
          buttonBgColor: "#fff",
          buttonTextColor: "#5227FF",
          backgroundColor: "#060010",
          items: u,
        },
      }[m],
      l = [
        { value: "light", label: "Light Mode" },
        { value: "dark", label: "Dark Mode" },
        { value: "color", label: "Colorful" },
      ];
    return n.jsxs(O, {
      children: [
        n.jsxs(P, {
          children: [
            n.jsx(M, {
              position: "relative",
              className: "demo-container demo-container-dots",
              h: 550,
              overflow: "hidden",
              bg: o.backgroundColor,
              children: n.jsx(
                q,
                {
                  logo: o.logo,
                  items: o.items,
                  baseColor: o.baseColor,
                  menuColor: o.menuColor,
                  buttonBgColor: o.buttonBgColor,
                  buttonTextColor: o.buttonTextColor,
                  ease: g,
                },
                x
              ),
            }),
            n.jsxs(F, {
              children: [
                n.jsx(N, {
                  title: "Example",
                  options: l,
                  value: m,
                  onChange: (i) => {
                    p(i), f();
                  },
                  width: 150,
                }),
                n.jsx(N, {
                  title: "Animation Ease",
                  options: y,
                  value: g,
                  onChange: (i) => {
                    d(i), f();
                  },
                  width: 170,
                }),
              ],
            }),
            n.jsx(B, { data: h }),
            n.jsx(U, { dependencyList: ["gsap"] }),
          ],
        }),
        n.jsx(D, { children: n.jsx(G, { codeObject: Q }) }),
      ],
    });
  };
export { ce as default };
