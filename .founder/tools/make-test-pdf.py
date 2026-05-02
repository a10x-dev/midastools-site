#!/usr/bin/env python3
"""One-shot: emit a minimal valid PDF for smoke-testing send-one.py.

Writes to .founder/sales/smoke-test-mini-assessment.pdf. Single page, plain
text. Standard 14-font (Helvetica), no embedded resources. Opens cleanly in
Preview / Adobe / Gmail inline viewer.
"""
from pathlib import Path

PDF = b"""%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 200 >>
stream
BT
/F1 18 Tf
72 720 Td
(MIDAS TOOLS - SMOKE TEST PDF) Tj
0 -28 TL
/F1 12 Tf
T*
(If you can read this, send-one.py PDF attachments work end-to-end.) Tj
T*
(Fired May 1 2026 - pre-window verification.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000109 00000 n
0000000210 00000 n
0000000462 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
531
%%EOF
"""

out = Path(__file__).parent.parent / "sales" / "smoke-test-mini-assessment.pdf"
out.write_bytes(PDF)
print(f"wrote {out} ({len(PDF)} bytes)")
