// scripts.js
import { popupContent } from './popupData.js';

let isLanguageChanged = false;

// Function to detect language changes
function setupLanguageChangeDetection() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                isLanguageChanged = true;
                scrollPageQuickly(); // Trigger the scroll behavior
                break;
            }
        }
    });

    // Observe the <html> element for changes to the 'lang' attribute
    const htmlElement = document.documentElement;
    observer.observe(htmlElement, {
        attributes: true, // Observe attribute changes
        attributeFilter: ['lang'] // Only observe changes to the 'lang' attribute
    });
}

// Function to scroll the page to the bottom and then back to the top
function scrollPageQuickly() {
    // Check if the device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: isMobile ? 'auto' : 'smooth' // Use 'auto' for mobile, 'smooth' for desktop
    });

    // After a short delay, scroll back to the top
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: isMobile ? 'auto' : 'smooth' // Use 'auto' for mobile, 'smooth' for desktop
        });
    }, 500); // Adjust the delay (in milliseconds) as needed
}



// popup exit start
// ── EXIT-INTENT FEEDBACK POPUP ────────────────────────────────────
function setupExitIntentPopup() {
  // Prevent multiple initializations
  if (window.exitIntentInitialized) {
    console.log('🚫 Exit intent already initialized');
    return;
  }
  window.exitIntentInitialized = true;
  
  let isPopupDisplayed = false;
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let pageStartTime = Date.now();
  let scrollAttempts = 0;

  // Build and show the popup
  function createFeedbackPopup() {
    // overlay with blur effect
    const overlay = document.createElement("div");
    overlay.id = "exit-popup-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(5px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0,
      transition: "all 0.3s ease-in-out"
    });

    // popup container
    const popup = document.createElement("div");
    popup.classList.add("exit-popup");
    Object.assign(popup.style, {
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "0",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      width: "90%",
      maxWidth: isMobile ? "350px" : "420px",
      position: "relative",
      transform: "scale(0.8) translateY(20px)",
      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      overflow: "hidden",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    });

    // header with gradient
    const header = document.createElement("div");
    Object.assign(header.style, {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: isMobile ? "25px 20px 15px" : "30px 30px 20px",
      color: "#fff",
      position: "relative"
    });

    // animated icon
    const icon = document.createElement("div");
    icon.innerHTML = "👋";
    Object.assign(icon.style, {
      fontSize: isMobile ? "40px" : "48px",
      marginBottom: "15px",
      animation: "wave 1s ease-in-out infinite alternate"
    });

    const title = document.createElement("h3");
    title.textContent = "Wait! Before you go...";
    Object.assign(title.style, {
      margin: "0 0 10px 0",
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: "600",
      color: "#fff"
    });

    const subtitle = document.createElement("p");
    subtitle.textContent = "Help us improve your experience!";
    Object.assign(subtitle.style, {
      margin: "0",
      fontSize: isMobile ? "14px" : "16px",
      opacity: "0.9",
      color: "#fff"
    });

    header.appendChild(icon);
    header.appendChild(title);
    header.appendChild(subtitle);

    // content area
    const content = document.createElement("div");
    Object.assign(content.style, {
      padding: isMobile ? "20px" : "30px",
      backgroundColor: "#fff"
    });

    const message = document.createElement("p");
    message.textContent = "Your feedback matters! It takes just 2 minutes and helps us serve you better.";
    Object.assign(message.style, {
      margin: "0 0 20px 0",
      fontSize: isMobile ? "14px" : "16px",
      color: "#555",
      lineHeight: "1.5"
    });

    // buttons container
    const buttonsContainer = document.createElement("div");
    Object.assign(buttonsContainer.style, {
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "10px" : "12px"
    });

    // button styles
    const buttonBaseStyle = {
      border: "none",
      borderRadius: "12px",
      padding: isMobile ? "12px 20px" : "14px 24px",
      fontSize: isMobile ? "14px" : "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "inherit",
      position: "relative",
      overflow: "hidden",
      minHeight: "44px"
    };

    const canUseCookies = navigator.cookieEnabled;

    // Primary button (Give Feedback)
    if (canUseCookies) {
      const feedbackBtn = document.createElement("button");
      feedbackBtn.id = "btn-give-feedback";
      feedbackBtn.innerHTML = "🎯 Give Feedback";
      Object.assign(feedbackBtn.style, {
        ...buttonBaseStyle,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
      });

      buttonsContainer.appendChild(feedbackBtn);
    }

    // Secondary buttons
    const secondaryButtons = [
      { id: "btn-no-feedback", text: "❌ No thanks", emoji: "❌" },
      { id: "btn-already-feedback", text: "✅ Already gave feedback", emoji: "✅" },
      { id: "btn-cancel-feedback", text: "↩️ Cancel", emoji: "↩️" }
    ];

    secondaryButtons.forEach(btnInfo => {
      const btn = document.createElement("button");
      btn.id = btnInfo.id;
      btn.textContent = btnInfo.text;
      Object.assign(btn.style, {
        ...buttonBaseStyle,
        background: "#f8f9fa",
        color: "#6c757d",
        border: "2px solid #e9ecef",
        fontSize: isMobile ? "13px" : "14px",
        padding: isMobile ? "10px 16px" : "12px 20px"
      });

      buttonsContainer.appendChild(btn);
    });

    // close button (X)
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "15px",
      right: "15px",
      background: "rgba(255, 255, 255, 0.2)",
      border: "none",
      borderRadius: "50%",
      width: isMobile ? "35px" : "30px",
      height: isMobile ? "35px" : "30px",
      color: "#fff",
      fontSize: "20px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    });

    // progress indicator
    const progressBar = document.createElement("div");
    Object.assign(progressBar.style, {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "4px",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      width: "0%",
      transition: "width 0.3s ease"
    });

    content.appendChild(message);
    content.appendChild(buttonsContainer);
    
    popup.appendChild(header);
    popup.appendChild(content);
    popup.appendChild(progressBar);
    header.appendChild(closeBtn);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(20deg); }
      }
      
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      .exit-popup {
        animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      
      @media (max-width: 480px) {
        .exit-popup {
          margin: 20px;
          max-width: calc(100vw - 40px) !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Animate entrance
    setTimeout(() => {
      overlay.style.opacity = "1";
      popup.style.transform = "scale(1) translateY(0)";
      setTimeout(() => {
        progressBar.style.width = "100%";
      }, 500);
    }, 10);

    // close helper with animation
    function closePopup() {
      overlay.style.opacity = "0";
      popup.style.transform = "scale(0.8) translateY(20px)";
      setTimeout(() => {
        const ov = document.getElementById("exit-popup-overlay");
        if (ov) ov.remove();
        if (style && style.parentNode) style.parentNode.removeChild(style);
      }, 300);
      isPopupDisplayed = false;
    }    // Enhanced handlers with emoji feedback
    const buttonHandlers = {
      "give-feedback": () => {
        // Store interaction to prevent future popups
        localStorage.setItem('feedback-popup-interacted', 'true');
        
        const btn = overlay.querySelector("#btn-give-feedback");
        const message = overlay.querySelector("p");
        const title = overlay.querySelector("h3");
        
        btn.innerHTML = "🎉 Opening feedback form...";
        btn.style.background = "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)";
        btn.style.transform = "scale(1.05)";
        btn.disabled = true;
        
        title.innerHTML = "🚀 Thank you!";
        message.innerHTML = "We're opening the feedback form in a new tab. Your input means the world to us!";
        message.style.color = "#28a745";
        
        ["no-feedback", "already-feedback", "cancel-feedback"].forEach(id => {
          const otherBtn = overlay.querySelector(`#btn-${id}`);
          if (otherBtn) {
            otherBtn.style.opacity = "0.3";
            otherBtn.disabled = true;
          }
        });
        
        setTimeout(() => {
          window.open("https://your-feedback-form.example.com", "_blank");
          closePopup();
        }, 1200);
      },
        "no-feedback": () => {
        // Store interaction to prevent future popups
        localStorage.setItem('feedback-popup-interacted', 'true');
        
        const btn = overlay.querySelector("#btn-no-feedback");
        const message = overlay.querySelector("p");
        const title = overlay.querySelector("h3");
        
        btn.innerHTML = "😔 That's okay";
        btn.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)";
        btn.style.color = "#fff";
        btn.style.transform = "scale(1.05)";
        btn.disabled = true;
        
        title.innerHTML = "😢 We understand";
        message.innerHTML = "No problem at all! We're just happy you visited. Maybe next time? 💙";
        message.style.color = "#6c757d";
        message.style.fontSize = "15px";
        
        ["give-feedback", "already-feedback", "cancel-feedback"].forEach(id => {
          const otherBtn = overlay.querySelector(`#btn-${id}`);
          if (otherBtn) {
            otherBtn.style.opacity = "0.3";
            otherBtn.disabled = true;
          }
        });
        
        setTimeout(() => {
          closePopup();
        }, 2000);
      },
        "already-feedback": () => {
        // Store interaction to prevent future popups
        localStorage.setItem('feedback-popup-interacted', 'true');
        
        const btn = overlay.querySelector("#btn-already-feedback");
        const message = overlay.querySelector("p");
        const title = overlay.querySelector("h3");
        
        btn.innerHTML = "🌟 You're awesome!";
        btn.style.background = "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
        btn.style.color = "#333";
        btn.style.transform = "scale(1.05)";
        btn.disabled = true;
        
        title.innerHTML = "🙏 Thank you so much!";
        message.innerHTML = "Your feedback is invaluable! You're helping us improve every day. ✨";
        message.style.color = "#28a745";
        message.style.fontSize = "15px";
        
        ["give-feedback", "no-feedback", "cancel-feedback"].forEach(id => {
          const otherBtn = overlay.querySelector(`#btn-${id}`);
          if (otherBtn) {
            otherBtn.style.opacity = "0.3";
            otherBtn.disabled = true;
          }
        });
        
        setTimeout(() => {
          closePopup();
        }, 2000);
      },
        "cancel-feedback": () => {
        // Store interaction to prevent future popups
        localStorage.setItem('feedback-popup-interacted', 'true');
        
        const btn = overlay.querySelector("#btn-cancel-feedback");
        btn.innerHTML = "👋 Bye for now!";
        btn.style.background = "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
        btn.style.color = "#333";
        btn.style.transform = "scale(1.05)";
        
        setTimeout(() => {
          closePopup();
        }, 600);
      }
    };

    // Apply handlers to buttons
    Object.keys(buttonHandlers).forEach(id => {
      const btn = overlay.querySelector(`#btn-${id}`);
      if (btn) {
        btn.addEventListener("click", buttonHandlers[id]);
        if (isMobile) {
          btn.addEventListener("touchend", (e) => {
            e.preventDefault();
            buttonHandlers[id]();
          });
        }
      }
    });

    // Close button handler
    closeBtn.addEventListener("click", closePopup);
    if (isMobile) {
      closeBtn.addEventListener("touchend", (e) => {
        e.preventDefault();
        closePopup();
      });
    }

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePopup();
    });

    // Escape key to close
    const escapeHandler = (e) => {
      if (e.key === "Escape") {
        closePopup();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }
  // Mobile-specific exit intent detection
  function setupMobileExitIntent() {
    console.log('🔥 Mobile exit intent detection started');
    
    // Minimum time requirements (much longer)
    const MIN_TIME_ON_PAGE = 30000; // 30 seconds minimum
    const MIN_ENGAGEMENT_TIME = 45000; // 45 seconds for engagement-based triggers
    
    let scrollToTopCount = 0;
    let lastScrollY = window.scrollY;
    let scrollTimeout = null;
    let visibilityTimeout = null;
    let topTouchCount = 0;
    let lastTopTouch = 0;

    // 1. Back button detection (much more conservative)
    let backButtonAttempts = 0;
    
    // Only add popstate listener once
    if (!window.exitIntentPopstateAdded) {
      window.exitIntentPopstateAdded = true;
      
      // Add a dummy state to detect back button
      history.pushState({ exitIntent: true }, null, window.location.href);
      
      window.addEventListener('popstate', (e) => {
        console.log('📱 Back button detected!');
        const timeOnPage = Date.now() - pageStartTime;
        
        if (!isPopupDisplayed && timeOnPage > MIN_TIME_ON_PAGE) {
          backButtonAttempts++;
          console.log(`⏱️ Back button attempt #${backButtonAttempts}, time on page: ${timeOnPage}ms`);
          
          // Only show popup on second back button attempt
          if (backButtonAttempts >= 2) {
            // Push state again to prevent actual navigation
            history.pushState({ exitIntent: true }, null, window.location.href);
            isPopupDisplayed = true;
            console.log('🎯 Showing popup due to back button (2nd attempt)');
            createFeedbackPopup();
            return;
          } else {
            // First attempt - just push state back
            history.pushState({ exitIntent: true }, null, window.location.href);
            console.log('⚠️ First back button - not showing popup yet');
          }
        } else if (timeOnPage <= MIN_TIME_ON_PAGE) {
          // Let them leave if they haven't been here long enough
          console.log('👋 Letting user leave - not enough time on page');
          // Don't prevent navigation
        }
      });
    }

    // 2. Scroll to top detection (heavily debounced)
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        // Much more restrictive scroll detection
        if (lastScrollY > 300 && currentScrollY < 20) {
          scrollToTopCount++;
          console.log(`📜 Significant scroll to top #${scrollToTopCount}`);
          
          const timeOnPage = Date.now() - pageStartTime;
          if (scrollToTopCount >= 4 && !isPopupDisplayed && timeOnPage > MIN_ENGAGEMENT_TIME) {
            isPopupDisplayed = true;
            console.log('🎯 Showing popup due to multiple scroll to tops');
            createFeedbackPopup();
          }
        }
        
        lastScrollY = currentScrollY;
        scrollAttempts++;
      }, 500); // 500ms debounce
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Page visibility change (much more conservative)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        console.log('👁️ Page hidden (tab switch/minimize)');
        const timeOnPage = Date.now() - pageStartTime;
        
        if (timeOnPage > MIN_ENGAGEMENT_TIME && !isPopupDisplayed) {
          // Wait longer before showing popup
          visibilityTimeout = setTimeout(() => {
            if (document.visibilityState === 'hidden' && !isPopupDisplayed) {
              isPopupDisplayed = true;
              console.log('🎯 Showing popup due to extended page hide');
              createFeedbackPopup();
            }
          }, 8000); // Wait 8 seconds
        }
      } else if (document.visibilityState === 'visible' && visibilityTimeout) {
        // User came back, cancel the popup
        clearTimeout(visibilityTimeout);
        visibilityTimeout = null;
        console.log('👁️ User returned, cancelling popup');
      }
    });

    // 4. Time-based trigger (much longer delay)
    setTimeout(() => {
      if (!isPopupDisplayed) {
        const userEngaged = scrollAttempts > 10 || 
                          document.querySelectorAll('.clicked, .selected').length > 2;
        
        console.log(`⏰ Time-based check: engaged=${userEngaged}, scrolls=${scrollAttempts}`);
        
        if (userEngaged) {
          isPopupDisplayed = true;
          console.log('🎯 Showing popup due to time-based trigger');
          createFeedbackPopup();
        }
      }
    }, 120000); // 2 minutes

    // 5. Touch end near top edge (extremely conservative)
    document.addEventListener('touchend', (e) => {
      const touch = e.changedTouches[0];
      const now = Date.now();
      
      // Only count touches at the very top edge
      if (touch && touch.clientY < 15) {
        if (now - lastTopTouch > 2000) { // At least 2 seconds between touches
          topTouchCount++;
          lastTopTouch = now;
          console.log(`👆 Top edge touch #${topTouchCount}`);
          
          const timeOnPage = now - pageStartTime;
          // Require many top touches and significant time
          if (topTouchCount >= 5 && timeOnPage > MIN_ENGAGEMENT_TIME + 15000 && !isPopupDisplayed) {
            isPopupDisplayed = true;
            console.log('🎯 Showing popup due to multiple top edge touches');
            createFeedbackPopup();
          }
        }
      }
    }, { passive: true });
  }

  // Desktop exit intent detection
  function setupDesktopExitIntent() {
    console.log('🖥️ Desktop exit intent detection started');
    
    function onMouseOut(e) {
      if (e.clientY < 50 && !e.relatedTarget && !isPopupDisplayed) {
        const timeOnPage = Date.now() - pageStartTime;
        console.log(`🖱️ Mouse exit detected after ${timeOnPage}ms`);
        
        if (timeOnPage > 8000) {
          isPopupDisplayed = true;
          console.log('🎯 Showing popup due to mouse exit');
          createFeedbackPopup();
          document.removeEventListener("mouseout", onMouseOut);
        }
      }
    }

    setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
    }, 2000);
  }
  // Initialize based on device type
  console.log(`📱 Device detection: ${isMobile ? 'Mobile' : 'Desktop'}`);
  
  // Check if user has already interacted with feedback popup
  const hasInteractedWithFeedback = localStorage.getItem('feedback-popup-interacted');
  if (hasInteractedWithFeedback) {
    console.log('🚫 User has already interacted with feedback popup');
    return;
  }
  
  if (isMobile) {
    setupMobileExitIntent();
  } else {
    setupDesktopExitIntent();
  }

  // Track scroll attempts for engagement scoring
  window.addEventListener('scroll', () => {
    scrollAttempts++;
  });
}

// pop up exit end







document.addEventListener("DOMContentLoaded", () => {
    setupExitIntentPopup(); // Initialize the exit intent popup functionality
    setupLanguageChangeDetection();
     
    const credentials = document.querySelectorAll(".credential li");
    const careers = document.querySelectorAll(".career li");
    let lastClickedElement = null; // Track the last clicked element

    // Function to handle click event
    function handleClick(event) {
        event.stopPropagation();
        const targetElement = event.currentTarget; // Always use the currentTarget

        // Clear any previous selections
        document.querySelectorAll(".credential li, .career li").forEach((el) => {
            el.classList.remove("clicked");
            el.classList.remove("selected");
        });

        // Add the class to the clicked element
        targetElement.classList.add("clicked");
        targetElement.classList.add("selected");

        // Store clicked element
        lastClickedElement = targetElement;

        // Create popup and adjust arrows
        createPopup(targetElement);
        realignArrows(); // Realign arrows immediately on click
    }

    // Add event listeners to credentials and careers
    credentials.forEach((element) => {
        element.addEventListener("click", handleClick);
    });
    careers.forEach((element) => {
        element.addEventListener("click", handleClick);
    });



    // Create popup on click
    function createPopup(element) {
        // Remove any existing popups
        const existingPopup = document.querySelector(".popup");
        if (existingPopup) {
            existingPopup.remove();
        }

        const popup = document.createElement("div");
        popup.classList.add("popup");

        const content = document.createElement("div");
        content.classList.add("popup-content");
        content.innerHTML = popupContent[element.id]?.content || "No information available";
        popup.appendChild(content);

        const learnMoreButton = document.createElement("button");
        learnMoreButton.textContent = "Learn More";
        learnMoreButton.addEventListener("click", (event) => {
            event.stopPropagation();
            window.open(popupContent[element.id]?.link || "#", "_blank");
        });
        popup.appendChild(learnMoreButton);

        const rect = element.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`;
        popup.style.left = `${rect.left + window.scrollX}px`;
        popup.style.width = `${rect.width}px`;

        // Stop propagation when clicking on the popup itself
        popup.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        document.body.appendChild(popup);
    }


    // Reset popup
    function resetPopup() {
        const existingPopup = document.querySelector(".popup");
        if (existingPopup) {
            existingPopup.remove();
        }
    }

    function resetUI() {
        // Reset all elements
        credentials.forEach((c) => {
            c.classList.remove("selected");
            c.classList.remove("disabled");

        });
        careers.forEach((c) => {
            c.classList.remove("selected");
            c.classList.remove("disabled");

        });

        // Clear all arrows from the SVG
        const svg = document.getElementById("arrows");
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        // Re-append the arrowhead marker (if necessary)
        const marker = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "marker"
        );
        marker.setAttribute("id", "arrowhead");
        marker.setAttribute("markerWidth", "10");
        marker.setAttribute("markerHeight", "7");
        marker.setAttribute("refX", "0");
        marker.setAttribute("refY", "3.5");
        marker.setAttribute("orient", "auto");
        const arrowhead = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "polygon"
        );
        arrowhead.setAttribute("points", "0 0, 10 3.5, 0 7");
        arrowhead.setAttribute("fill", "black");
        marker.appendChild(arrowhead);
        svg.appendChild(marker);

    }

    // Function to realign arrows for the selected element only
    function realignArrows() {
        const svg = document.getElementById("arrows");
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        // Add back the arrowhead marker
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        marker.setAttribute("id", "arrowhead");
        marker.setAttribute("markerWidth", "10");
        marker.setAttribute("markerHeight", "7");
        marker.setAttribute("refX", "0");
        marker.setAttribute("refY", "3.5");
        marker.setAttribute("orient", "auto");

        const arrowhead = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        arrowhead.setAttribute("points", "0 0, 10 3.5, 0 7");
        arrowhead.setAttribute("fill", "black");
        marker.appendChild(arrowhead);
        svg.appendChild(marker);

        // Only realign arrows for the last clicked element
        if (lastClickedElement) {
            const relatedItems = lastClickedElement.dataset.related.split(",");
            relatedItems.forEach((itemId) => {
                const itemElement = document.getElementById(itemId);
                if (itemElement) {
                    if (lastClickedElement.closest(".credential")) {
                        drawArrowFromCertificateToCareer(lastClickedElement, itemElement);
                    } else {
                        drawCircularArrows(lastClickedElement, relatedItems);
                    }
                }
            });
        }
    }

    // Function to realign popups for the selected element only
    function realignPopups() {
        const popup = document.querySelector(".popup");
        if (popup && lastClickedElement) {
            const rect = lastClickedElement.getBoundingClientRect();
            popup.style.top = `${rect.bottom + window.scrollY}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.width = `${rect.width}px`;
        }
    }

    // Add event listener for window resize
    window.addEventListener('resize', () => {
        // Check if the lastClickedElement is still selected before realigning
        if (lastClickedElement && lastClickedElement.classList.contains("selected")) {
            realignArrows();
            realignPopups();
        }
    });

    function drawArrowFromCertificateToCareer(fromElement, toElement) {
        const svg = document.getElementById("arrows");
        const svgRect = svg.getBoundingClientRect();
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();

        // Calculate points with offset
        const gap = 10; // Gap between arrow and elements
        let fromX, fromY, toX, toY;

        // Check if screen width is less than 400px
        if (window.innerWidth < 400) {
            // New logic: Arrow from top of fromElement to left of toElement
            fromX = fromRect.left + fromRect.width / 2 - svgRect.left; // Top center of fromElement
            fromY = fromRect.top - svgRect.top - gap; // Top of fromElement
            toX = toRect.left - svgRect.left - gap; // Left of toElement
            toY = toRect.top + toRect.height / 2 - svgRect.top; // Center of toElement
        } else {
            // Original logic: Arrow from right of fromElement to left of toElement
            fromX = fromRect.right - svgRect.left + gap;
            fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
            toX = toRect.left - svgRect.left - gap;
            toY = toRect.top + toRect.height / 2 - svgRect.top;
        }

        const arrow = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        // Enhanced curve control points
        // enforce a min horizontal bulge so curves never collapse
        const dx = toX - fromX;
        const sign = dx >= 0 ? 1 : -1;
        const half = dx * 0.5;
        const minB = 40;                        // tweak this minimum bulge
        const offs = Math.abs(half) < minB
            ? minB * sign
            : half;
        const controlX1 = fromX + offs;
        const controlX2 = toX - offs;


        const pathData = `M ${fromX} ${fromY} 
                 C ${controlX1} ${fromY},
                   ${controlX2} ${toY},
                   ${toX} ${toY}`;

        arrow.setAttribute("d", pathData);
        arrow.setAttribute("fill", "none");
        arrow.setAttribute("stroke", "black");
        arrow.setAttribute("stroke-width", "1");
        arrow.setAttribute("marker-end", "url(#arrowhead)");

        svg.appendChild(arrow);
    }


    function drawCircularArrows(fromCareer, credentialIds) {
        const svg = document.getElementById("arrows");
        const svgRect = svg.getBoundingClientRect();
        const careerRect = fromCareer.getBoundingClientRect();
        const gap = 8;    // clearance for arrows
        const padding = 8;    // padding inside choose-one boxes

        // 1) clear existing arrows + re-add arrowhead marker
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        {
            const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
            marker.setAttribute("id", "arrowhead");
            marker.setAttribute("markerUnits", "strokeWidth");
            marker.setAttribute("markerWidth", "10");
            marker.setAttribute("markerHeight", "7");
            marker.setAttribute("refX", "10");
            marker.setAttribute("refY", "3.5");
            marker.setAttribute("orient", "auto");
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arrow.setAttribute("d", "M0,0 L0,7 L10,3.5 Z");
            arrow.setAttribute("fill", "#000");
            marker.appendChild(arrow);
            defs.appendChild(marker);
            svg.appendChild(defs);
        }

        // 2) look up & sort credential elements
        const creds = credentialIds
            .map(id => document.getElementById(id))
            .filter(Boolean)
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

        if (!creds.length) return;  // nothing to draw

        // careers that need BOTH master‐AND‐doctor arrows _and_ the extra
        // bachelor→doctor straight line
        const dualLevelJobs = new Set([
            "agency-director",
            "chief-clinical-officer",
            "epidemiologist",
            "addiction-therapist",
            "client-rights-officer",
            "researcher",
            "clinical-supervisor"
        ]);

        const triLevelJobs = new Set([
            "therapist-counselor"
        ]);



        // 3) helpers
        function makeLine(x1, y1, x2, y2) {
            const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            p.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2}`);
            p.setAttribute("fill", "none");
            p.setAttribute("stroke", "#000");
            p.setAttribute("stroke-width", "1");
            p.setAttribute("marker-end", "url(#arrowhead)");
            svg.appendChild(p);
        }
        function makeCurve(x1, y1, x2, y2) {
            const dx = x2 - x1;
            const sign = dx >= 0 ? 1 : -1;

            // Try for a 60% bulge of the horizontal span:
            const idealBulge = dx * 0.6;
            // But never less than 60px
            const minBulge = 60;
            const bulge = Math.abs(idealBulge) < minBulge
                ? minBulge * sign
                : idealBulge;

            const cp1x = x1 + bulge;
            const cp2x = x2 - bulge;

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d",
                `M ${x1} ${y1}
               C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`
                    .replace(/\s+/g, " ")
            );
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000");
            path.setAttribute("stroke-width", "1");
            path.setAttribute("marker-end", "url(#arrowhead)");
            svg.appendChild(path);
        }


        function mid(el, side) {
            const r = el.getBoundingClientRect();
            switch (side) {
                case "right":
                    return {
                        x: r.right - svgRect.left + gap,
                        y: r.top + r.height / 2 - svgRect.top
                    };
                case "left":
                    return {
                        x: r.left - svgRect.left - gap,
                        y: r.top + r.height / 2 - svgRect.top
                    };
                case "bottom":
                    return {
                        x: r.left + r.width / 2 - svgRect.left,
                        y: r.bottom - svgRect.top + gap
                    };
                case "top":
                    return {
                        x: r.left + r.width / 2 - svgRect.left,
                        y: r.top - svgRect.top - gap
                    };
            }
        }

        // 4) exactly ONE credential → curve from RIGHT-middle → LEFT-middle
        if (creds.length === 1) {
            const A = mid(creds[0], "right");
            const B = mid(fromCareer, "left");
            makeCurve(A.x, A.y, B.x, B.y);
            return;
        }





        // ── SPECIAL CASE: Behavior Assistant ──
        if (fromCareer.id === "behavior-assistant") {
            // grab the two relevant elements
            const hs = document.getElementById("high-school-diploma-ged");
            const bt = document.getElementById("behavior-technician-training");

            // 1) HS → Behavior Assistant (curve)
            {
                const A = mid(hs, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }


            // 2) HS → Behavior Technician Training Program (straight)
            {
                const A = mid(hs, "bottom");
                const B = mid(bt, "top");
                makeLine(A.x, A.y, B.x, B.y);
            }

            // 3) Behavior Technician Training Program → Behavior Assistant (curve)
            {
                const A = mid(bt, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            return; // skip the generic 3+ logic
        }
        
        
        
               // ── SPECIAL CASE: Harm Reduction Specialist ──
if (fromCareer.id === "harm-reduction-specialist") {
    const hs = document.getElementById("high-school-diploma-ged");
    const credentials = [
        "chemical-dependency-training",
        "peer-supporter-training",
        "chw-training-program",
        "associate-behavioral-health-human-services",
        "associate-nursing",
        "bachelor-social-work-bsw",
        "bachelor-public-health",
        "bachelor-addiction-counseling"
    ].map(id => document.getElementById(id)).filter(Boolean);

    // Helper to draw a "CHOOSE ONE" box around the credentials
    function drawClusterBox(elems) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        elems.forEach(el => {
            const r = el.getBoundingClientRect();
            minX = Math.min(minX, r.left);
            minY = Math.min(minY, r.top);
            maxX = Math.max(maxX, r.right);
            maxY = Math.max(maxY, r.bottom);
        });
        const boxX = minX - svgRect.left - padding;
        const boxY = minY - svgRect.top - padding;
        const boxW = (maxX - minX) + padding * 2;
        const boxH = (maxY - minY) + padding * 2;

        // Draw the dashed box
        const rect = document.createElementNS(svg.namespaceURI, "rect");
        rect.setAttribute("x", boxX);
        rect.setAttribute("y", boxY);
        rect.setAttribute("width", boxW);
        rect.setAttribute("height", boxH);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", "#2980B9");
        rect.setAttribute("stroke-width", "1.5");
        rect.setAttribute("stroke-dasharray", "4 2");
        rect.classList.add("choose-one-box");
        svg.appendChild(rect);

        // Add the label
        const lbl = document.createElementNS(svg.namespaceURI, "text");
        lbl.setAttribute("x", boxX + 6);
        lbl.setAttribute("y", boxY - 6);
        lbl.setAttribute("text-anchor", "start");
        lbl.setAttribute("dominant-baseline", "alphabetic");
        lbl.setAttribute("fill", "#2980B9");
        lbl.setAttribute("font-size", "14px");
        lbl.setAttribute("font-weight", "600");
        lbl.classList.add("choose-one-label");
        lbl.textContent = "DGGREE OPTIONS";
        svg.appendChild(lbl);

        return {
            top: { x: boxX + boxW / 2, y: boxY - gap },
            right: { x: boxX + boxW + gap, y: boxY + boxH / 2 }
        };
    }

    // Draw the cluster box around the credentials
    const clusterPorts = drawClusterBox(credentials);

    // 1) HS → Credential Cluster
    {
        const A = mid(hs, "bottom");
        const B = clusterPorts.top;
        makeLine(A.x, A.y, B.x, B.y);
    }

    // 2) Credential Cluster → Harm Reduction Specialist (curve)
    {
        const A = clusterPorts.right;
        const B = mid(fromCareer, "left");
        makeCurve(A.x, A.y, B.x, B.y);
    }

    return; // Skip the generic logic
}





        // 5) exactly TWO credentials → straight bottom→top, then curved right→left
        if (creds.length === 2) {
            // first → second
            {
                const p0 = mid(creds[0], "bottom");
                const p1 = mid(creds[1], "top");
                makeLine(p0.x, p0.y, p1.x, p1.y);
            }
            // second → career
            {
                const A = mid(creds[1], "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }
            return;
        }



        // special “3-step” jobs that need HS→Bach cluster→Master cluster,
        // plus curved arrows from both master & bachelor→career
        const triClusterJobs = {
            "clinical-case-manager": {
                bachelors: [
                    "bachelor-education",
                    "bachelor-social-work-bsw"
                ],
                masters: [
                    "master-social-work-msw",
                    "master-science-nursing-msn",
                    "master-counseling",
                    "master-art-therapy",
                    "master-marriage-family-therapy",
                    "master-addiction-counseling"
                ]
            },
            "program-manager-supervisor": {
                bachelors: [
                    "bachelor-early-childhood",
                    "bachelor-public-health",
                    "bachelor-art-therapy",
                    "bachelor-behavioral-science",
                    "bachelor-social-work-bsw",
                    "bachelor-science-nursing-bsn",
                    "bachelor-music-therapy",
                    "bachelor-psychology"
                ],
                masters: [
                    "master-addiction-counseling",
                    "master-science-nursing-msn",
                    "master-social-work-msw",
                    "master-behavioral-science",
                    "master-counseling",
                    "master-art-therapy",
                    "master-marriage-family-therapy",
                    "master-education"
                ]
            },
            "policy-advocate-analyst": {
                bachelors: [
                    "bachelor-public-health",
                    "bachelor-social-work-bsw",
                    "bachelor-psychology",
                    "bachelor-behavioral-science"
                ],
                masters: [
                    "master-addiction-counseling",
                    "master-science-nursing-msn",
                    "master-social-work-msw",
                    "master-behavioral-science",
                    "master-counseling",
                    "master-art-therapy",
                    "master-education"
                ]
            },
            "psychiatric-mental-health-nurse": {
                bachelors: [
                    "bachelor-science-nursing-bsn",
                    "bsn-psychiatric-mental-health"
                ],
                masters: [
                    "msn-psychiatric-mental-health"
                ]
            },

            "care-manager-coordinator": {
                bachelors: [
                    "bachelor-early-childhood",
                    "bachelor-education",
                    "bachelor-art-therapy",
                    "bachelor-behavioral-science",
                    "bachelor-social-work-bsw",
                    "bachelor-science-nursing-bsn",
                    "bachelor-music-therapy",
                    "bachelor-psychology",
                    "bachelor-addiction-counseling"
                ],
                masters: [
                    "master-science-nursing-msn"
                ]
            }
        };

        

        // ── SPECIAL CASE: Clinical Case Manager / Program Manager / Policy Advocate ──
        if (triClusterJobs[fromCareer.id]) {
            const cfg = triClusterJobs[fromCareer.id];
            const hs = document.getElementById("high-school-diploma-ged");
            const bachelors = cfg.bachelors.map(id => document.getElementById(id)).filter(Boolean);
            const masters = cfg.masters.map(id => document.getElementById(id)).filter(Boolean);

            // drawBox clusters
            function drawClusterBox(elems) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                elems.forEach(el => {
                    const r = el.getBoundingClientRect();
                    minX = Math.min(minX, r.left);
                    minY = Math.min(minY, r.top);
                    maxX = Math.max(maxX, r.right);
                    maxY = Math.max(maxY, r.bottom);
                });
                const boxX = minX - svgRect.left - padding;
                const boxY = minY - svgRect.top - padding;
                const boxW = (maxX - minX) + padding * 2;
                const boxH = (maxY - minY) + padding * 2;
                // dashed rect
                const rect = document.createElementNS(svg.namespaceURI, "rect");
                rect.setAttribute("x", boxX); rect.setAttribute("y", boxY);
                rect.setAttribute("width", boxW); rect.setAttribute("height", boxH);
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke", "#2980B9");
                rect.setAttribute("stroke-width", "1.5");
                rect.setAttribute("stroke-dasharray", "4 2");
                rect.classList.add("choose-one-box");
                svg.appendChild(rect);
                // label
                const lbl = document.createElementNS(svg.namespaceURI, "text");
                lbl.setAttribute("x", boxX + 6); lbl.setAttribute("y", boxY - 6);
                lbl.setAttribute("fill", "#2980B9");
                lbl.setAttribute("font-size", "14");
                lbl.setAttribute("font-weight", "600");
                lbl.textContent = "DEGREE OPTIONS";
                svg.appendChild(lbl);
                return {
                    top: { x: boxX + boxW / 2, y: boxY - gap },
                    bottom: { x: boxX + boxW / 2, y: boxY + boxH + gap },
                    right: { x: boxX + boxW + gap, y: boxY + boxH / 2 }
                };
            }

            function getClusterPorts(elems) {
                if (elems.length > 1) {
                    return drawClusterBox(elems);
                } else {
                    // no box: just return the element’s midpoints
                    const el = elems[0];
                    return {
                        top: mid(el, "top"),
                        bottom: mid(el, "bottom"),
                        right: mid(el, "right")
                    };
                }
            }

            const bBox = getClusterPorts(bachelors);
            const mBox = getClusterPorts(masters);

            // 1) HS → bachelor cluster
            { const A = mid(hs, "bottom"), B = bBox.top; makeLine(A.x, A.y, B.x, B.y); }
            // 2) bachelor → master cluster
            { const A = bBox.bottom, B = mBox.top; makeLine(A.x, A.y, B.x, B.y); }
            // 3) master → career (curve)
            { const A = mBox.right, B = mid(fromCareer, "left"); makeCurve(A.x, A.y, B.x, B.y); }
            // 4) bachelor → career (curve)
            { const A = bBox.right, B = mid(fromCareer, "left"); makeCurve(A.x, A.y, B.x, B.y); }

            return;  // skip the generic ≥3 logic
        }


        // ── SPECIAL CASE: Substance Use Disorder Counselor ──
        if (fromCareer.id === "substance-abuse-counselor") {
            const hs = document.getElementById("high-school-diploma-ged");
            const assoc = [
                "associate-behavioral-health-human-services",
                "associate-nursing"
            ].map(id => document.getElementById(id)).filter(Boolean);
            const bachelors = [
                "bachelor-public-health",
                "bachelor-art-therapy",
                "bachelor-behavioral-science",
                "bachelor-social-work-bsw",
                "bachelor-science-nursing-bsn",
                "bachelor-psychology",
                "bachelor-addiction-counseling"
            ].map(id => document.getElementById(id)).filter(Boolean);

            function drawClusterBox(elems) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                elems.forEach(el => {
                    const r = el.getBoundingClientRect();
                    minX = Math.min(minX, r.left);
                    minY = Math.min(minY, r.top);
                    maxX = Math.max(maxX, r.right);
                    maxY = Math.max(maxY, r.bottom);
                });
                const boxX = minX - svgRect.left - padding;
                const boxY = minY - svgRect.top - padding;
                const boxW = (maxX - minX) + padding * 2;
                const boxH = (maxY - minY) + padding * 2;

                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", boxX);
                rect.setAttribute("y", boxY);
                rect.setAttribute("width", boxW);
                rect.setAttribute("height", boxH);
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke", "#2980B9");
                rect.setAttribute("stroke-width", "1.5");
                rect.setAttribute("stroke-dasharray", "4 2");
                rect.classList.add("choose-one-box");
                svg.appendChild(rect);

                const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
                lbl.setAttribute("x", boxX + 6);
                lbl.setAttribute("y", boxY - 6);
                lbl.setAttribute("text-anchor", "start");
                lbl.setAttribute("dominant-baseline", "alphabetic");
                lbl.setAttribute("fill", "#2980B9");
                lbl.setAttribute("font-size", "14px");
                lbl.setAttribute("font-weight", "600");
                lbl.classList.add("choose-one-label");
                lbl.textContent = "DEGREE OPTIONS";
                svg.appendChild(lbl);

                return {
                    top: { x: boxX + boxW / 2, y: boxY - gap },
                    right: { x: boxX + boxW + gap, y: boxY + boxH / 2 }
                };
            }

            // draw both boxes
            const aBox = drawClusterBox(assoc);
            const bBox = drawClusterBox(bachelors);

            // 1) HS → both boxes
            [aBox.top, bBox.top].forEach(pt => {
                const A = mid(hs, "bottom");
                makeLine(A.x, A.y, pt.x, pt.y);
            });

            // 2) both boxes → counselor (curved)
            [aBox.right, bBox.right].forEach(pt => {
                const B = mid(fromCareer, "left");
                makeCurve(pt.x, pt.y, B.x, B.y);
            });

            return;  // skip the generic ≥3 logic
        }


        // ── SPECIAL CASE: Case Manager ──
        if (fromCareer.id === "case-manager") {
            // grab elements
            const hs = document.getElementById("high-school-diploma-ged");
            const chem = document.getElementById("chemical-dependency-training");
            const assocEls = [
                document.getElementById("associate-behavioral-health-human-services"),
                document.getElementById("associate-nursing")
            ].filter(Boolean);

            // helper to draw a choose-one box around assocEls
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            assocEls.forEach(el => {
                const r = el.getBoundingClientRect();
                minX = Math.min(minX, r.left);
                minY = Math.min(minY, r.top);
                maxX = Math.max(maxX, r.right);
                maxY = Math.max(maxY, r.bottom);
            });
            const boxX = minX - svgRect.left - padding;
            const boxY = minY - svgRect.top - padding;
            const boxW = (maxX - minX) + padding * 2;
            const boxH = (maxY - minY) + padding * 2;

            // draw associate box
            const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            box.setAttribute("x", boxX);
            box.setAttribute("y", boxY);
            box.setAttribute("width", boxW);
            box.setAttribute("height", boxH);
            box.setAttribute("fill", "none");
            box.setAttribute("stroke", "#2980B9");
            box.setAttribute("stroke-width", "1.5");
            box.setAttribute("stroke-dasharray", "4 2");
            box.classList.add("choose-one-box");
            svg.appendChild(box);

            // label
            const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
            lbl.setAttribute("x", boxX + 6);
            lbl.setAttribute("y", boxY - 6);
            lbl.setAttribute("text-anchor", "start");
            lbl.setAttribute("dominant-baseline", "alphabetic");
            lbl.setAttribute("fill", "#2980B9");
            lbl.setAttribute("font-size", "14px");
            lbl.setAttribute("font-weight", "600");
            lbl.classList.add("choose-one-label");
            lbl.textContent = "DEGREE OPTIONS";
            svg.appendChild(lbl);

            // arrow helpers in scope: makeLine, makeCurve, mid()

            // 1) HS → Chemical Dependency Training
            {
                const A = mid(hs, "bottom");
                const B = mid(chem, "top");
                makeLine(A.x, A.y, B.x, B.y);
            }

            // 2) HS → Associate-Degree box
            {
                const A = mid(hs, "bottom");
                const B = { x: boxX + boxW / 2, y: boxY - gap };
                makeLine(A.x, A.y, B.x, B.y);
            }

            // 3) Chemical Dependency Training → Case Manager (curve)
            {
                const A = mid(chem, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            // 4) Associate-Degree box → Case Manager (curve)
            {
                const A = { x: boxX + boxW + gap, y: boxY + boxH / 2 };
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            return;  // skip the generic 3+ logic
        }


        // ── SPECIAL CASE for Therapist/Counselor ──
        // ── SPECIAL CASE: Therapist/Counselor ──
        if (fromCareer.id === "therapist-counselor") {
            const hs = document.getElementById("high-school-diploma-ged");
            const bsw = document.getElementById("bachelor-social-work-bsw");
            const any = document.getElementById("bachelor-any-field");

            // collect all master options
            const masters = [
                "master-social-work-msw",
                "master-counseling",
                "master-art-therapy",
                "master-marriage-family-therapy"
            ].map(id => document.getElementById(id)).filter(Boolean);

            // single PhD credential
            const phdEl = document.getElementById("phd-psychology");

            // helper: draw a choose-one box around a set of els and return its ports
            function drawClusterBox(els) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                els.forEach(el => {
                    const r = el.getBoundingClientRect();
                    minX = Math.min(minX, r.left);
                    minY = Math.min(minY, r.top);
                    maxX = Math.max(maxX, r.right);
                    maxY = Math.max(maxY, r.bottom);
                });
                const boxX = minX - svgRect.left - padding;
                const boxY = minY - svgRect.top - padding;
                const boxW = maxX - minX + padding * 2;
                const boxH = maxY - minY + padding * 2;

                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", boxX);
                rect.setAttribute("y", boxY);
                rect.setAttribute("width", boxW);
                rect.setAttribute("height", boxH);
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke", "#2980B9");
                rect.setAttribute("stroke-width", "1.5");
                rect.setAttribute("stroke-dasharray", "4 2");
                rect.classList.add("choose-one-box");
                svg.appendChild(rect);

                const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
                lbl.setAttribute("x", boxX + 6);
                lbl.setAttribute("y", boxY - 6);
                lbl.setAttribute("text-anchor", "start");
                lbl.setAttribute("dominant-baseline", "alphabetic");
                lbl.setAttribute("fill", "#2980B9");
                lbl.setAttribute("font-size", "14px");
                lbl.setAttribute("font-weight", "600");
                lbl.classList.add("choose-one-label");
                lbl.textContent = "DEGREE OPTIONS";
                svg.appendChild(lbl);

                return {
                    top: { x: boxX + boxW / 2, y: boxY - gap },
                    right: { x: boxX + boxW + gap, y: boxY + boxH / 2 },
                    bottom: { x: boxX + boxW / 2, y: boxY + boxH + gap }
                };
            }

            // draw bachelor & master boxes
            const bBox = drawClusterBox([bsw, any]);
            const mBox = drawClusterBox(masters);

            // 1) HS → bachelor box
            {
                const A = mid(hs, "bottom");
                const B = bBox.top;
                makeLine(A.x, A.y, B.x, B.y);
            }

            // 2) BSW → Therapist/Counselor (curve)
            {
                const A = mid(bsw, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            // 3→4) bachelor CLUSTER → master box AND → PhD element
            {
                const A = bBox.bottom;              // bottom-middle of the bachelor cluster
                // → master cluster
                makeLine(A.x, A.y, mBox.top.x, mBox.top.y);

                // → single PhD element (if present)
                if (phdEl) {
                    const P = mid(phdEl, "top");      // top-middle of the PhD LI
                    makeLine(A.x, A.y, P.x, P.y);
                }
            }


            // 5) master box → Therapist/Counselor (curve)
            {
                const A = mBox.right;
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            // 6) PhD element → Therapist/Counselor (curve)
            if (phdEl) {
                const A = mid(phdEl, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            return;  // skip the generic ≥3 logic
        }

        // ──END SPECIAL CASE for Therapist/Counselor ──





        // special case for Occupational Therapist pathway
        if (fromCareer.id === "occupational-therapist") {
            // grab the four steps
            const hs = document.getElementById("high-school-diploma-ged");
            const assoc = document.getElementById("occupational-therapy-assistant-associate");
            const bach = document.getElementById("bachelor-any-field");
            const master = document.getElementById("master-occupational-therapy");

            // helper mid-point in SVG coords
            function mid(el, side) {
                const r = el.getBoundingClientRect();
                switch (side) {
                    case "bottom": return {
                        x: r.left + r.width / 2 - svgRect.left,
                        y: r.bottom - svgRect.top + gap
                    };
                    case "top": return {
                        x: r.left + r.width / 2 - svgRect.left,
                        y: r.top - svgRect.top - gap
                    };
                    case "right": return {
                        x: r.right - svgRect.left + gap,
                        y: r.top + r.height / 2 - svgRect.top
                    };
                    case "left": return {
                        x: r.left - svgRect.left - gap,
                        y: r.top + r.height / 2 - svgRect.top
                    };
                }
            }

            // draw straight line
            function line(x1, y1, x2, y2) {
                const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                p.setAttribute("d", `M ${x1} ${y1} L ${x2} ${y2}`);
                p.setAttribute("fill", "none");
                p.setAttribute("stroke", "#000");
                p.setAttribute("stroke-width", "1");
                p.setAttribute("marker-end", "url(#arrowhead)");
                svg.appendChild(p);
            }
            // draw smooth cubic curve
            function curve(x1, y1, x2, y2) {
                const mx = x1 + (x2 - x1) * 0.5;
                const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                p.setAttribute("d",
                    `M ${x1} ${y1}
         C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`.replace(/\s+/g, " ")
                );
                p.setAttribute("fill", "none");
                p.setAttribute("stroke", "#000");
                p.setAttribute("stroke-width", "1");
                p.setAttribute("marker-end", "url(#arrowhead)");
                svg.appendChild(p);
            }

            // ─── draw the “CHOOSE ONE” box around assoc & bach ───
            const els = [assoc, bach];
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            els.forEach(el => {
                const r = el.getBoundingClientRect();
                minX = Math.min(minX, r.left);
                minY = Math.min(minY, r.top);
                maxX = Math.max(maxX, r.right);
                maxY = Math.max(maxY, r.bottom);
            });
            const boxX = minX - svgRect.left - padding;
            const boxY = minY - svgRect.top - padding;
            const boxW = (maxX - minX) + padding * 2;
            const boxH = (maxY - minY) + padding * 2;

            // box
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", boxX);
            rect.setAttribute("y", boxY);
            rect.setAttribute("width", boxW);
            rect.setAttribute("height", boxH);
            rect.setAttribute("fill", "none");
            rect.setAttribute("stroke", "#2980B9");
            rect.setAttribute("stroke-width", "1.5");
            rect.setAttribute("stroke-dasharray", "4 2");
            rect.classList.add("choose-one-box");
            svg.appendChild(rect);

            // label
            const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
            lbl.setAttribute("x", boxX + 6);
            lbl.setAttribute("y", boxY - 6);
            lbl.setAttribute("text-anchor", "start");
            lbl.setAttribute("dominant-baseline", "alphabetic");
            lbl.setAttribute("fill", "#2980B9");
            lbl.setAttribute("font-size", "14px");
            lbl.setAttribute("font-weight", "600");
            lbl.classList.add("choose-one-label");
            lbl.textContent = "DEGREE OPTIONS";
            svg.appendChild(lbl);

            // ─── arrows ───
            // HS → box
            {
                const A = mid(hs, "bottom");
                const B = { x: boxX + boxW / 2, y: boxY - gap };
                line(A.x, A.y, B.x, B.y);
            }
            // box → master
            {
                const A = { x: boxX + boxW / 2, y: boxY + boxH + gap };
                const B = mid(master, "top");
                line(A.x, A.y, B.x, B.y);
            }
            // master → OT (curved right→left)
            {
                const A = mid(master, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }

            return;  // skip your normal ≥3 logic
        }

        //END OF special case for Occupational Therapist pathway


        // 6) THREE+ credentials → existing “group by degree” logic,
        //    chaining right→left for the final arrow

        // A) peel off first cred (HS/GED)
        const firstCred = creds.shift();

        // B) cluster the rest by their degree‐row container
        const map = {}, order = [];
        creds.forEach(li => {
            const row = li.closest("[class*='certificate-col-']");
            const key = row
                ? [...row.classList].find(c => c.startsWith("certificate-col-"))
                : "__nogroup__";
            if (!map[key]) {
                map[key] = [];
                order.push(key);
            }
            map[key].push(li);
        });

        // C) for each cluster build anchors & draw box+label if >1
        const nodes = order.map(key => {
            const items = map[key].sort(
                (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
            );
            if (items.length > 1) {
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                items.forEach(el => {
                    const r = el.getBoundingClientRect();
                    minX = Math.min(minX, r.left);
                    minY = Math.min(minY, r.top);
                    maxX = Math.max(maxX, r.right);
                    maxY = Math.max(maxY, r.bottom);
                });
                const boxX = minX - svgRect.left - padding;
                const boxY = minY - svgRect.top - padding;
                const boxW = (maxX - minX) + padding * 2;
                const boxH = (maxY - minY) + padding * 2;

                // dashed box
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", boxX);
                rect.setAttribute("y", boxY);
                rect.setAttribute("width", boxW);
                rect.setAttribute("height", boxH);
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke", "#2980B9");
                rect.setAttribute("stroke-width", "1.5");
                rect.setAttribute("stroke-dasharray", "4 2");
                rect.classList.add("choose-one-box");
                // rect.dataset.level = key;
                svg.appendChild(rect);

                // label
                const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
                lbl.setAttribute("x", boxX + 6);
                lbl.setAttribute("y", boxY - 6);
                lbl.setAttribute("text-anchor", "start");
                lbl.setAttribute("dominant-baseline", "alphabetic");
                lbl.setAttribute("fill", "#2980B9");
                lbl.setAttribute("font-size", "14px");
                lbl.setAttribute("font-weight", "600");
                lbl.classList.add("choose-one-label");
                lbl.textContent = "DEGREE OPTIONS";
                svg.appendChild(lbl);

                return {
                    top: { x: boxX + boxW / 2, y: boxY - gap },
                    bottom: { x: boxX + boxW / 2, y: boxY + boxH + gap },
                    right: { x: boxX + boxW + gap, y: boxY + boxH / 2 }
                };
            } else {
                const r = items[0].getBoundingClientRect();
                const cx = r.left + r.width / 2 - svgRect.left;
                return {
                    top: { x: cx, y: r.top - svgRect.top - gap },
                    bottom: { x: cx, y: r.bottom - svgRect.top + gap },
                    right: {
                        x: r.right - svgRect.left + gap,
                        y: r.top + r.height / 2 - svgRect.top
                    }
                };
            }
        });

        // D) chain straight arrows: firstCred.bottom → first cluster.top
        // D') HS/GED → bachelor cluster
        {
            const p = mid(firstCred, "bottom");
            const q = nodes[0].top;
            makeLine(p.x, p.y, q.x, q.y);
        }

        // now chain between clusters, except for our special jobs skip master→doctorate
        if (dualLevelJobs.has(fromCareer.id)) {
            // 1) bachelor → master (if present)
            if (nodes.length >= 2) {
                const A = nodes[0].bottom;
                const B = nodes[1].top;
                makeLine(A.x, A.y, B.x, B.y);
            }
            // 2) bachelor → doctorate
            if (nodes.length >= 3) {
                const A = nodes[0].bottom;
                const D = nodes[nodes.length - 1].top;
                makeLine(A.x, A.y, D.x, D.y);
            }
        } else {
            // generic: link every cluster in sequence
            for (let i = 0; i < nodes.length - 1; i++) {
                const a = nodes[i].bottom, b = nodes[i + 1].top;
                makeLine(a.x, a.y, b.x, b.y);
            }
        }

        //    final: curved from last cluster.right → career.left
        {
            const A = nodes[nodes.length - 1].right;
            const B = mid(fromCareer, "left");
            makeCurve(A.x, A.y, B.x, B.y);
        }
        // ── FOR DUAL-LEVEL JOBS, ALSO DRAW FROM MASTER’s cluster → career ←─
        if (dualLevelJobs.has(fromCareer.id)) {
            const masterIndex = nodes.length - 2;
            if (masterIndex >= 0) {
                const M = nodes[masterIndex].right;
                const C = mid(fromCareer, "left");
                makeCurve(M.x, M.y, C.x, C.y);
            }
            if (dualLevelJobs.has(fromCareer.id)) {
                // nodes[0] is always the bachelor-level cluster
                // nodes[n-1] is the doctorate-level cluster
                const B = nodes[0].bottom;
                const D = nodes[nodes.length - 1].top;
                makeLine(B.x, B.y, D.x, D.y);
            }
        }

        // ── EXTRA tri-level arrows (Bachelor + Master + PhD) ──
        if (triLevelJobs.has(fromCareer.id)) {
            const Bnode = nodes[nodes.length - 3].right;  // Bachelor cluster
            const Mnode = nodes[nodes.length - 2].right;  // Master cluster
            const Cpt = nodes[nodes.length - 1].right;  // Doctorate cluster
            const T = mid(fromCareer, "left");

            // you already drew the PhD→career above, but if you want to repeat:
            // makeCurve(Cpt.x, Cpt.y, T.x, T.y);

            // add the Master→career and Bachelor→career bumps:
            makeCurve(Mnode.x, Mnode.y, T.x, T.y);
            makeCurve(Bnode.x, Bnode.y, T.x, T.y);
        }

        // ── SPECIAL CASE: add lone BSW → Social Worker arrow ──
        if (fromCareer.id === "social-worker") {
            // grab the BSW element
            const bswEl = document.getElementById("bachelor-social-work-bsw");
            if (bswEl) {
                const A = mid(bswEl, "right");
                const B = mid(fromCareer, "left");
                makeCurve(A.x, A.y, B.x, B.y);
            }
        }


    }









    // Add event listeners to credentials
    credentials.forEach((credential) => {
        credential.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click event from propagating to the document

            // Reset all elements
            resetUI();

            // Highlight the selected credential and disable others
            credential.classList.add("selected");
            credentials.forEach((c) => {
                if (c !== credential) {
                    c.classList.add("disabled");
                }
            });

            // Highlight related careers and disable others
            highlightRelatedItems(credential, careers, "related"); // Highlight related careers
            careers.forEach((c) => {
                if (!c.classList.contains("selected")) {
                    // Disable unselected careers
                    c.classList.add("disabled");
                }
            });
        });
    });

    // Add event listeners to careers
    careers.forEach((career) => {
        career.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click event from propagating to the document

            // Reset all elements
            resetUI();

            // Highlight the selected career and disable others
            career.classList.add("selected");
            careers.forEach((c) => {
                if (c !== career) {
                    c.classList.add("disabled");
                }
            });

            // Retrieve related credentials from the data-related attribute
            const relatedCredentials = career.dataset.related.split(",");

            // Draw the circular arrows from career to credentials and back
            drawCircularArrows(career, relatedCredentials);

            // Highlight related credentials and disable others
            relatedCredentials.forEach((credentialId) => {
                const credential = document.getElementById(credentialId);
                if (credential) {
                    credential.classList.add("selected");
                }
            });

            credentials.forEach((c) => {
                if (!c.classList.contains("selected")) {
                    c.classList.add("disabled");
                }
            });
        });
    });

    function highlightRelatedItems(selectedItem, _items, dataAttribute) {
        const relatedItems = selectedItem.dataset[dataAttribute].split(",");

        // Highlight related items
        relatedItems.forEach((itemId) => {
            const itemElement = document.getElementById(itemId);
            if (itemElement) {
                itemElement.classList.remove("disabled");
                itemElement.classList.add("selected");
                if (selectedItem.closest(".credential")) {
                    drawArrowFromCertificateToCareer(selectedItem, itemElement);
                } else {
                    drawCircularArrows(selectedItem, relatedItems);
                }
            }
        });
    }


    // Function to realign the language selection box
    // function positionLanguageSelectionBox() {
    //     const tableRect = tableContainer.getBoundingClientRect();
    //     languageSelectionBox.style.position = 'absolute';
    //     languageSelectionBox.style.top = `${tableRect.top + window.scrollY - languageSelectionBox.offsetHeight - 10}px`;
    //     languageSelectionBox.style.left = `${tableRect.right + window.scrollX - languageSelectionBox.offsetWidth}px`;
    // }

    // Initial positioning and on resize
    // positionLanguageSelectionBox();
    // window.addEventListener("resize", positionLanguageSelectionBox);

    // Reposition on language change
    // const observer = new MutationObserver(positionLanguageSelectionBox);
    // observer.observe(document.body, { attributes: true, childList: true, subtree: true });


    // document.addEventListener("click", resetUI);

    // Add event listener to reset popup when clicking anywhere on the window
    window.addEventListener("click", () => {
        resetUI();
        resetPopup();
    });

    // Add this event listener to the document to close the popup when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !event.target.closest(".popup") &&
            !event.target.closest(".credential li") &&
            !event.target.closest(".career li")
        ) {
            resetUI();
        }
    });
    // Add event listener for window resize
    // window.addEventListener("resize", resetUI);
    // window.addEventListener("resize", resetPopup);
});
