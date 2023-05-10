import { NextResponse} from 'next/server';


export function GET() {
    console.log('here')
    return NextResponse.json({ name: 'John Doe' })
}