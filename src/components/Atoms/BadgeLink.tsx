import Link from "next/link";
import React from 'react';
import styles from '@/styles/components/Atoms/BadgeLink.module.scss'

interface BadgeLinkProps {
    height?: number;
    width?: number;
}

const BadgeLink: React.FC<BadgeLinkProps> = ({ height, width }) => {

    const badgeStyle: React.CSSProperties = {
        height: height ? `${height}px` : 'auto',
        width: width ? `${width}px` : 'auto',
    };


    return (
        <Link className={styles.BadgeLink} href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                className={styles.BadgeLinkIcon}
                height={height}
                viewBox="0 0 75 75"
                fill="none">
                <path d="M1.18422 45.0349H16.544V60.3947H1.18422V45.0349Z"  />
                <path d="M28.1362 45.0349H43.496V60.3947H28.1362V45.0349Z"  />
                <path d="M31.3241 14.6052H46.6839V29.965H31.3241V14.6052Z"  />
                <path d="M31.3241 14.6052L46.6839 29.965L16.544 60.3947L1.18422 45.0349L31.3241 14.6052Z" />
                <path d="M58.566 14.6052L73.9257 29.965L43.496 60.3947L28.4261 45.0349L58.566 14.6052Z"  />
                <path d="M58.566 14.6052H73.9257V29.965H58.566V14.6052Z" />
            </svg>
        </Link>
    )
}

export default BadgeLink;