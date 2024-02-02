import { NextRequest, NextResponse } from "next/server";
import Data from "../data/Data"
export const GET = (req: NextRequest) => {
    const searchParams = req.url.split('%20').join(' ').split('?').pop()?.split('&');
    const params = searchParams?.map(param => param.split('='))
    if (params && (params[0][1] !== 'All' || params[1][1] !== '')) {
        const newParams: { [key: string]: string } = {
            [params[0][0]]: params[0][1],
            [params[1][0]]: params[1][1].toLowerCase(),
        }
        console.log(newParams)
        if (newParams.catagry == 'All') {
            let newData = Data.filter(song => song.title.toLowerCase().includes(newParams.search as string));
            return NextResponse.json({ data: newData }, { status: 200 });
        } else {
            let newData = Data.filter(song => song.tags.includes(newParams.catagry as string) && (song.title.toLowerCase().includes(newParams.search as string)));
            return NextResponse.json({ data: newData }, { status: 200 });
        }
    }
    return NextResponse.json({ data: Data }, { status: 200 });
}