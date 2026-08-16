import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();

  if (host === "revisatufinca.com" || host === "www.revisatufinca.com") {
    return NextResponse.redirect(
      new URL("https://www.consultoriourbanistico.com/revisa-tu-finca"),
      308
    );
  }

  return NextResponse.next();
}
