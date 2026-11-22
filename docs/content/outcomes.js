/* Verified transcriptions from RevMan and draft GRADE files. */
window.evidenceContent = {
  "outcomes": [
    {
      "id": "mmd-change",
      "title": "Monthly migraine days",
      "category": "Efficacy",
      "time": "12 weeks",
      "description": "Change in monthly migraine days from baseline.",
      "grade": {
        "rating": "High",
        "note": "The draft evidence profile reports no serious concerns in the GRADE domains for this outcome. The operational subgroup has chronic migraine and at least three prior preventive failures."
      },
      "population": "Chronic migraine, ≥3 prior preventive failures",
      "measure": "MD",
      "unit": "days/month",
      "analysis": {
        "effect": {
          "value": -3.56,
          "low": -4.72,
          "high": -2.41
        },
        "n": 489,
        "i2": 0.0,
        "model": "Fixed effect, inverse variance",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": -3.05,
              "low": -4.44,
              "high": -1.66
            },
            "active": 196,
            "control": 97,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 69.1,
            "risk": "Low risk"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": -5.14,
              "low": -8.33,
              "high": -1.95
            },
            "active": 43,
            "control": 43,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 13.1,
            "risk": "Low risk"
          },
          {
            "name": "DELIVER 2023",
            "effect": {
              "value": -4.4,
              "low": -7.15,
              "high": -1.65
            },
            "active": 55,
            "control": 55,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 17.7,
            "risk": "Some concerns"
          }
        ]
      }
    },
    {
      "id": "response-50",
      "title": "≥50% migraine-day response",
      "category": "Efficacy",
      "time": "12 weeks",
      "description": "Proportion with a reduction of at least 50% in monthly migraine days from baseline.",
      "grade": {
        "rating": "Moderate",
        "note": "The draft rating cites suspected reporting bias. The explanatory footnote requires reconciliation with the FOCUS and CONQUER rows in the analysis."
      },
      "population": "Chronic migraine, ≥3 prior preventive failures",
      "measure": "RR",
      "unit": "",
      "absolute": {
        "control": "64 per 1,000",
        "intervention": "287 per 1,000 (147 to 563)",
        "difference": "223 more per 1,000 (83 to 498 more)"
      },
      "analysis": {
        "effect": {
          "value": 4.47,
          "low": 2.29,
          "high": 8.75
        },
        "n": 379,
        "i2": 0.0,
        "model": "Fixed effect, Mantel–Haenszel",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": 4.45,
              "low": 1.83,
              "high": 10.86
            },
            "active": 196,
            "control": 97,
            "activeEvents": 45,
            "controlEvents": 5,
            "weight": 62.6,
            "risk": "Some concerns"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": 4.5,
              "low": 1.66,
              "high": 12.2
            },
            "active": 43,
            "control": 43,
            "activeEvents": 18,
            "controlEvents": 4,
            "weight": 37.4,
            "risk": "Low risk"
          }
        ]
      }
    },
    {
      "id": "response-30",
      "title": "≥30% migraine-day response",
      "category": "Efficacy",
      "time": "12 weeks",
      "description": "Proportion with a reduction of at least 30% in monthly migraine days from baseline. This threshold is additional to the registered ≥50% outcome.",
      "grade": {
        "rating": "Moderate",
        "note": "The draft rating cites unavailable DELIVER subgroup data and reliance on a FOCUS conference abstract."
      },
      "population": "Chronic migraine, ≥3 prior preventive failures",
      "measure": "RR",
      "unit": "",
      "absolute": {
        "control": "186 per 1,000",
        "intervention": "487 per 1,000 (336 to 708)",
        "difference": "301 more per 1,000 (150 to 522 more)"
      },
      "analysis": {
        "effect": {
          "value": 2.62,
          "low": 1.81,
          "high": 3.81
        },
        "n": 379,
        "i2": 0.0,
        "model": "Fixed effect, Mantel–Haenszel",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": 2.56,
              "low": 1.62,
              "high": 4.05
            },
            "active": 196,
            "control": 97,
            "activeEvents": 88,
            "controlEvents": 17,
            "weight": 71.6,
            "risk": "Some concerns"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": 2.78,
              "low": 1.47,
              "high": 5.24
            },
            "active": 43,
            "control": 43,
            "activeEvents": 25,
            "controlEvents": 9,
            "weight": 28.4,
            "risk": "Low risk"
          }
        ]
      }
    },
    {
      "id": "hit-6",
      "title": "Headache impact (HIT-6)",
      "category": "Disability",
      "time": "12 weeks",
      "description": "Change on the six-item Headache Impact Test.",
      "grade": {
        "rating": "Moderate",
        "note": "The draft rating cites risk of bias related to post hoc or incompletely reported data. The confidence interval includes improvements below the threshold cited in the evidence profile."
      },
      "population": "Chronic migraine, ≥3 prior preventive failures",
      "measure": "MD",
      "unit": "points",
      "analysis": {
        "effect": {
          "value": -2.93,
          "low": -4.38,
          "high": -1.47
        },
        "n": 405,
        "i2": 0.0,
        "model": "Fixed effect, inverse variance",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": -2.65,
              "low": -4.42,
              "high": -0.88
            },
            "active": 196,
            "control": 97,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 67.6,
            "risk": "Some concerns"
          },
          {
            "name": "DELIVER 2023",
            "effect": {
              "value": -3.5,
              "low": -6.05,
              "high": -0.95
            },
            "active": 56,
            "control": 56,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 32.4,
            "risk": "Unrecorded in export"
          }
        ]
      }
    },
    {
      "id": "rescue-days",
      "title": "Acute rescue medication days",
      "category": "Efficacy",
      "time": "12 weeks",
      "description": "Change in days of acute rescue medication use. The analysis includes a mixed episodic and chronic migraine cohort from FOCUS.",
      "grade": {
        "rating": "Moderate",
        "note": "The draft rating was downgraded for indirectness. FOCUS contributed 418 of 502 participants from a mixed episodic and chronic migraine cohort."
      },
      "population": "Mixed episodic/chronic cohort included",
      "measure": "MD",
      "unit": "days/month",
      "analysis": {
        "effect": {
          "value": -4.64,
          "low": -6.74,
          "high": -2.54
        },
        "n": 502,
        "i2": 51.8,
        "model": "Random effects, inverse variance (REML)",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": -3.91,
              "low": -5.03,
              "high": -2.78
            },
            "active": 282,
            "control": 136,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 67.9,
            "risk": "Some concerns"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": -6.2,
              "low": -9.11,
              "high": -3.29
            },
            "active": 42,
            "control": 42,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 32.1,
            "risk": "Low risk"
          }
        ]
      }
    },
    {
      "id": "midas",
      "title": "Migraine disability (MIDAS)",
      "category": "Disability",
      "time": "12 weeks",
      "description": "Change on the Migraine Disability Assessment. The analysis includes a mixed episodic and chronic migraine cohort from FOCUS.",
      "grade": {
        "rating": "Moderate",
        "note": "The draft rating was downgraded for indirectness. FOCUS contributed 418 of 500 participants from a mixed episodic and chronic migraine cohort."
      },
      "population": "Mixed episodic/chronic cohort included",
      "measure": "MD",
      "unit": "points",
      "analysis": {
        "effect": {
          "value": -22.89,
          "low": -34.48,
          "high": -11.3
        },
        "n": 500,
        "i2": 25.9,
        "model": "Fixed effect, inverse variance",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": -20.12,
              "low": -32.62,
              "high": -7.61
            },
            "active": 282,
            "control": 136,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 86.0,
            "risk": "Some concerns"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": -39.9,
              "low": -70.86,
              "high": -8.94
            },
            "active": 40,
            "control": 42,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 14.0,
            "risk": "Low risk"
          }
        ]
      },
      "sensitivity": {
        "effect": {
          "value": -24.73,
          "low": -41.13,
          "high": -8.33
        },
        "n": 500,
        "i2": 25.9,
        "model": "Random effects, inverse variance (REML)",
        "studies": [
          {
            "name": "FOCUS 2019",
            "effect": {
              "value": -20.12,
              "low": -32.62,
              "high": -7.61
            },
            "active": 282,
            "control": 136,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 76.7,
            "risk": "Some concerns"
          },
          {
            "name": "CONQUER 2020",
            "effect": {
              "value": -39.9,
              "low": -70.86,
              "high": -8.94
            },
            "active": 40,
            "control": 42,
            "activeEvents": null,
            "controlEvents": null,
            "weight": 23.3,
            "risk": "Low risk"
          }
        ]
      }
    },
    {
      "id": "teae",
      "title": "Treatment-emergent adverse events",
      "category": "Safety",
      "time": "12 weeks",
      "description": "Occurrence of treatment-emergent adverse events.",
      "grade": {
        "rating": null,
        "note": "The safety tables and extraction sources disagree on the population or event data. A verified chronic-migraine-only effect estimate and GRADE rating are pending."
      },
      "population": "Cohort under review",
      "pending": "The supplied drafts contain inconsistent safety reporting. The safety synthesis remains under review."
    },
    {
      "id": "sae",
      "title": "Serious adverse events",
      "category": "Safety",
      "time": "12 weeks",
      "description": "Occurrence of serious adverse events.",
      "grade": {
        "rating": null,
        "note": "The safety export contains a single study and the subgroup provenance requires reconciliation. A verified chronic-migraine-only effect estimate and GRADE rating are pending."
      },
      "population": "Cohort under review",
      "pending": "The supplied drafts contain inconsistent safety reporting. The safety synthesis remains under review."
    }
  ],
  "trials": [
    {
      "name": "FOCUS",
      "drug": "Fremanezumab",
      "design": "Phase 3b, randomized, double-blind, placebo-controlled",
      "period": "12-week double-blind period",
      "registry": "NCT03308968",
      "doi": "10.1016/S0140-6736(19)31946-4"
    },
    {
      "name": "CONQUER",
      "drug": "Galcanezumab",
      "design": "Phase 3b, randomized, double-blind, placebo-controlled",
      "period": "3-month double-blind period",
      "registry": "NCT03559257",
      "doi": "10.1016/S1474-4422(20)30279-9"
    },
    {
      "name": "DELIVER",
      "drug": "Eptinezumab",
      "design": "Phase 3b, randomized, double-blind, placebo-controlled",
      "period": "24-week placebo-controlled period",
      "registry": "NCT04418765",
      "doi": "10.1016/S1474-4422(22)00185-5"
    }
  ],
  "pendingOutcomes": [
    "Attack duration and pain intensity have no verified synthesis in the available outputs.",
    "Verified efficacy and safety estimates at 6 and 12 months are pending."
  ]
}
