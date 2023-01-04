import Head from 'next/head'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="bg-[#181a1b] h-screen">
            <Head>
                <title>Anthony Mai</title>
                <meta name="description" content="Anthony Mai's Personal Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {children}
        </div>
    );
}

export default Layout