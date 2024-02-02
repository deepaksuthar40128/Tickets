import { NextRequest, NextResponse } from "next/server";
import Data from "../data/Data";

const GET = (Request: NextRequest) => {
    const id = Request.nextUrl.pathname.split('/').pop();
    const readId = +(id as string);
    let video = (Data.filter(video => video.id === readId))[0];
    return NextResponse.json({ video }, { status: 200 });
}

export { GET };