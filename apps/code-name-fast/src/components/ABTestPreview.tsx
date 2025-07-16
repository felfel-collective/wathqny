import { createSignal } from "solid-js";

export function ABTestPreview() {
  const [inputA, setInputA] = createSignal("https://example.com");
  const [inputB, setInputB] = createSignal("https://example.com");

  // Optional submit tracking state
  const [submittedA, setSubmittedA] = createSignal(false);
  const [submittedB, setSubmittedB] = createSignal(false);

  const handleSubmitA = () => {
    setSubmittedA(true);
    setTimeout(() => setSubmittedA(false), 2000); // example visual feedback
  };

  const handleSubmitB = () => {
    setSubmittedB(true);
    setTimeout(() => setSubmittedB(false), 2000);
  };

  return (
    <div class="grid grid-cols-2 gap-4 h-screen p-4">
      {/* Panel A */}
      <div class="flex flex-col space-y-2">
        <input
          class="border px-2 py-1 rounded"
          type="text"
          value={inputA()}
          onInput={(e) => setInputA(e.currentTarget.value)}
          placeholder="Enter URL for A"
        />
        <button
          class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={handleSubmitA}
        >
          {submittedA() ? "Submitted!" : "Submit A"}
        </button>
        <iframe
          title="AB Test A"
          src={inputA()}
          class="flex-1 border rounded h-full"
        />
      </div>

      {/* Panel B */}
      <div class="flex flex-col space-y-2">
        <input
          class="border px-2 py-1 rounded"
          type="text"
          value={inputB()}
          onInput={(e) => setInputB(e.currentTarget.value)}
          placeholder="Enter URL for B"
        />
        <button
          class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={handleSubmitB}
        >
          {submittedB() ? "Submitted!" : "Submit B"}
        </button>
        <iframe
          title="AB Test B"
          src={inputB()}
          class="flex-1 border rounded h-full"
        />
      </div>
    </div>
  );
}
