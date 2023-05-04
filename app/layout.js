import '@/styles/globals.css';

const metadata = {
    title: "Timeline"
}

export default function RootLayout ({children}) {
    return (
        <div>
            {children}
        </div>
    )
}