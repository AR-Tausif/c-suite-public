import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { FC } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ITab {
  id: number
  title: string
  description: string
  items: string[]
}

interface IProps {
  tabContents: ITab[]
}

export const AnotherExampleTab: FC<IProps> = ({ tabContents }) => {
  return (
    <Tabs
      defaultValue={tabContents[0].title.toLowerCase()}
      className="w-full flex flex-col sm:flex-row gap-10 items-start justify-center"
    >
      <TabsList className="flex flex-col w-full sm:w-1/3 gap-4 items-stretch justify-start h-full">
        {tabContents.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.title.toLowerCase()}
            className="bg-neutral-700 text-gray-300 py-4 px-6 font-semibold transition-all text-left justify-start hover:bg-neutral-600 data-[state=active]:bg-purple-700 data-[state=active]:text-white"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="w-full sm:w-2/3">
        <AnimatePresence mode="wait">
          {tabContents.map((tab) => (
            <TabsContent key={tab.id} value={tab.title.toLowerCase()}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-transparent text-gray-300 border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">{tab.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg">{tab.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      {tab.items.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <svg
                            className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  )
}

