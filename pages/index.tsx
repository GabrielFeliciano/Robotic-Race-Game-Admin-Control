import DefaultLayout from '@layout/default'
import AdminPainel from '@template/admin-painel'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <DefaultLayout>
            <AdminPainel></AdminPainel>
        </DefaultLayout>
    )
}
