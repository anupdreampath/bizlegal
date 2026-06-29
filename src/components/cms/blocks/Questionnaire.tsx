"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Send, Shield } from "lucide-react";

type QuizOption = { value?: string; label?: string; description?: string };
type QuizField = {
  id?: string;
  label?: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "radio";
  required?: boolean;
  placeholder?: string;
  help?: string;
  options?: QuizOption[];
};
type QuizStep = { label?: string; heading?: string; body?: string; fields?: QuizField[] };
type QuizContent = {
  logoText?: string;
  successHeading?: string;
  successBody?: string;
  successPrimaryCta?: { label?: string; href?: string };
  successSecondaryCta?: { label?: string; href?: string };
  steps?: QuizStep[];
};
type QuizStyle = {
  backgroundColor?: string;
  cardBackgroundColor?: string;
  textColor?: string;
  bodyColor?: string;
  accentColor?: string;
  borderColor?: string;
};

function asContent(value: unknown): QuizContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as QuizContent : {};
}

function asStyle(value: unknown): QuizStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as QuizStyle : {};
}

function optionValue(option: QuizOption) {
  return option.value || option.label || "";
}

export default function QuestionnaireBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const steps = Array.isArray(c.steps) && c.steps.length ? c.steps : [];
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const activeStep = steps[currentStep] || steps[0];

  const colors = {
    background: s.backgroundColor || "#f8f5ed",
    card: s.cardBackgroundColor || "#ffffff",
    text: s.textColor || "#000000",
    body: s.bodyColor || "#6b7280",
    accent: s.accentColor || "#166534",
    border: s.borderColor || "#e5e7eb",
  };

  const summary = steps.map((step) => ({
    title: step.label || step.heading || "Step",
    fields: (step.fields || []).map((field) => [field.label || field.id || "Question", form[field.id || ""] || ""] as const),
  }));

  function update(id: string | undefined, value: string) {
    if (!id) return;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  if (!steps.length) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: colors.background }}>
        <div className="rounded-lg border p-6 text-sm" style={{ backgroundColor: colors.card, borderColor: colors.border, color: colors.text }}>
          Add quiz steps in the visual editor.
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: colors.background }}>
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.accent}18` }}>
            <CheckCircle2 className="w-10 h-10" style={{ color: colors.accent }} />
          </div>
          <h1 className="font-serif text-3xl font-bold mb-4" style={{ color: colors.text }}>
            {c.successHeading || "Request Submitted"}
          </h1>
          <p className="font-sans mb-8 leading-relaxed" style={{ color: colors.body }}>
            {c.successBody || "Thank you. Our team will review your information and reach out shortly."}
          </p>
          <div className="space-y-3">
            {c.successPrimaryCta?.label && (
              <Link href={c.successPrimaryCta.href || "/signup"} className="block w-full py-3 font-sans font-bold text-white rounded-lg transition-colors text-center" style={{ backgroundColor: colors.accent }}>
                {c.successPrimaryCta.label}
              </Link>
            )}
            {c.successSecondaryCta?.label && (
              <Link href={c.successSecondaryCta.href || "/"} className="block w-full py-3 font-sans font-medium rounded-lg border text-center" style={{ color: colors.text, borderColor: colors.border }}>
                {c.successSecondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="bg-white border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6" style={{ color: colors.text }} strokeWidth={1.5} />
            <span className="font-serif text-lg font-bold" style={{ color: colors.text }}>{c.logoText || "Biz Legal"}</span>
          </Link>
          <span className="text-sm font-sans" style={{ color: colors.body }}>
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const done = index < currentStep;
              const active = index === currentStep;
              return (
                <div key={`${step.label}-${index}`} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 border"
                    style={{
                      backgroundColor: done || active ? colors.accent : colors.card,
                      borderColor: done || active ? colors.accent : colors.border,
                      color: done || active ? "#ffffff" : colors.body,
                    }}
                  >
                    {done ? <CheckCircle2 className="w-5 h-5" /> : index === steps.length - 1 ? <Send className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-sans font-medium hidden sm:block" style={{ color: active ? colors.text : colors.body }}>
                    {step.label || `Step ${index + 1}`}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full rounded-full h-1.5" style={{ backgroundColor: colors.border }}>
            <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${steps.length <= 1 ? 100 : (currentStep / (steps.length - 1)) * 100}%`, backgroundColor: colors.accent }} />
          </div>
        </div>

        <div className="rounded-2xl border p-6 sm:p-10 shadow-sm" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
          {currentStep < steps.length - 1 && activeStep && (
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: colors.text }}>{activeStep.heading}</h2>
              <p className="font-sans text-sm mb-8" style={{ color: colors.body }}>{activeStep.body}</p>
              <div className="space-y-5">
                {(activeStep.fields || []).map((field) => (
                  <div key={field.id || field.label}>
                    <label className="block text-sm font-sans font-bold mb-1.5" style={{ color: colors.text }}>
                      {field.label} {field.required && <span className="text-red-600">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        value={form[field.id || ""] || ""}
                        onChange={(event) => update(field.id, event.target.value)}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border rounded-lg font-sans text-sm text-black focus:outline-none resize-none"
                        style={{ borderColor: colors.border }}
                      />
                    ) : field.type === "select" ? (
                      <select
                        value={form[field.id || ""] || ""}
                        onChange={(event) => update(field.id, event.target.value)}
                        className="w-full px-4 py-3 bg-white border rounded-lg font-sans text-sm text-black focus:outline-none"
                        style={{ borderColor: colors.border }}
                      >
                        <option value="" disabled>{field.placeholder || "Select..."}</option>
                        {(field.options || []).map((option) => (
                          <option key={optionValue(option)} value={optionValue(option)}>{option.label || option.value}</option>
                        ))}
                      </select>
                    ) : field.type === "radio" ? (
                      <div className="space-y-3">
                        {(field.options || []).map((option) => {
                          const value = optionValue(option);
                          const checked = form[field.id || ""] === value;
                          return (
                            <label key={value} className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-200" style={{ borderColor: checked ? colors.accent : colors.border, backgroundColor: checked ? `${colors.accent}0d` : colors.card }}>
                              <input type="radio" name={field.id} checked={checked} onChange={() => update(field.id, value)} className="mt-0.5" style={{ accentColor: colors.accent }} />
                              <div>
                                <span className="font-sans font-bold text-sm" style={{ color: colors.text }}>{option.label || option.value}</span>
                                {option.description && <p className="text-xs font-sans mt-0.5" style={{ color: colors.body }}>{option.description}</p>}
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    ) : (
                      <input
                        type={field.type || "text"}
                        value={form[field.id || ""] || ""}
                        onChange={(event) => update(field.id, event.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-white border rounded-lg font-sans text-sm text-black focus:outline-none"
                        style={{ borderColor: colors.border }}
                      />
                    )}
                    {field.help && <p className="text-xs font-sans mt-1" style={{ color: colors.body }}>{field.help}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === steps.length - 1 && (
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: colors.text }}>{activeStep?.heading || "Review your request"}</h2>
              <p className="font-sans text-sm mb-8" style={{ color: colors.body }}>{activeStep?.body || "Please verify your information before submitting."}</p>
              <div className="space-y-6">
                {summary.slice(0, -1).map((section) => (
                  <div key={section.title} className="rounded-xl p-5 border" style={{ backgroundColor: colors.background, borderColor: colors.border }}>
                    <h3 className="font-sans font-bold text-sm mb-3" style={{ color: colors.text }}>{section.title}</h3>
                    <div className="space-y-2">
                      {section.fields.map(([label, value]) => (
                        <div key={label} className="flex justify-between gap-6 text-sm">
                          <span className="font-sans" style={{ color: colors.body }}>{label}</span>
                          <span className="font-sans font-medium text-right max-w-[60%] break-words" style={{ color: colors.text }}>{value || "-"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-10 pt-6 border-t" style={{ borderColor: colors.border }}>
            <button
              type="button"
              onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-2 px-5 py-3 font-sans font-medium rounded-lg transition-colors disabled:opacity-40"
              style={{ color: colors.text }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            {currentStep < steps.length - 1 ? (
              <button type="button" onClick={() => setCurrentStep((step) => Math.min(step + 1, steps.length - 1))} className="inline-flex items-center gap-2 px-6 py-3 font-sans font-bold text-white rounded-lg transition-colors" style={{ backgroundColor: colors.accent }}>
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="button" onClick={() => setSubmitted(true)} className="inline-flex items-center gap-2 px-6 py-3 font-sans font-bold text-white rounded-lg transition-colors" style={{ backgroundColor: colors.accent }}>
                Submit Request
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
