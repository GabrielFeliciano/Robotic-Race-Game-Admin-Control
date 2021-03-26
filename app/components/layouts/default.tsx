import Header from '@module/header/header';
import Footer from '@module/footer/footer';

interface Props {
    children: React.ReactNode
}

export default function DefaultLayout ({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}