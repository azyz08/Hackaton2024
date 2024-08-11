import { Link } from "react-router-dom";
import "./style.scss"
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer border-t-2">
            <Link className="logo" to={"/"}><img src="https://media.tenor.com/c9hBqUmb588AAAAj/sustainability-environment.gif" alt="" /><p>EcoSwap</p></Link>
            <ul>
                <Link className="link" to={"/"}>{t("son")}</Link>
                <Link className="link" to={"/about"}>{t("log")}</Link>
                <Link className="link" to={"/murojaat"}>{t("bor")}</Link>
                <Link className="link" to={"/contact"}>{t("pop")}</Link>
            </ul>
        </div>
    );
}