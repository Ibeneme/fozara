import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    // Overall container with dark green background and initial hidden state
    <div className="min-h-screen bg-[#051a0e] text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Text content container with slide-in animation */}
        <div className="space-y-2 animate-slide-down">
          <h1 className="text-8xl font-black text-[#E0EC27] tracking-wider">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Page not found
          </h2>
          <p className="text-emerald-300/80 text-sm">
            The page you are looking for doesn't exist or has been moved to
            another URL.
          </p>
        </div>

        {/* Button container with a slightly delayed fade-in animation */}
        <div className="pt-4 animate-fade-in-delayed">
          <Link
            to="/"
            // Uses Tailwind's transition-colors for hover effect
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#E0EC27] text-[#051a0e] font-semibold hover:bg-[#d2df1b] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* ==============================================================================
          TAILWIND CSS KEYFRAME ANIMATIONS CONFIGURATION
          ==============================================================================
          Add these keyframes to your `tailwind.config.js` file under `theme.extend.keyframes`
          and the utilities under `theme.extend.animation`.
          
          If you are using standard CSS, add the @keyframes block to your global stylesheet.
          
          Reference: https://tailwindcss.com/docs/animation#arbitrary-values
      ============================================================================== */}
      <style>
        {`
          /* Define the keyframes */
          @keyframes slideDown {
            from {
              transform: translateY(-30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Apply animation classes manually for a copy-paste component,
             or define them in tailwind.config.js for reuse. */
          .animate-slide-down {
            animation: slideDown 0.6s ease-out forwards;
          }

          .animate-fade-in-delayed {
            animation: fadeIn 0.6s ease-out 0.3s forwards;
            opacity: 0; /* Start hidden */
          }
        `}
      </style>
    </div>
  );
}
