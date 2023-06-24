import { PropsWithChildren } from 'react';

import Head from 'next/head';

import dotenv from 'dotenv';

import * as config from '@/config';

dotenv.config();

type WithMetaProps = {
    title?: string,
    description?: string,
} & PropsWithChildren;

export default function WithMeta({
    title,
    description,
    children,
}: WithMetaProps) {
    const _title = title || config.SITE_TITLE || process.env.SITE_TITLE;
    const _description = description || config.SITE_DESCRIPTION || process.env.SITE_DESCRIPTION;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{_title}</title>
                <meta name="Description" content={_description} />
            </Head>

            <section>
                {children}
            </section>
        </>
    );
}