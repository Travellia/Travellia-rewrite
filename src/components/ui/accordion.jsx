"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-3xl border border-line bg-white transition-colors duration-500 data-[state=open]:border-ink data-[state=open]:bg-ink data-[state=open]:text-white",
        className
      )}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-gold/60 flex flex-1 items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left text-sm md:text-base font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:duration-500 [&>svg]:ease-glide [&[data-state=open]>svg]:rotate-45",
          className
        )}
        {...props}>
        {children}
        <PlusIcon
          className="pointer-events-none size-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="motion-accordion overflow-hidden text-sm"
      {...props}>
      <div className={cn("px-5 pt-0 pb-5 text-white/75 leading-relaxed", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
