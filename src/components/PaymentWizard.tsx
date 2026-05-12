import { useState } from 'react';
import type { FlowNode } from '../lib/types';
import flowData from '../data/payment-flow.json';

const nodes = flowData as FlowNode[];

function getNode(id: string): FlowNode | undefined {
  return nodes.find((n) => n.id === id);
}

export default function PaymentWizard() {
  const [history, setHistory] = useState<string[]>(['start']);

  const currentId = history[history.length - 1];
  const node = getNode(currentId);

  function handleOption(nextId: string) {
    setHistory((prev) => [...prev, nextId]);
  }

  function handleBack() {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  }

  function handleReset() {
    setHistory(['start']);
  }

  if (!node) {
    return (
      <div className="text-center p-8">
        <p className="text-ink-light">Something went wrong. Please try again.</p>
        <button onClick={handleReset} className="mt-4 text-mineral underline">
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-reading mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="font-chinese text-ink-light text-sm mb-2">支付设置向导</p>
        <h1 className="font-display text-4xl font-bold text-ink">
          Payment Setup
        </h1>
        <p className="text-ink-light mt-2">
          Find the best way to pay during your China trip.
        </p>
      </div>

      {/* Progress breadcrumb */}
      {history.length > 1 && (
        <div className="mb-6 flex items-center gap-2 text-sm text-ink-light">
          <button
            onClick={handleBack}
            className="hover:text-mineral transition-colors flex items-center gap-1"
          >
            ← Back
          </button>
          <span className="text-paper-300">|</span>
          <button
            onClick={handleReset}
            className="hover:text-mineral transition-colors"
          >
            Start over
          </button>
          <span className="ml-auto">
            Step {history.length}
          </span>
        </div>
      )}

      <div className="animate-fadeIn">
        {node.type === 'question' && (
          <QuestionNode node={node} onSelect={handleOption} />
        )}
        {node.type === 'action' && (
          <ActionNode node={node} onReset={handleReset} />
        )}
        {node.type === 'result' && (
          <ResultNode node={node} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}

function QuestionNode({
  node,
  onSelect,
}: {
  node: FlowNode;
  onSelect: (nextId: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{node.text}</h2>
      <div className="space-y-3">
        {node.options?.map((opt) => (
          <button
            key={opt.nextId}
            onClick={() => onSelect(opt.nextId)}
            className="w-full p-4 text-left bg-paper-100 border border-paper-300 rounded-lg hover:border-mineral hover:bg-mineral/5 transition-colors group"
          >
            <span className="group-hover:text-mineral transition-colors font-medium">
              {opt.label}
            </span>
            <span className="float-right text-ink-light group-hover:text-mineral">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ActionNode({
  node,
  onReset,
}: {
  node: FlowNode;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-mineral/10 border border-mineral rounded-xl">
        <h2 className="text-xl font-semibold text-mineral mb-4">{node.text}</h2>
        <ol className="space-y-3">
          {node.actions?.map((action, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="shrink-0 w-6 h-6 rounded-full bg-mineral text-paper-50 flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="pt-0.5">{action}</span>
            </li>
          ))}
        </ol>
      </div>
      <button
        onClick={onReset}
        className="w-full p-3 border border-paper-300 rounded-lg text-ink-light hover:bg-paper-100 transition-colors text-sm"
      >
        Start over with different answers
      </button>
    </div>
  );
}

function ResultNode({
  node,
  onReset,
}: {
  node: FlowNode;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-jade/10 border border-jade rounded-xl">
        <h2 className="text-xl font-semibold text-jade mb-3">{node.text}</h2>
      </div>

      {node.troubleshooting && node.troubleshooting.length > 0 && (
        <div className="p-4 bg-amber/10 border border-amber rounded-lg">
          <h3 className="font-semibold text-sm mb-3">Tips & Troubleshooting</h3>
          <ul className="space-y-2">
            {node.troubleshooting.map((tip, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-amber shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full p-3 border border-paper-300 rounded-lg text-ink-light hover:bg-paper-100 transition-colors text-sm"
      >
        Start over with different answers
      </button>
    </div>
  );
}
