/* Review copy and file manifest. Edit this file to update the site. */
window.reviewContent = {
  title: 'Efficacy and safety of anti-CGRP monoclonal antibodies in resistant chronic migraine',
  subtitle: 'A systematic review and meta-analysis',
  affiliation: 'Universidad de Piura, Peru',
  registration: { id: 'CRD420261437483', date: '1 July 2026', url: 'https://www.crd.york.ac.uk/PROSPERO/view/CRD420261437483' },
  stage: 'Research preview',
  evidenceStatus: 'Preliminary analyses',
  estimateStatus: 'Preliminary',
  evidenceDescription: 'Review the 12-week estimates, study contributions, certainty assessments, and available sensitivity analysis.',
  evidenceNotice: 'Estimates come from the available RevMan export. Certainty ratings are from draft GRADE tables. Safety data and several analysis decisions remain under review.',
  scope: [
    ['Target population', 'Adults with resistant chronic migraine'],
    ['Comparison in the analysis', 'Anti-CGRP antibodies vs placebo'],
    ['Follow-up in the available analyses', '12 weeks']
  ],
  manuscriptVersion: 'Manuscript v13 · 21 November 2026',
  authors: [
    { name: 'Armando Martín Pezo Pezo', email: 'armando.pezo@udep.edu.pe', corresponding: true },
    { name: 'Lia Antonella Alvarado Zavala', email: 'lia.alvarado@alum.udep.edu.pe' },
    { name: 'Wilfredo Jesus Melo Espinoza', email: 'wilfredo.melo@alum.udep.edu.pe' },
    { name: 'Angelo Francisco Cabrejos Solano', email: 'angelo.cabrejos@alum.udep.edu.pe' },
    { name: 'Janet Juliana Reyes Valladares', email: 'janet.reyes@alum.udep.edu.pe' },
    { name: 'Jorge Luis De la Cruz Oré', email: 'jorge.delacruz.o@udep.edu.pe' }
  ],
  summary: 'The review examines placebo-controlled evidence on CGRP-targeted antibodies in adults with chronic migraine and prior preventive treatment failures.',
  rationale: [
    'Chronic migraine involves headache on at least 15 days per month for more than 3 months, with migraine features on at least 8 days per month. Persistent disability despite multiple preventive treatments defines a particularly difficult-to-treat population. [[7,8,9,10]]',
    'Calcitonin gene-related peptide (CGRP) is involved in trigeminovascular signaling. Erenumab targets its receptor, whereas eptinezumab, fremanezumab, and galcanezumab bind the peptide. [[4,11,12]]',
    'Trials have often enrolled both episodic and chronic migraine populations or reported results across several levels of prior treatment failure. This review examines what can be established about efficacy and safety in adults with resistant chronic migraine. [[13,14,15,16,17,18]]'
  ],
  protocol: {
    question: 'In adults with resistant or refractory chronic migraine, how effective and safe are anti-CGRP monoclonal antibodies compared with placebo or the best available treatment?',
    pico: [
      ['Population', 'Adults aged 18 years or older with a clinical diagnosis of resistant or refractory chronic migraine.'],
      ['Intervention', 'Erenumab, fremanezumab, galcanezumab, or eptinezumab at any dose or schedule.'],
      ['Comparator', 'Placebo or the best available treatment in PROSPERO. The university protocol and current analyses use placebo.'],
      ['Outcomes', 'A ≥50% reduction in monthly migraine days and adverse events. Additional outcomes include attack duration, pain intensity, acute rescue medication use, and migraine-related disability.']
    ],
    methods: [
      ['Eligibility', 'Randomized controlled trials. The registered protocol excludes antibody regimens combined with other preventive pharmacological migraine treatments. It specifies no language or setting restrictions.'],
      ['Search and selection', 'The registration names MEDLINE, CENTRAL, Embase, and Scopus. It also lists backward and forward citation searching, conference proceedings, and trial registries. Independent screening and extraction are specified.'],
      ['Synthesis and certainty', 'The registration specifies risk ratios for dichotomous outcomes and mean differences or standardized mean differences for continuous outcomes. It lists RoB 2, GRADE, and sensitivity analyses for bias, allocation concealment and blinding, and statistical model.'],
      ['Follow-up and analysis scope', 'The university protocol targets 6 and 12 months with a minimum of 6 months of follow-up. PROSPERO specifies outcomes at 3, 6, and 12 months. The manuscript describes eligibility from 3 months and the current analyses use 12-week observations. The final report will need to document the operational eligibility criteria and any deviations.']
    ]
  },
  manuscript: [
    { id: 'introduction', title: 'Introduction', paragraphs: [
      'Migraine is a common neurological disorder characterized by recurrent moderate-to-severe headache attacks, typically unilateral and pulsating, accompanied by nausea, vomiting, photophobia, and phonophobia. Aura may also occur, manifesting as visual, sensory, or motor symptoms. [[1]] It predominantly affects young adults, with onset typically occurring during adolescence and prevalence peaking around 40 years of age. The condition is more prevalent in women than men, with a female-to-male ratio of 1.67:1. [[2]] Migraine is the second leading cause of disability worldwide and the leading cause among young adults, imposing a substantial societal burden through productivity losses, years lived with disability, and treatment-related costs. [[3]]',
      'The pathophysiology of migraine involves activation of the trigeminovascular system and the release of neuropeptides, particularly calcitonin gene-related peptide (CGRP), which contributes to nociceptive transmission, vasodilation, and neuroinflammatory processes. [[4]] Preventive treatment options include beta-blockers, tricyclic antidepressants, anticonvulsants, calcium channel blockers, and onabotulinumtoxinA. Treatment response remains inadequate in a proportion of patients. [[5,6]]',
      'The International Classification of Headache Disorders, third edition (ICHD-3), defines chronic migraine as headache on at least 15 days per month for more than 3 months, with migraine features on at least 8 days per month. Chronic migraine is associated with greater disability, frequent medication use, and increased therapeutic complexity. [[7,8]] The European Headache Federation defines resistant migraine by failure of at least three preventive treatment classes and at least eight disabling headache days per month for at least three months. Refractory migraine involves failure of all available preventives and disabling headache for at least six months. [[9]] The American Headache Society proposal for refractory chronic migraine also considers persistent functional impairment despite appropriate management and failures across preventive therapies. [[10]] These definitions differ in ways that affect interpretation across studies.',
      'Antibodies developed for migraine prevention either block the CGRP receptor, as with erenumab, or bind directly to the peptide, as with eptinezumab, fremanezumab, and galcanezumab. [[11,12]] FOCUS, DELIVER, CONQUER, and REGAIN reports and extensions provide background on efficacy or safety across different migraine populations and follow-up periods. [[13,14,15,16,17,18]]',
      'The efficacy and safety of these agents specifically in resistant chronic migraine remain uncertain. Existing trials have enrolled heterogeneous populations and have reported subgroup outcomes inconsistently. The manuscript sets out to evaluate efficacy and safety versus placebo in adults with resistant chronic migraine, with objectives at 6 and 12 months.'
    ]},
    { id: 'methods', title: 'Methods', items: [
      ['Design and eligibility', 'The review was registered in PROSPERO on 1 July 2026 (CRD420261437483). The manuscript describes randomized placebo-controlled trials in adults aged ≥18 years, with ≥3 months of follow-up and at least one relevant efficacy or safety outcome. The current manuscript describes chronic migraine with at least three prior preventive treatment failures as an operational subgroup. Reporting of all EHF criteria and the handling of mixed cohorts require reconciliation before the methods are finalized. The manuscript excludes combination preventive regimens and states no language or publication-status restriction.'],
      ['Search and selection', 'The manuscript describes searches of PubMed, Embase via Ovid, Scopus, and Cochrane CENTRAL using controlled vocabulary and free text. The methods describe Zotero and Rayyan, dual independent title, abstract, and full-text screening, and consensus or third-reviewer adjudication. The search narrative also describes Bramer-based deduplication, a retraction cross-check, and separate screening streams for journal articles and grey literature.'],
      ['Data extraction and outcomes', 'Two reviewers independently extracted data using a pilot-tested Excel form, with consensus or a third reviewer for discrepancies. The primary efficacy outcome was ≥50% reduction in monthly migraine days from baseline. The primary safety outcome was occurrence of adverse events. Secondary outcomes included attack duration, pain intensity, rescue medication use, and disability. The manuscript describes assessments at 3, 6, and 12 months, preferring change from baseline and validated disability instruments such as MIDAS and HIT-6.'],
      ['Bias and certainty', 'The manuscript specifies Cochrane RoB 2 and independent assessment of randomization, deviations from intended interventions, missing data, outcome measurement, and selection of reported results. Certainty is assessed per outcome using GRADE and documented in GRADEpro GDT tables.'],
      ['Statistical synthesis', 'The manuscript specifies risk ratios with 95% confidence intervals for dichotomous outcomes, mean differences on common scales, and standardized mean differences across different scales. It describes pooling clinically comparable data, using narrative synthesis when appropriate, deriving missing standard deviations from other reported statistics, and handling multiple intervention arms to avoid double counting. Heterogeneity is assessed with I². Planned checks include subgroup and sensitivity analyses and assessment of reporting bias where feasible. The evidence explorer reports the models used in the available RevMan export.']
    ]},
    { id: 'manuscript-results', title: 'Results', paragraphs: [
      'The draft reports 14,837 database records and 7,663 unique, non-retracted records after processing. Draft screening counts and the PRISMA diagram require reconciliation. The evidence explorer presents separately documented preliminary 12-week analyses.'
    ], link: ['#evidence', 'Open the evidence explorer'] },
    { id: 'discussion', title: 'Discussion', pending: 'The discussion is in preparation. The manuscript has headings for the main findings, comparison with other studies, and limitations.' },
    { id: 'conclusions', title: 'Conclusions', pending: 'The manuscript’s conclusions are in preparation.' }
  ],
  documents: [
    { id:'manuscript-pdf', title:'Manuscript', file:'files/manuscript.pdf', type:'PDF', description:'University-format manuscript, version 13. Includes the draft PRISMA diagram and exclusion appendix.' },
    { id:'protocol-pdf', title:'Original protocol', file:'files/protocol.pdf', type:'PDF', description:'University research protocol, version 14, dated 25 June 2026. Original language: Spanish.' },
    { id:'search-pdf', title:'Database search strategies', file:'files/search-strategies.pdf', type:'PDF', description:'PubMed, Scopus, Embase and CENTRAL queries reproduced from the draft manuscript appendix.' },
    { id:'prisma-pdf', title:'PRISMA flow diagram', file:'files/prisma-flow-diagram.pdf', type:'PDF', description:'Draft source diagram. Screening counts are being reconciled.' },
    { id:'grade-pdf', title:'Summary of findings and GRADE', file:'files/evidence-summary.pdf', type:'PDF', description:'Review-site extract of the preliminary GRADE results, with effect estimates and population notes.' },
    { id:'exclusions-pdf', title:'Reports excluded at full-text review', file:'files/excluded-reports.pdf', type:'PDF', description:'Exclusion appendix extracted from the university-format manuscript.' },
    { id:'extraction-xlsx', title:'Data extraction workbook', file:'files/data-extraction.xlsx', type:'XLSX', description:'Project workbook exported from Google Sheets. Contains working data and reviewer notes.' },
    { id:'rob-xlsx', title:'Risk-of-bias workbook', file:'files/risk-of-bias.xlsx', type:'XLSX', description:'Project RoB 2 workbook exported from Google Sheets. Outcome-level judgments are also shown in the evidence explorer when available.' }
  ],
  prisma: {
    image: 'assets/prisma-flow.webp',
    caption: 'Draft PRISMA 2020 diagram from the manuscript appendix. The report-level counts at the end of the two screening streams are being reconciled.',
    alt: 'Draft PRISMA 2020 study-selection diagram with separate database and other-source streams. 14,837 database records were identified, 7,174 duplicates removed, and 7,663 screened. Three studies are listed as included. Report-level counts remain under review.'
  },
  analysisReferences: [
    ['Ferrari MD, Diener HC, Ning X, Galic M, Cohen JM, Yang R, et al. Fremanezumab versus placebo for migraine prevention in patients with documented failure to up to four migraine preventive medication classes (FOCUS): a randomised, double-blind, placebo-controlled, phase 3b trial. Lancet. 2019;394(10203):1030–40.', 'https://doi.org/10.1016/S0140-6736(19)31946-4'],
    ['Okonkwo R, Tockhorn-Heidenreich A, Stroud C, Paget MA, Matharu MS, Tassorelli C. Efficacy of galcanezumab in patients with migraine and history of failure to 3–4 preventive medication categories: subgroup analysis from CONQUER study. J Headache Pain. 2021.', 'https://doi.org/10.1186/s10194-021-01322-7'],
    ['U.S. Food and Drug Administration. AJOVY (fremanezumab-vfrm): biologics license application 761089 [Internet]. Drugs@FDA. 2018.', 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=761089'],
    ['National Institute for Health and Care Excellence. Fremanezumab for preventing migraine [Internet]. Technology appraisal guidance TA764. 2022.', 'https://www.nice.org.uk/guidance/ta764']
  ],
  references: [
    ['World Health Organization. Migraine and other headache disorders [Internet]. [cited 2026 May 10].', 'https://www.who.int/news-room/fact-sheets/detail/headache-disorders'],
    ['Dong L, Dong W, Jin Y, Jiang Y, Li Z, Yu D. The global burden of migraine: a 30-year trend review and future projections by age, sex, country, and region. Pain Ther. 2025;14(1):297–315.', 'https://doi.org/10.1007/s40122-024-00690-7'],
    ['Steiner TJ, Stovner LJ. Global epidemiology of migraine and its implications for public health and health policy. Nat Rev Neurol. 2023;19(2):109–17.', 'https://doi.org/10.1038/s41582-022-00763-1'],
    ['Edvinsson L. The CGRP pathway in migraine as a viable target for therapies. Headache. 2018;58 Suppl 1:33–47.', 'https://doi.org/10.1111/head.13305'],
    ['International Headache Society global practice recommendations for preventive pharmacological treatment of migraine [Internet]. [cited 2026 May 24].', 'https://doi.org/10.1177/03331024241269735'],
    ['Aguilar-Shea AL, Casanova-Peña I, Porta-Etessam J. Terapéutica en Atención Primaria: tratamiento preventivo de la migraña. Med Fam SEMERGEN. 2008;34(7):336–40.', 'https://doi.org/10.1016/S1138-3593(08)72336-0'],
    ['Weatherall MW. The diagnosis and treatment of chronic migraine. Ther Adv Chronic Dis. 2015;6(3):115–23.', 'https://doi.org/10.1177/2040622315579627'],
    ['International Headache Society. 1. Migraine. In: International Classification of Headache Disorders, 3rd edition [Internet]. [cited 2026 May 10].', 'https://ichd-3.org/1-migraine/'],
    ['Sacco S, Braschinsky M, Ducros A, Lampl C, Little P, Maassen van den Brink A, et al. European Headache Federation consensus on the definition of resistant and refractory migraine. J Headache Pain. 2020;21:76.', 'https://doi.org/10.1186/s10194-020-01130-5'],
    ['Schulman EA, Lake AE, Goadsby PJ, Peterlin BL, Siegel SE, Markley HG, et al. Defining refractory migraine and refractory chronic migraine: proposed criteria from the Refractory Headache Special Interest Section of the American Headache Society. Headache. 2008;48(6):778–82.', 'https://doi.org/10.1111/j.1526-4610.2008.01132.x'],
    ['Aditya S, Rattan A. Advances in CGRP monoclonal antibodies as migraine therapy: a narrative review. Saudi J Med Med Sci. 2023;11(1):11–8.', 'https://doi.org/10.4103/sjmms.sjmms_95_22'],
    ['Moriarty M, Mallick-Searle T, Barch CA, Oas K. Monoclonal antibodies to CGRP or its receptor for migraine prevention. J Nurse Pract. 2019;15(10):717–24.e1.', 'https://doi.org/10.1016/j.nurpra.2019.07.009'],
    ['Mulleners WM, Kim BK, Láinez MJA, Lanteri-Minet M, Pozo-Rosich P, Wang S, et al. Safety and efficacy of galcanezumab in patients for whom previous migraine preventive medication from two to four categories had failed (CONQUER): a multicentre, randomised, double-blind, placebo-controlled, phase 3b trial. Lancet Neurol. 2020;19(10):814–25.', 'https://doi.org/10.1016/S1474-4422(20)30279-9'],
    ['Ashina M, Tepper SJ, Gendolla A, Sperling B, Ettrup A, Josiassen MK, et al. Long-term effectiveness of eptinezumab in patients with migraine and prior preventive treatment failures: extension of a randomized controlled trial. J Headache Pain. 2023;24(1):155.', 'https://doi.org/10.1186/s10194-023-01688-w'],
    ['Ashina M, Lanteri-Minet M, Pozo-Rosich P, Ettrup A, Christoffersen CL, Josiassen MK, et al. Safety and efficacy of eptinezumab for migraine prevention in patients with two-to-four previous preventive treatment failures (DELIVER): a multi-arm, randomised, double-blind, placebo-controlled, phase 3b trial. Lancet Neurol. 2022;21(7):597–607.', 'https://doi.org/10.1016/S1474-4422(22)00185-5'],
    ['Ashina M, Cohen JM, Galic M, Campos VR, Barash S, Ning X, et al. Efficacy and safety of fremanezumab in patients with episodic and chronic migraine with documented inadequate response to 2 to 4 classes of migraine preventive medications over 6 months of treatment in the phase 3b FOCUS study. J Headache Pain. 2021;22(1):68.', 'https://doi.org/10.1186/s10194-021-01279-7'],
    ['Caponnetto V, Russo A, Silvestro M, Tessitore A, De Icco R, Vaghi G, et al. Long-term treatment over 52 weeks with monthly fremanezumab in drug-resistant migraine: a prospective multicenter cohort study. CNS Drugs. 2023;37(12):1069–80.', 'https://doi.org/10.1007/s40263-023-01050-3'],
    ['Pozo-Rosich P, Detke HC, Wang S, Doležil D, Li LQ, Aurora SK, et al. Long-term treatment with galcanezumab in patients with chronic migraine: results from the open-label extension of the REGAIN study. Curr Med Res Opin. 2022;38(5):731–42.', 'https://doi.org/10.1080/03007995.2022.2059975']
  ]
}
