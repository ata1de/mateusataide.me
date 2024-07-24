'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { stackItems } from "@/config/stack"
import { useState } from "react"
import { StackCard } from "./stackCard"




export function TabsCategory() {
    const [ selectedTab , setSelectedTab ] = useState('all')

    const filteredItems = selectedTab === 'all' ? stackItems : stackItems.filter(item => item.category === selectedTab)

    return (
        <div className="">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="border-b-2 border-Green w-full flex ">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="infra">Infra</TabsTrigger>
              <TabsTrigger value="testes">Testes</TabsTrigger>
              <TabsTrigger value="database">Banco de Dados</TabsTrigger>
            </TabsList>
            <TabsContent value={selectedTab} className="flex flex-wrap justify-center mt-7 gap-3">
              {filteredItems.map((item, index) => (
                <StackCard key={index} category={item.category} image={item.image} title={item.name}/>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      );
    }
