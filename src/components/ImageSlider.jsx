import React, { useEffect } from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ImageSlider = () => {
  useEffect(() => {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Counter animation
    $('.counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // Vertical loop functions
    const verticalLoop = (items, config) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let onChange = config.onChange,
          lastIndex = 0,
          tl = gsap.timeline({
            repeat: config.repeat, 
            onUpdate: onChange && function() {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
              }
            }, 
            paused: config.paused, 
            defaults: {ease: "none"}, 
            onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
          }),
          length = items.length,
          startY = items[0].offsetTop,
          times = [],
          heights = [],
          spaceBefore = [],
          yPercents = [],
          curIndex = 0,
          center = config.center,
          clone = obj => {
            let result = {}, p;
            for (p in obj) {
              result[p] = obj[p];
            }
            return result;
          },
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
          timeOffset = 0, 
          container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
          totalHeight,
          getTotalHeight = () => items[length-1].offsetTop + yPercents[length-1] / 100 * heights[length-1] - startY + spaceBefore[0] + items[length-1].offsetHeight * gsap.getProperty(items[length-1], "scaleY") + (parseFloat(config.paddingBottom) || 0),
          populateHeights = () => {
            let b1 = container.getBoundingClientRect(), b2;
            items.forEach((el, i) => {
              heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
              yPercents[i] = snap(parseFloat(gsap.getProperty(el, "y", "px")) / heights[i] * 100 + gsap.getProperty(el, "yPercent"));
              b2 = el.getBoundingClientRect();
              spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
              b1 = b2;
            });
            gsap.set(items, {
              yPercent: i => yPercents[i]
            });
            totalHeight = getTotalHeight();
          },
          timeWrap,
          populateOffsets = () => {
            timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalHeight : 0;
            center && times.forEach((t, i) => {
              times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * heights[i] / 2 / totalHeight - timeOffset);
            });
          },
          getClosest = (values, value, wrap) => {
            let i = values.length,
              closest = 1e10,
              index = 0, d;
            while (i--) {
              d = Math.abs(values[i] - value);
              if (d > wrap / 2) {
                d = wrap - d;
              }
              if (d < closest) {
                closest = d;
                index = i;
              }
            }
            return index;
          },
          populateTimeline = () => {
            let i, item, curY, distanceToStart, distanceToLoop;
            tl.clear();
            for (i = 0; i < length; i++) {
              item = items[i];
              curY = yPercents[i] / 100 * heights[i];
              distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
              distanceToLoop = distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
              tl.to(item, {yPercent: snap((curY - distanceToLoop) / heights[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                .fromTo(item, {yPercent: snap((curY - distanceToLoop + totalHeight) / heights[i] * 100)}, {yPercent: yPercents[i], duration: (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);    
              times[i] = distanceToStart / pixelsPerSecond;
            }
            timeWrap = gsap.utils.wrap(0, tl.duration());
          }, 
          refresh = (deep) => {
             let progress = tl.progress();
             tl.progress(0, true);
             populateHeights();
             deep && populateTimeline();
             populateOffsets();
             deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
          },
          proxy;
      gsap.set(items, {y: 0});
      populateHeights();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", () => refresh(true));
      function toIndex(index, vars) {
        vars = clone(vars);
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (vars.revolutions) {
          time += tl.duration() * Math.round(vars.revolutions);
          delete vars.revolutions;
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {time: timeWrap};
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return tl.tweenTo(time, vars);
      }
      tl.elements = items;
      tl.next = vars => toIndex(curIndex+1, vars);
      tl.previous = vars => toIndex(curIndex-1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => {
        let index = getClosest(times, tl.time(), tl.duration());
        setCurrent && (curIndex = index);
        return index;
      };
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    };

    // Initialize vertical loops with consistent speed
    const initSliders = () => {
      const elems1 = gsap.utils.toArray(".scrollelem.elems1");
      verticalLoop(elems1, { 
        paused: false, 
        repeat: -1, 
        speed: 1.2,
        onStart: () => gsap.set(elems1, { opacity: 1 }) // Ensure elements are visible
      });
      
      const elems2 = gsap.utils.toArray(".scrollelem.elems2");
      verticalLoop(elems2, { 
        paused: false, 
        repeat: -1, 
        speed: 1,
        onStart: () => gsap.set(elems2, { opacity: 1 })
      });
      
      const elems3 = gsap.utils.toArray(".scrollelem.elems3");
      verticalLoop(elems3, { 
        paused: false, 
        repeat: -1, 
        speed: 1.2,
        onStart: () => gsap.set(elems3, { opacity: 1 })
      });
      
      const elems4 = gsap.utils.toArray(".scrollelem.elems4");
      verticalLoop(elems4, { 
        paused: false, 
        repeat: -1, 
        speed: 1,
        onStart: () => gsap.set(elems4, { opacity: 1 })
      });
    };

    // Wait for images to load before initializing to prevent jumpy start
    const images = document.querySelectorAll('.image-8');
    let loadedImages = 0;
    
    if (images.length === 0) {
      initSliders();
    } else {
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length) {
              initSliders();
            }
          });
        }
      });
      
      if (loadedImages === images.length) {
        initSliders();
      }
    }

    // Image comparison slider
    function maxVal(val, itsmax) {
      if (val <= itsmax && val >= 0) return val;
      else if (val < 0) return 0;
      else return itsmax;
    }

    $(".img-comp-overlay").each(function() {
      const slider = $(this).parents(".img-comp-container").find(".img-comp-slider");
      const img = $(this).find("img");

      const slidef = function() {
        const e = window.event;
        const x = img.offset().left;
        img.parent().width(maxVal(e.pageX - x, $(".img-comp-img").width()));
        slider.css("left", (maxVal(e.pageX - x, $(".img-comp-img").width())) + "px");
      };

      // Mouse events
      slider.on("mousedown", function(e) {
        e.preventDefault();
        $(window).on("mousemove.slideev", slidef);
      });

      $(window).on("mouseup", function(e) {
        e.preventDefault();
        $(window).off("mousemove.slideev");
      });

      // Touch events
      slider.on("touchmove", function(e) {
        e.preventDefault();
        const t = e.touches[0];
        const x = img.offset().left;
        img.parent().width(maxVal(t.pageX - x, $(".img-comp-img").width()));
        slider.css("left", (maxVal(t.pageX - x, $(".img-comp-img").width())) + "px");
      });
    });

    // Cleanup function
    return () => {
      $(window).off("mousemove.slideev");
      $(window).off("mouseup");
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <section className="ui-slider-multi-section">
      <div className="w-layout-blockcontainer ui-slider-multi-container w-container">
        {/* First column */}
        <div duration="0.3" data-speed="2" className="scrollitem tabs-item-remove">
          <div className="scrollstripe">
            <div duration="20" className="scrollcnt">
              <div duration="20" className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a45f5bc757cad2cb35_Image.png" loading="lazy" alt="" className="image-8" />
              </div>
              <div duration="" className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a48b7669a31b511cb3_Image%20(1).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729f40f46fca6abaf2fd_Image%20(21).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a47df8e86efaf79044_Image%20(3).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a374651f26dcb0fab0_Image%20(4).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems1">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a48b7669a31b511cb3_Image%20(1).png" loading="lazy" alt="" className="image-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div duration="20" className="scrollitem tabs-item-remove2">
          <div className="scrollstripe">
            <div className="scrollcnt">
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a37aa4c94ed4d8397c_Image%20(6).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a383ef5f1275a8a185_Image%20(7).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a215a8106a1dac971c_Image%20(8).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a2c128cd5330a04354_Image%20(11).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a240f46fca6abaf43e_Image%20(9).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems2">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a1992ced9002344d27_Image%20(12).png" loading="lazy" alt="" className="image-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="scrollitem third-slider">
          <div className="scrollstripe">
            <div className="scrollcnt">
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a19f2750d119ce6274_Image%20(13).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a240f46fca6abaf43e_Image%20(9).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a17126eca35c17a713_Image%20(15).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c872a0bf7b6f26de36f381_Image%20(16).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729fbf7b6f26de36f351_Image%20(17).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems3">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729ff5aea133f6dfbc35_Image%20(18).png" loading="lazy" alt="" className="image-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Fourth column */}
        <div className="scrollitem fourth-slider">
          <div className="scrollstripe">
            <div className="scrollcnt">
              <div className="scrollelem elems4">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729f7d491e37255a5e48_Image%20(19).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems4">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729f08c3583fde3f423c_Image%20(20).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems4">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729e2990a820d357bc95_Image%20(24).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems4">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729e7327622caa5ec164_Image%20(22).png" loading="lazy" alt="" className="image-8" />
              </div>
              <div className="scrollelem elems4">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c8729f799e27c553832c5d_Image%20(23).png" loading="lazy" alt="" className="image-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;