
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Work</TabsTrigger>
        <TabsTrigger value="password">Project</TabsTrigger>
      </TabsList>
      <TabsContent value="account">


      </TabsContent>
      <TabsContent value="password">

      </TabsContent>
    </Tabs>
  )
}
