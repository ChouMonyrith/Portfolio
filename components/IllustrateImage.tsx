import React from "react";

function IllustrateImage() {
  return (
    <div className="illustration-wrap">
      <svg viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .float-item {
            animation: float-anim 4s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .float-item-delayed {
            animation: float-anim-delayed 4.5s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .float-item-fast {
            animation: float-anim-fast 3.5s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .eyes-group {
            animation: blink-anim 4.5s infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .left-hand {
            animation: type-left 0.4s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .right-hand {
            animation: type-right 0.4s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .code-line-1 { animation: code-pulse 2s infinite alternate; }
          .code-line-2 { animation: code-pulse 2s infinite alternate 0.5s; }
          .code-line-3 { animation: code-pulse 2s infinite alternate 1s; }
          .code-line-4 { animation: code-pulse 2s infinite alternate 1.5s; }

          @keyframes float-anim {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes float-anim-delayed {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes float-anim-fast {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes blink-anim {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
          @keyframes type-left {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-2px) rotate(-1deg); }
          }
          @keyframes type-right {
            0%, 100% { transform: translateY(-2px) rotate(1deg); }
            50% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes code-pulse {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `}</style>

        <rect x="40" y="300" width="320" height="8" rx="2" fill="#000" />
        <rect x="60" y="308" width="12" height="80" rx="2" fill="#000" />
        <rect x="328" y="308" width="12" height="80" rx="2" fill="#000" />

        {/* -- chair legs -- */}
        <rect x="140" y="340" width="10" height="70" rx="2" fill="#000" />
        <rect x="250" y="340" width="10" height="70" rx="2" fill="#000" />
        <rect x="130" y="400" width="140" height="10" rx="2" fill="#000" />

        {/* -- chair seat -- */}
        <rect x="120" y="310" width="160" height="34" rx="6" fill="#000" />
        {/* -- chair back -- */}
        <rect
          x="122"
          y="220"
          width="156"
          height="90"
          rx="6"
          stroke="#000"
          strokeWidth="8"
          fill="#fff"
        />
        <line
          x1="155"
          y1="228"
          x2="155"
          y2="308"
          stroke="#000"
          strokeWidth="4"
        />
        <line
          x1="200"
          y1="228"
          x2="200"
          y2="308"
          stroke="#000"
          strokeWidth="4"
        />
        <line
          x1="245"
          y1="228"
          x2="245"
          y2="308"
          stroke="#000"
          strokeWidth="4"
        />

        {/* -- torso -- */}
        <rect
          x="148"
          y="155"
          width="104"
          height="100"
          rx="18"
          stroke="#000"
          strokeWidth="7"
          fill="#fff"
        />

        {/* -- arms -- */}
        {/* -- left arm -- */}
        <path
          d="M148 185 Q100 200 90 255"
          stroke="#000"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* -- right arm -- */}
        <path
          d="M252 185 Q300 200 310 255"
          stroke="#000"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* -- hands on laptop -- */}
        <g className="left-hand">
          <ellipse
            cx="90"
            cy="264"
            rx="18"
            ry="11"
            stroke="#000"
            strokeWidth="6"
            fill="#fff"
          />
        </g>
        <g className="right-hand">
          <ellipse
            cx="310"
            cy="264"
            rx="18"
            ry="11"
            stroke="#000"
            strokeWidth="6"
            fill="#fff"
          />
        </g>

        {/* -- legs -- */}
        <path
          d="M165 255 L155 310"
          stroke="#000"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M235 255 L245 310"
          stroke="#000"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* -- neck -- */}
        <rect
          x="186"
          y="110"
          width="28"
          height="46"
          rx="8"
          stroke="#000"
          strokeWidth="6"
          fill="#fff"
        />

        {/* -- head -- */}
        <ellipse
          cx="200"
          cy="88"
          rx="46"
          ry="50"
          stroke="#000"
          strokeWidth="7"
          fill="#fff"
        />

        {/* -- face details -- */}
        {/* -- eyes -- */}
        <g className="eyes-group">
          <ellipse cx="183" cy="82" rx="5" ry="6" fill="#000" />
          <ellipse cx="217" cy="82" rx="5" ry="6" fill="#000" />
        </g>
        {/* -- smile -- */}
        <path
          d="M185 102 Q200 116 215 102"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* -- hair -- */}
        <path
          d="M155 75 Q160 38 200 36 Q240 38 245 75"
          stroke="#000"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M155 74 Q148 62 152 50 Q156 40 165 38"
          stroke="#000"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M245 74 Q252 62 248 50 Q244 40 235 38"
          stroke="#000"
          strokeWidth="5"
          fill="none"
        />

        {/* -- laptop body -- */}
        <rect
          x="80"
          y="255"
          width="240"
          height="46"
          rx="4"
          stroke="#000"
          strokeWidth="6"
          fill="#fff"
        />
        {/* -- laptop screen -- */}
        <path
          d="M108 255 L126 185 L274 185 L292 255"
          stroke="#000"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="#fff"
        />
        <rect
          x="134"
          y="194"
          width="132"
          height="52"
          rx="2"
          stroke="#000"
          strokeWidth="3"
          fill="#000"
        />
        {/* -- screen content lines -- */}
        <line
          className="code-line-1"
          x1="144"
          y1="204"
          x2="224"
          y2="204"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          className="code-line-2"
          x1="144"
          y1="214"
          x2="200"
          y2="214"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          className="code-line-3"
          x1="144"
          y1="224"
          x2="216"
          y2="224"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          className="code-line-4"
          x1="144"
          y1="234"
          x2="190"
          y2="234"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* -- trackpad -- */}
        <rect
          x="177"
          y="265"
          width="46"
          height="26"
          rx="3"
          stroke="#000"
          strokeWidth="3"
          fill="#f0f0f0"
        />

        {/* -- floating code snippets decoration -- */}
        <g opacity="0.13">
          <g className="float-item">
            <text
              x="330"
              y="130"
              fontFamily="monospace"
              fontSize="11"
              fill="#000"
            >
              {"</>"}
            </text>
          </g>
          <g className="float-item-delayed">
            <text
              x="20"
              y="170"
              fontFamily="monospace"
              fontSize="11"
              fill="#000"
            >
              {"{}"}
            </text>
          </g>
          <g className="float-item-fast">
            <text
              x="340"
              y="200"
              fontFamily="monospace"
              fontSize="9"
              fill="#000"
            >
              fn()
            </text>
          </g>
          <g className="float-item-delayed">
            <text
              x="18"
              y="260"
              fontFamily="monospace"
              fontSize="9"
              fill="#000"
            >
              ==
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default IllustrateImage;
