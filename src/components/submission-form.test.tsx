import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SubmissionForm } from "./submission-form";

describe("SubmissionForm Phase 2", () => {
  it("only calls translation on the explicit button and previews before applying", async () => {
    const fetchMock=vi.fn().mockResolvedValue({ok:true,json:async()=>({items:[{id:"description",text:"English description"}]})});vi.stubGlobal("fetch",fetchMock);
    render(<SubmissionForm />); fireEvent.change(screen.getByLabelText("descriptionJa"),{target:{value:"日本語の説明"}});
    expect(fetchMock).not.toHaveBeenCalled(); fireEvent.click(screen.getByRole("button",{name:/translate with ai/i}));
    expect(await screen.findByRole("dialog")).toBeInTheDocument(); expect(screen.getAllByText("日本語の説明")).toHaveLength(2); expect(screen.getByDisplayValue("English description")).toBeInTheDocument();
    expect(screen.getByLabelText("descriptionEn")).toHaveValue(""); fireEvent.click(screen.getByRole("button",{name:/cancel/i})); expect(screen.getByLabelText("descriptionEn")).toHaveValue("");
  });
  it("applies an edited translation only after approval", async () => {
    vi.stubGlobal("fetch",vi.fn().mockResolvedValue({ok:true,json:async()=>({items:[{id:"description",text:"AI text"}]})}));
    render(<SubmissionForm />); fireEvent.change(screen.getByLabelText("descriptionJa"),{target:{value:"説明"}}); fireEvent.click(screen.getByRole("button",{name:/translate with ai/i}));
    const edit=await screen.findByDisplayValue("AI text"); fireEvent.change(edit,{target:{value:"Edited text"}}); fireEvent.click(screen.getByRole("button",{name:/approve translation/i}));
    expect(screen.getByLabelText("descriptionEn")).toHaveValue("Edited text"); expect(screen.getByLabelText("descriptionJa")).toHaveValue("説明");
  });
  it("shows autofill and validates a missing URL without fetching", () => {
    const fetchMock = vi.fn(); vi.stubGlobal("fetch", fetchMock);
    render(<SubmissionForm />); fireEvent.click(screen.getByRole("button", { name: /autofill/i }));
    expect(screen.getByText(/enter an official website/i)).toBeInTheDocument(); expect(fetchMock).not.toHaveBeenCalled();
  });
  it("normalizes legacy Japanese autofill values into bilingual form fields without replacing edits", async () => {
    vi.stubGlobal("fetch",vi.fn().mockResolvedValue({ok:true,json:async()=>({data:{city:"札幌市",venue:"大通公園など",description:"札幌市で開催される祭典です。",activities:[]}})}));
    render(<SubmissionForm />); fireEvent.change(screen.getByLabelText("descriptionEn"),{target:{value:"Approved translation"}}); fireEvent.change(screen.getByLabelText(/official festival website/i),{target:{value:"https://example.com"}}); fireEvent.click(screen.getByRole("button",{name:/autofill/i}));
    await waitFor(()=>expect(screen.getByLabelText("cityJa")).toHaveValue("札幌市")); expect(screen.getByLabelText("city")).toHaveValue(""); expect(screen.getByLabelText("venueJa")).toHaveValue("大通公園など"); expect(screen.getByLabelText("descriptionJa")).toHaveValue("札幌市で開催される祭典です。"); expect(screen.getByLabelText("descriptionEn")).toHaveValue("Approved translation");
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
  it("applies successful autofill fields and keeps them editable after a later failure", async () => {
    const fetchMock=vi.fn().mockResolvedValueOnce({ok:true,json:async()=>({data:{nameEn:"Autofilled Festival",activities:[]}})}).mockResolvedValueOnce({ok:false});vi.stubGlobal("fetch",fetchMock);
    render(<SubmissionForm />);const website=screen.getByLabelText(/official festival website/i);fireEvent.change(website,{target:{value:"https://example.com"}});fireEvent.click(screen.getByRole("button",{name:/autofill/i}));
    await waitFor(()=>expect(screen.getByLabelText("nameEn")).toHaveValue("Autofilled Festival")); fireEvent.change(screen.getByLabelText("nameEn"),{target:{value:"Edited"}});fireEvent.click(screen.getByRole("button",{name:/autofill/i}));
    await waitFor(()=>expect(screen.getByText(/could not extract/i)).toBeInTheDocument());expect(screen.getByLabelText("nameEn")).toHaveValue("Edited");
  });
});
