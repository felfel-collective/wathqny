import { createSignal, onCleanup } from "solid-js";

export function ABTestPreview() {
  const [inputA, setInputA] = createSignal("https://wathqny.pages.dev/");
  const [inputB, setInputB] = createSignal("https://wathqny.pages.dev/");

  return (
    <div class="relative h-screen overflow-hidden bg-gray-50">
      <div class="grid grid-cols-2 gap-4  h-full p-4">
        {/* Panel A */}
        <div class="flex flex-col gap-2 ">
          <input
            class="border px-2 py-1 rounded"
            type="text"
            value={inputA()}
            onInput={(e) => setInputA(e.currentTarget.value)}
            placeholder="Enter URL for A"
          />
          <iframe
          width={"100%"}
            title="AB Test A"
            src={inputA()}
            class="flex-1 border rounded h-full"
          />
        </div>

        {/* Panel B */}
        <div class="flex flex-col gap-2 ">
          <input
            class="border px-2 py-1 rounded"
            type="text"
            value={inputB()}
            onInput={(e) => setInputB(e.currentTarget.value)}
            placeholder="Enter URL for B"
          />
          <iframe

          width={"100%"}
            title="AB Test B"
            src={inputB()}
            class="flex-1 border rounded h-full"
          />
        </div>
      </div>
    </div>
  );
}
