import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

const Modal = ({ show, onClose, content }) => {
  
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-xl max-h-[90vh] overflow-y-auto"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={onClose}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2 text-indigo-600">
              {content.label}
            </h2>
            <p className="text-sm text-gray-600 mb-4 italic">{content.desc}</p>

            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p>
                <strong>📈 Time Complexity:</strong> {content.time || 'N/A'}
              </p>
              <p>
                <strong>🧠 Space Complexity:</strong> {content.space || 'N/A'}
              </p>
              <p>
                <strong>✅ Best Case:</strong> {content.best || 'N/A'}
              </p>
              <p>
                <strong>❌ Worst Case:</strong> {content.worst || 'N/A'}
              </p>
              <p>
                <strong>💾 Stable:</strong>{' '}
                {typeof content.stable === 'boolean'
                  ? content.stable
                    ? 'Yes'
                    : 'No'
                  : 'N/A'}
              </p>
              {content.docs && (
                <p>
                  <strong>📚 Read More:</strong>{' '}
                  <a
                    href={content.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Documentation
                  </a>
                </p>
              )}
            </div>

            {content.code && (
              <div className="text-sm">
                <h3 className="font-semibold mb-2">🧩 Example Code:</h3>
                <SyntaxHighlighter
                  language="javascript"
                  style={oneDark}
                  wrapLines
                  wrapLongLines
                  showLineNumbers
                >
                  {content.code}
                </SyntaxHighlighter>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
