import Header from '@module/header/header';
import Footer from '@module/footer/footer';

import style from './default.module.scss';

interface Props {
    children: React.ReactNode
}

export default function DefaultLayout ({ children }: Props) {
    return (
        <>
            <div className={style.layout}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}