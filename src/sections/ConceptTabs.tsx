
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const tabContent = [
  {
    title: "Tab 1",
    content: "This is the content for Tab 1. It smoothly fades in and out.",
  },
  {
    title: "Tab 2",
    content: "Here's Tab 2 content. Notice the nice transition effect.",
  },
  {
    title: "Tab 3",
    content: "And finally, Tab 3 content. Isn't this animation cool?",
  },
]

export default function AnimatedTabs() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 py-4 px-6 text-center font-medium text-sm focus:outline-none transition-colors duration-300 ${
                selectedTab === index ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">{tabContent[selectedTab].title}</h2>
              <p className="text-gray-600">{tabContent[selectedTab].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

