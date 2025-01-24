import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
import { AnimatePresence, motion } from "motion/react";
interface ITab {
  id: number;
  title: string;
  description: string;
  items: string[];
}
interface IProps {
  tabContents: ITab[];
}
export const Example: FC<IProps> = ({ tabContents }) => {
  return (
    <Tabs
      defaultValue={tabContents[0].title.toLowerCase()}
      className="w-full flex flex-col sm:flex-row gap-10 items-start sm:items-center justify-center"
    >
      <TabsList className="grid w-full sm:w-2/4 grid-cols-4 sm:grid-cols-1 gap-4 sm:gap-y-4 items-center justify-center h-full">
        {tabContents.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.title.toLowerCase()}
            className="bg-neutral-700 text-gray-300 py-3 md:py-[1rem] font-semibold transition-all"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        {tabContents.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.title.toLowerCase()}
            className="w-full sm:w-2/4"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-transparent text-gray-300 border-0">
                <CardHeader>
                  <CardTitle>{tab.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-md">
                    {tab.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <ul className="space-y-2 text-gray-300">
                    {tab.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  );
};
