import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SubmissionForm } from "./submission-form";

describe("SubmissionForm Phase 2", () => {
  it("shows autofill and validates a missing URL without fetching", () => {
    const fetchMock = vi.fn(); vi.stubGlobal("fetch", fetchMock);
    render(<SubmissionForm />); fireEvent.click(screen.getByRole("button", { name: /autofill/i }));
    expect(screen.getByText(/enter an official website/i)).toBeInTheDocument(); expect(fetchMock).not.toHaveBeenCalled();
  });
  it("shows independent activity controls and allows view/participate", () => {
    render(<SubmissionForm />);
    fireEvent.click(screen.getByLabelText("Bon Odori")); fireEvent.click(screen.getByLabelText("Mikoshi"));
    expect(screen.getByRole("heading", { name: "Bon Odori" })).toBeInTheDocument(); expect(screen.getByRole("heading", { name: "Mikoshi" })).toBeInTheDocument();
    const selects=screen.getAllByLabelText("Interaction") as HTMLSelectElement[]; fireEvent.change(selects[0], { target: { value: "participate" } }); expect(selects[0].value).toBe("participate"); expect(selects[1].value).toBe("view");
  });
  it("shows loading and failure while keeping manual controls", async () => {
    vi.stubGlobal("fetch", vi.fn(()=>new Promise(()=>{})));
    render(<SubmissionForm />); fireEvent.change(screen.getByLabelText(/official festival website/i),{target:{value:"https://example.com"}}); fireEvent.click(screen.getByRole("button",{name:/autofill/i}));
    expect(await screen.findByText(/extracting festival/i)).toBeInTheDocument(); expect(screen.getByLabelText("Bon Odori")).toBeInTheDocument();
  });
  it("reflects only valid autofill activity values", async () => {
    vi.stubGlobal("fetch",vi.fn().mockResolvedValue({ok:true,json:async()=>({data:{activities:[{type:"Bon Odori",interactionType:"participate"},{type:"Invented",interactionType:"participate"}]}})}));
    render(<SubmissionForm />);fireEvent.change(screen.getByLabelText(/official festival website/i),{target:{value:"https://example.com"}});fireEvent.click(screen.getByRole("button",{name:/autofill/i}));
    await waitFor(()=>expect(screen.getByRole("heading",{name:"Bon Odori"})).toBeInTheDocument()); expect(screen.queryByRole("heading",{name:"Invented"})).not.toBeInTheDocument();
  });
});
