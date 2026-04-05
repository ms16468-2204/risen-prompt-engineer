var DOMAINS = [
  { id:"assignment", role:"Expert academic tutor and step-by-step learning coach",
    keys:["assignment","homework","instructions","submit","deadline","grade","rubric","professor","lecture","course","class","student","exercise","practice","tableau","excel","python","sql","visualization","chart","dashboard","dataset","calculate","build","complete","due","points","credit"],
    intents:["Understand Assignment","Break Down","Next Steps","Build a Plan","Explain","Summarize","Find Gaps","Identify Risks"] },
  { id:"geopolitics", role:"Senior geopolitical analyst and foreign policy expert",
    keys:["war","china","russia","military","sanctions","diplomacy","treaty","nato","geopolitics","foreign","troops","invasion","alliance","nuclear","president","conflict","ceasefire","sovereignty","pentagon","kremlin","beijing","taiwan","ukraine","iran","israel","government","minister","election","coup","territory","missile"],
    intents:["Summarize","Explain","Break Down","Argue For","Argue Against","Steelman","Debate Both Sides","Strategic Implications","Identify Risks","Find Gaps","Fact-Check","Write Report"] },
  { id:"pricing", role:"Senior pricing strategist",
    keys:["price","pricing","cost","revenue","margin","discount","subscription","tier","charge","fee","markup","tariff","wholesale","retail","monetize"],
    intents:["Summarize","Explain","Apply to Business","Find Opportunities","Identify Risks","Compare","Make a Decision","Negotiate","Build a Plan","Write Report"] },
  { id:"marketing", role:"Senior digital marketing strategist",
    keys:["marketing","campaign","audience","brand","conversion","funnel","seo","ad","traffic","engagement","influencer","viral","content","ctr"],
    intents:["Summarize","Apply to Business","Find Opportunities","Identify Risks","Build a Plan","Write About","Draft Email","Create Presentation","Compare","Next Steps"] },
  { id:"product", role:"Senior product manager",
    keys:["product","feature","roadmap","backlog","sprint","mvp","launch","stakeholder","ux","wireframe","prototype","agile","scrum"],
    intents:["Summarize","Break Down","Apply to Business","Find Opportunities","Identify Risks","Build a Plan","Next Steps","Prioritize","Write Report","Create Presentation"] },
  { id:"legal", role:"Senior legal analyst",
    keys:["contract","clause","agreement","liability","compliance","regulation","gdpr","terms","lawsuit","patent","copyright","court","judge","legislation"],
    intents:["Summarize","Explain","Break Down","Identify Risks","Fact-Check","Find Gaps","Argue For","Argue Against","Make a Decision","Write Report"] },
  { id:"finance", role:"Senior financial analyst",
    keys:["investment","portfolio","roi","budget","forecast","equity","debt","valuation","stock","bond","inflation","gdp","earnings"],
    intents:["Summarize","Explain","Apply to Business","Identify Risks","Find Opportunities","Compare","Make a Decision","Build a Plan","Fact-Check","Write Report"] },
  { id:"hr", role:"Senior HR business partner",
    keys:["hiring","recruitment","employee","onboarding","performance","retention","culture","talent","compensation","layoff","workforce","benefits","diversity"],
    intents:["Summarize","Apply to Business","Find Opportunities","Identify Risks","Build a Plan","Next Steps","Draft Email","Write Report","Compare","Make a Decision"] },
  { id:"tech", role:"Senior software engineer",
    keys:["api","code","bug","deployment","database","architecture","devops","cloud","security","latency","algorithm","framework","server","frontend","backend"],
    intents:["Summarize","Explain","Break Down","Find Gaps","Identify Risks","Compare","Apply to Business","Build a Plan","Next Steps","Write Report"] },
  { id:"health", role:"Senior public health and medical research analyst",
    keys:["health","disease","vaccine","hospital","patient","clinical","drug","treatment","symptom","diagnosis","cancer","virus","epidemic","surgery","therapy"],
    intents:["Summarize","Explain","Break Down","Fact-Check","Find Gaps","Identify Risks","Compare","Write Report","Make a Decision"] },
  { id:"science", role:"Senior science and technology research analyst",
    keys:["science","experiment","physics","chemistry","biology","climate","environment","space","nasa","discovery","evolution","genome","quantum"],
    intents:["Summarize","Explain","Break Down","Find Gaps","Fact-Check","Compare","Write About","Write Report","Strategic Implications"] },
  { id:"research", role:"Senior research analyst",
    keys:["research","study","data","analysis","survey","findings","hypothesis","methodology","sample","insight","report","whitepaper","journal"],
    intents:["Summarize","Explain","Find Gaps","Fact-Check","Compare","Literature Review","Write Report","Break Down","Identify Risks"] }
];

var INTENTS = {
  "Understand Assignment": {
    s: "1. Restate the assignment goal in one sentence\n2. List every deliverable clearly\n3. Identify tools and datasets required\n4. Flag ambiguous instructions\n5. Suggest best order to complete tasks",
    e: "Goal | Deliverables numbered | Tools needed | Ambiguities | Execution order"
  },
  "Summarize": {
    s: "1. Identify main thesis\n2. Extract 3 key supporting points\n3. Note gaps or caveats",
    e: "Max 5 bullet points each under 20 words"
  },
  "Explain": {
    s: "1. Define core concept\n2. Use a simple analogy\n3. Give a real-world example\n4. State implications",
    e: "Plain explanation plus 1 analogy plus 1 example under 200 words"
  },
  "Break Down": {
    s: "1. Identify all components\n2. Explain each part independently\n3. Show how they connect",
    e: "Structured breakdown with labeled sections for each component"
  },
  "Argue For": {
    s: "1. Find strongest supporting evidence\n2. Address counterarguments\n3. Build logical case",
    e: "3 strongest arguments with evidence. Conclude with 1-line thesis."
  },
  "Argue Against": {
    s: "1. Identify weaknesses\n2. Find missing evidence\n3. Build rebuttal",
    e: "3 counter-arguments with evidence. Conclude with 1-line rebuttal."
  },
  "Steelman": {
    s: "1. Find weakest version of argument\n2. Reconstruct strongest possible version\n3. Acknowledge what it gets right",
    e: "Strongest possible version of the opposing view stated fairly"
  },
  "Debate Both Sides": {
    s: "1. State the core tension\n2. Build strongest case FOR\n3. Build strongest case AGAINST\n4. Identify the crux",
    e: "For vs Against in two sections. End with key question that decides it."
  },
  "Apply to Business": {
    s: "1. Extract core insight\n2. Map to business context\n3. Identify who benefits\n4. Suggest concrete application",
    e: "Insight plus Business application plus Who acts plus First action step"
  },
  "Find Opportunities": {
    s: "1. Scan for unmet needs\n2. Identify emerging trends\n3. Match to addressable markets",
    e: "3 opportunities ranked by feasibility with why now and who captures it"
  },
  "Identify Risks": {
    s: "1. List failure modes\n2. Assess likelihood and impact\n3. Suggest mitigations",
    e: "Risk | Likelihood H/M/L | Impact H/M/L | Mitigation"
  },
  "Strategic Implications": {
    s: "1. Identify who is affected\n2. Map second-order effects\n3. Project outcomes over 1-5 years",
    e: "Short-term implications, long-term implications, one wildcard scenario"
  },
  "Find Gaps": {
    s: "1. Map what is claimed\n2. Identify what is missing\n3. Flag logical leaps",
    e: "Gaps list: what is missing plus why it matters plus how to fill it"
  },
  "Compare": {
    s: "1. Define comparison criteria\n2. Evaluate each option\n3. Summarize trade-offs",
    e: "Comparison table plus 1-paragraph verdict"
  },
  "Fact-Check": {
    s: "1. Identify factual claims\n2. Assess each as Verified or Unverified or False\n3. Note sources needed",
    e: "Claim | Status | Notes for each key claim"
  },
  "Literature Review": {
    s: "1. Identify research question\n2. Summarize key findings\n3. Note agreements and contradictions\n4. List open questions",
    e: "Question, consensus view, dissenting views, open questions"
  },
  "Write About": {
    s: "1. Define audience and purpose\n2. Outline key sections\n3. Draft in appropriate tone\n4. End with clear takeaway",
    e: "Article outline with section headers and 1-2 sentence summaries"
  },
  "Draft Email": {
    s: "1. Identify email goal\n2. State key message in one sentence\n3. Add context and call to action",
    e: "Subject line plus email body under 150 words in professional tone"
  },
  "Create Presentation": {
    s: "1. Define narrative arc\n2. Identify 5-7 key slides\n3. Summarize each slide in one sentence",
    e: "Slide titles plus 1-sentence description plus suggested visual per slide"
  },
  "Write Report": {
    s: "1. Define audience and purpose\n2. Structure as Executive Summary, Findings, Implications, Recommendations\n3. Keep sections concise",
    e: "Report outline with section headers and key points per section"
  },
  "Make a Decision": {
    s: "1. Define the decision\n2. List options\n3. Evaluate against criteria\n4. Recommend with rationale",
    e: "Top 3 options scored against criteria plus final recommendation"
  },
  "Build a Plan": {
    s: "1. Define the goal\n2. Identify key milestones\n3. Assign owners and timelines\n4. Flag risks",
    e: "Goal, Milestones, Timeline, Risks in a simple table"
  },
  "Next Steps": {
    s: "1. Identify current state\n2. Define desired outcome\n3. List immediate actions in priority order",
    e: "Numbered action list with action, owner, deadline per step"
  },
  "Prioritize": {
    s: "1. List all items\n2. Score by impact and effort\n3. Rank by ratio",
    e: "Prioritized list with impact H/M/L and effort H/M/L and rank"
  },
  "Negotiate": {
    s: "1. Identify each party interest\n2. Find common ground\n3. Propose fair resolution",
    e: "Party A | Party B | Common ground | Proposed deal"
  }
};

var BIAS = "Ignore location, age, gender, nationality. Flag any claim relying on demographic assumptions.";
var STABILITY = "Return low/base/high range instead of single value. State key assumption per bound.";

var domain = null;
var lede = null;

function status(msg, type) {
  var el = document.getElementById("statusBar");
  el.textContent = msg;
  el.className = type;
}

function fill(data) {
  document.getElementById("role").value = data.role || "";
  document.getElementById("input").value = data.input || "";
  document.getElementById("steps_field").value = data.steps || "";
  document.getElementById("expect").value = data.expect || "";
  document.getElementById("narrow").value = data.narrow || "";
}

function detect(text) {
  var lower = text.toLowerCase();
  var best = DOMAINS[DOMAINS.length - 1];
  var top = 0;
  for (var i = 0; i < DOMAINS.length; i++) {
    var d = DOMAINS[i];
    var score = 0;
    for (var j = 0; j < d.keys.length; j++) {
      if (lower.indexOf(d.keys[j]) !== -1) score++;
    }
    if (score > top) { top = score; best = d; }
  }
  return best;
}

function renderButtons(d) {
  var wrap = document.getElementById("intentWrap");
  wrap.innerHTML = "";
  for (var i = 0; i < d.intents.length; i++) {
    (function(label) {
      var btn = document.createElement("button");
      btn.className = "intent-btn";
      btn.textContent = label;
      btn.onclick = function() {
        var all = document.querySelectorAll(".intent-btn");
        for (var k = 0; k < all.length; k++) all[k].classList.remove("active");
        btn.classList.add("active");
        applyIntent(label);
      };
      wrap.appendChild(btn);
    })(d.intents[i]);
  }
  document.getElementById("intentSection").classList.remove("hidden");
}

function applyIntent(label) {
  var t = INTENTS[label];
  if (!t || !domain || !lede) return;
  fill({
    role: domain.role,
    input: lede,
    steps: t.s,
    expect: t.e,
    narrow: "Base response on provided context only. Do not assume user demographics."
  });
  document.getElementById("risenFields").classList.remove("hidden");
}

document.getElementById("scanBtn").onclick = async function() {
  var btn = document.getElementById("scanBtn");
  btn.disabled = true;
  btn.textContent = "Scanning...";
  status("Reading page...", "loading");
  document.getElementById("intentSection").classList.add("hidden");
  document.getElementById("risenFields").classList.add("hidden");
  document.getElementById("out-wrap").classList.add("hidden");

  try {
    var tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    var tab = tabs[0];
    if (tab.url.indexOf("chrome://") === 0 || tab.url.indexOf("chrome-extension://") === 0) {
      throw new Error("Cannot scan chrome:// pages. Go to a regular webpage.");
    }
    if (tab.url.indexOf("claude.ai") !== -1 || tab.url.indexOf("chat.openai.com") !== -1) {
      throw new Error("Cannot scan AI chat pages. Go to a regular webpage.");
    }
    var res = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: function() {
        var h = document.querySelector("h1");
        var title = h ? h.innerText.trim() : document.title;
        var ps = document.querySelectorAll("article p,main p,.content p,p");
        var paras = [];
        for (var i = 0; i < ps.length && paras.length < 3; i++) {
          var t = ps[i].innerText.trim();
          if (t.length > 30) paras.push(t);
        }
        var text = title + "\n" + paras.join("\n");
        if (text.length < 80) text = document.body.innerText.slice(0, 1500);
        return { text: text, title: document.title };
      }
    });
    var page = res && res[0] && res[0].result;
    if (!page || page.text.length < 40) throw new Error("No readable text found.");
    domain = detect(page.text);
    lede = "Page: " + page.title + "\n\n" + page.text.slice(0, 600);
    renderButtons(domain);
    status("Detected: " + domain.id + " | Pick an intent below.", "ok");
  } catch(err) {
    status("Error: " + err.message, "err");
  }
  btn.disabled = false;
  btn.textContent = "Scan Page";
};

document.getElementById("buildBtn").onclick = function() {
  var bias = document.getElementById("biasGuard").checked;
  var stab = document.getElementById("stabilityMode").checked;
  var role = document.getElementById("role").value.trim();
  var inp = document.getElementById("input").value.trim();
  var steps = document.getElementById("steps_field").value.trim();
  var exp = document.getElementById("expect").value.trim();
  var narrow = document.getElementById("narrow").value.trim();
  var parts = [];
  if (role) parts.push("ROLE: " + role);
  if (inp) parts.push("INPUT: " + inp);
  if (steps) parts.push("STEPS:\n" + steps);
  if (exp) parts.push("EXPECT: " + exp);
  var n = [];
  if (narrow) n.push(narrow);
  if (bias) n.push(BIAS);
  if (stab) n.push(STABILITY);
  if (n.length) parts.push("NARROW: " + n.join(" "));
  var prompt = parts.join("\n\n");
  document.getElementById("output").textContent = prompt;
  document.getElementById("tokenCount").textContent = "~" + Math.ceil(prompt.length / 4) + " tokens";
  document.getElementById("out-wrap").classList.remove("hidden");
};

document.getElementById("copyBtn").onclick = function() {
  var text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).then(function() {
    var b = document.getElementById("copyBtn");
    b.textContent = "Copied!";
    setTimeout(function() { b.textContent = "Copy"; }, 1500);
  });
};