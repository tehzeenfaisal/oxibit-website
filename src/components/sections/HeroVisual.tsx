import { Workflow, LayoutGrid, Code2, Database, Cloud, Check } from "lucide-react";

/** The floating "system architecture" card graphic on the Home hero. */
export function HeroVisual() {
  return (
    <div className="relative">
      <div className="animate-ox-float relative rounded-3xl border border-mist bg-white p-5.5 px-5.5 shadow-[0_28px_64px_rgba(14,42,71,0.13),0_2px_6px_rgba(14,42,71,0.06)]">
        <div className="mb-4.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-blue-050">
              <Workflow className="size-4 text-blue" />
            </span>
            <span className="font-heading text-sm font-semibold text-charcoal">System architecture</span>
          </div>
          <span className="ox-livedot inline-flex items-center gap-1.5 rounded-full bg-success-fill px-2.5 py-1 text-[11px] font-semibold text-success">
            <span className="size-1.5 rounded-full bg-success" />
            Live
          </span>
        </div>

        <div className="flex items-center gap-3.25 rounded-2xl border border-[#EEF1F5] bg-[#FBFCFD] p-3.25">
          <span className="flex size-9.5 shrink-0 items-center justify-center rounded-[10px] bg-blue-050">
            <LayoutGrid className="size-4.75 text-blue" />
          </span>
          <div>
            <div className="font-heading text-[13.5px] font-semibold text-charcoal">Web &amp; mobile experience</div>
            <div className="mt-0.25 text-[11.5px] text-silver">React · iOS · Android</div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="h-4 w-0.5 bg-[#D7DEE6]" />
        </div>

        <div className="flex items-center gap-3.25 rounded-2xl border-[1.5px] border-blue bg-[#F4F8FF] p-3.25 shadow-[0_4px_14px_rgba(0,102,255,0.12)]">
          <span className="flex size-9.5 shrink-0 items-center justify-center rounded-[10px] bg-blue">
            <Code2 className="size-4.75 text-white" />
          </span>
          <div className="flex-1">
            <div className="font-heading text-[13.5px] font-semibold text-charcoal">Application logic &amp; APIs</div>
            <div className="mt-0.25 text-[11.5px] text-[#5277a8]">Your business rules, one source of truth</div>
          </div>
          <span className="rounded-full border border-blue-100 bg-white px-2 py-0.75 text-[10px] font-semibold tracking-wide text-blue uppercase">
            Core
          </span>
        </div>
        <div className="flex justify-center">
          <span className="h-4 w-0.5 bg-[#D7DEE6]" />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex items-center gap-2.75 rounded-2xl border border-[#EEF1F5] bg-[#FBFCFD] p-3.25">
            <span className="flex size-8.5 shrink-0 items-center justify-center rounded-[9px] bg-blue-050">
              <Database className="size-4.25 text-blue" />
            </span>
            <div>
              <div className="font-heading text-[12.5px] font-semibold text-charcoal">Data</div>
              <div className="mt-0.25 text-[11px] text-silver">Encrypted</div>
            </div>
          </div>
          <div className="flex items-center gap-2.75 rounded-2xl border border-[#EEF1F5] bg-[#FBFCFD] p-3.25">
            <span className="flex size-8.5 shrink-0 items-center justify-center rounded-[9px] bg-blue-050">
              <Cloud className="size-4.25 text-blue" />
            </span>
            <div>
              <div className="font-heading text-[12.5px] font-semibold text-charcoal">Cloud</div>
              <div className="mt-0.25 text-[11px] text-silver">Auto-scaling</div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-ox-floatb absolute -right-3.5 -bottom-4.5 flex items-center gap-2.75 rounded-[11px] border border-mist bg-white p-3.25 shadow-[0_12px_30px_rgba(14,42,71,0.12)]">
        <span className="flex size-8.5 items-center justify-center rounded-full bg-success-fill">
          <Check className="size-4.5 text-success" />
        </span>
        <div>
          <div className="font-heading text-[13px] leading-tight font-semibold text-charcoal">Supported since 2020</div>
          <div className="mt-0.25 text-[11px] text-silver">Still shipping improvements</div>
        </div>
      </div>
    </div>
  );
}
