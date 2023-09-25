import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
    moduleIndex: number
    title: string
    numberOfLessons: number
}
export function Module({moduleIndex, title, numberOfLessons}: ModuleProps) {
  return (
    <Collapsible.Root className='group'>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-700">
        <div className="flex h-10 w-10 rounded-full items-center justify-center text-xs bg-zinc-950">
          {moduleIndex}
        </div>

        <div className="flex flex-col text-left gap-1">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{numberOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform ease-in-out" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
            <Lesson title="Fundamentos do Redux" duration="09:24" />
            <Lesson title="Fundamentos do Redux" duration="09:24" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
