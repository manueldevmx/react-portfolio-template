import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
                <h1 className="text-2xl text-bold">Encuentráme en</h1>
                <div className="mt-5">
                    <Socials />
                </div>
            </div>
            <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
                Hecho con ❤ por{" "}
                <Link href="">
                    <a className="underline underline-offset-1">Alan De León</a>
                </Link>
            </h1>
        </>
    );
};

export default Footer;
