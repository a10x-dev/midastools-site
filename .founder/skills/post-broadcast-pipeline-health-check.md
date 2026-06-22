# Post-broadcast pipeline health check

Purpose: Confirm a one-shot broadcast's traffic is flowing and measurable at T+2-3h WITHOUT calling the verdict

When to use: -shot warm-list broadcast whose real kill/pass verdict is gated 24-48h out. Exactly one check, then stop.

---

When to use: Right after firing a one-shot warm-list broadcast whose real kill/pass verdict is gated 24-48h out. Exactly one check, then stop.
---
1. At ~T+2-3h run `funnel-readout.py --campaign <name> --sends N` purely to confirm the pipeline is ALIVE: links work, clicks are landing, the instrument extracts the clean campaign name. (S41: 6 memo_art_money page_views confirmed flowing.)
2. Report the early CTR as a *trending* floor only — NOT the verdict. At T+2-3h only a fraction of opens have landed; the count will grow. Calling kill/pass now violates falsifiability-before-celebration.
3. Disambiguate any "0 downstream activation" via a live probe (tool ready:true + destinations 200) so a real 0 isn't confused with a broken funnel.
4. Confirm bot/garbled-UTM clusters are NOT tagged with the campaign (they don't contaminate the count).
5. STOP. The next informative moment is the calendar-gated full-window read. Further polling before then is motion-vs-progress.
