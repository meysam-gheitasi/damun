import Head from "next/head";

//Logo Shopp
import logo from "../assets/damun.jpeg"

type LayoutProps = {
    title: string,
    children: any
}

export default function Layout ({ title, children } : LayoutProps) {
    return (
        <>
        <Head>
            <title>{`Damoun-${title}`}</title>
        </Head>
        <div>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
        </>
    )
}