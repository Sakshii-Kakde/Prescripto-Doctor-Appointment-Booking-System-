import React from "react";

const ScrollButtons = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed z-50 flex items-center justify-center w-10 h-10 text-xl text-white transition rounded-full shadow-lg bg-primary top-24 right-6 hover:scale-110"
        title="Scroll to Top"
      >
        ↑
      </button>

      {/* Scroll To Bottom Button */}
      <button
        onClick={scrollToBottom}
        className="fixed z-50 flex items-center justify-center w-10 h-10 text-xl text-white transition rounded-full shadow-lg bg-primary bottom-6 right-6 hover:scale-110"
        title="Scroll to Bottom"
      >
        ↓
      </button>
    </>
  );
};

export default ScrollButtons; 