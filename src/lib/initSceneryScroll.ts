import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TRIGGER = ".scenery-scroll-element";
const CONTACT = "#contact";

function getContactScrollY() {
  const contact = document.querySelector(CONTACT);
  if (!contact) return 6000;
  return contact.getBoundingClientRect().top + window.scrollY;
}

function syncScrollHeight() {
  const scrollEl = document.querySelector<HTMLElement>(TRIGGER);
  if (!scrollEl) return;
  scrollEl.style.height = `${getContactScrollY()}px`;
}

export function initSceneryScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    return () => {};
  }

  syncScrollHeight();

  const sceneryTriggers: ScrollTrigger[] = [];
  const track = (config: ScrollTrigger.StaticVars) => {
    const instance = ScrollTrigger.create(config);
    sceneryTriggers.push(instance);
    return instance;
  };

  const trackTween = (tween: gsap.core.Tween) => {
    if (tween.scrollTrigger) sceneryTriggers.push(tween.scrollTrigger);
    return tween;
  };

  const speed = 100;

  const scene1 = gsap.timeline();
  track({
    animation: scene1,
    trigger: TRIGGER,
    start: "top top",
    end: "45% 100%",
    scrub: 3,
  });

  scene1.to(
    "#h1-1",
    { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" },
    0
  );
  scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
  scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
  scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
  scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
  scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
  scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
  scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
  scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

  trackTween(
    gsap.fromTo(
      "#bird",
      { opacity: 1 },
      {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
          trigger: TRIGGER,
          start: "15% top",
          end: "60% 100%",
          scrub: 4,
          onEnter: () => {
            gsap.to("#bird", { scaleX: 1, rotation: 0 });
          },
          onLeave: () => {
            gsap.to("#bird", { scaleX: -1, rotation: -15 });
          },
        },
      }
    )
  );

  const clouds = gsap.timeline();
  track({
    animation: clouds,
    trigger: TRIGGER,
    start: "top top",
    end: "70% 100%",
    scrub: 1,
  });

  clouds.to("#cloud1", { x: 500 }, 0);
  clouds.to("#cloud2", { x: 1000 }, 0);
  clouds.to("#cloud3", { x: -1000 }, 0);
  clouds.to("#cloud4", { x: -700, y: 25 }, 0);

  const sun = gsap.timeline();
  track({
    animation: sun,
    trigger: TRIGGER,
    start: "top top",
    end: "37% 100%",
    scrub: 1,
  });

  sun.to("#bg_grad", { attr: { cy: "330" } }, 0);
  sun.to("#sun", { attr: { offset: "0.15" } }, 0);
  sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
  sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
  sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
  sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
  sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

  const scene2 = gsap.timeline();
  track({
    animation: scene2,
    trigger: TRIGGER,
    start: "15% top",
    end: "40% 100%",
    scrub: 4,
  });

  scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
  scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
  scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
  scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
  scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
  scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

  gsap.set("#bats", { opacity: 0, visibility: "hidden" });

  const sun2 = gsap.timeline();
  track({
    animation: sun2,
    trigger: TRIGGER,
    start: "37% top",
    end: "83% 100%",
    scrub: 1,
  });

  sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
  sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
  sun2.to("#sun", { attr: { "stop-color": "#f5d78e" } }, 0);
  sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#c9b8d4" } }, 0);
  sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#e8e4df" } }, 0);
  sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#d4e8dc" } }, 0);

  gsap.set("#scene3", { y: 580, visibility: "visible" });

  const sceneTransition = gsap.timeline();
  track({
    animation: sceneTransition,
    trigger: TRIGGER,
    start: "70% top",
    end: "bottom 100%",
    scrub: 3,
  });

  sceneTransition.to(
    "#h2-1",
    { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
    0
  );
  sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0);
  sceneTransition.to("#bg2", { y: 0 }, 0);

  const scene3 = gsap.timeline();
  track({
    animation: scene3,
    trigger: TRIGGER,
    start: "80% 50%",
    end: "bottom 100%",
    scrub: 3,
  });

  scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
  scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
  scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
  scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
  scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
  scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
  scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
  scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

  trackTween(
    gsap.to("#fstar", {
      x: -700,
      y: -250,
      ease: "power4.out",
      scrollTrigger: {
        trigger: TRIGGER,
        start: "67% top",
        end: "bottom 100%",
        scrub: 5,
        onEnter: () => {
          gsap.set("#fstar", { opacity: 1 });
        },
        onLeave: () => {
          gsap.set("#fstar", { opacity: 0 });
        },
      },
    })
  );

  const freezeScenery = (frozen: boolean) => {
    sceneryTriggers.forEach((st) => {
      if (frozen) {
        st.disable(false, true);
      } else {
        st.enable(false, true);
      }
    });
  };

  const freezeTrigger = ScrollTrigger.create({
    trigger: CONTACT,
    start: "top 55%",
    onEnter: () => freezeScenery(true),
    onLeaveBack: () => freezeScenery(false),
  });

  const onResize = () => {
    syncScrollHeight();
    ScrollTrigger.refresh();
  };

  window.addEventListener("resize", onResize);

  requestAnimationFrame(() => {
    syncScrollHeight();
    ScrollTrigger.refresh();
  });

  return () => {
    window.removeEventListener("resize", onResize);
    freezeTrigger.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
