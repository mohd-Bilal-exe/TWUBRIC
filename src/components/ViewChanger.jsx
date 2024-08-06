import PropTypes from 'prop-types';
import { SquaresFour, ListBullets, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export default function ViewChanger({ setView, page, setPage, totalPages, darkMode }) {
    const handlePrevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    return (
        <section className={`w-screen px-8 flex justify-between h-fit pb-2 ${darkMode ? "text-copy bg-foreground" : "text-copyLight bg-foreground/10"}`}>
            <div className="flex flex-col justify-center items-center w-fit">
                <h1>View</h1>
                <div className="flex gap-1 flex-row justify-center items-center w-fit">
                    <button onClick={() => setView("grid")} className={`size-8 ${darkMode ? "text-copyLight bg-foregroundLight" : "bg-gray-100 text-gray-800"} p-0.5 rounded-full border border-gray-300 shadow-sm shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-y-[-2px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}>
                        <SquaresFour size={"100%"} weight="duotone" /></button>
                    <div className={`h-4/5 w-[1px] ${darkMode ? "bg-foregroundLight" : "text-gray-800"}`}></div>
                    <button onClick={() => setView("list")} className={`size-8 ${darkMode ? "text-copyLight bg-foregroundLight" : "bg-gray-100 text-gray-800"} p-0.5 rounded-full border border-gray-300 shadow-sm shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-y-[-2px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}>
                        <ListBullets size={"100%"} weight="duotone" /></button>
                </div>
            </div>
            <div className="flex flex-col items-center mr-10">
                <h1>Page</h1>
                <div className="flex flex-row justify-center items-center">
                    <button onClick={handlePrevPage} disabled={page === 0}
                        className={`size-8 ${darkMode ? "text-copyLight bg-foregroundLight" : "bg-gray-100 text-gray-800"} p-0.5 rounded-full border border-gray-300 shadow-sm shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-x-[-2px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}>
                        <ArrowLeft size={"100%"} /></button>
                    <span className="mx-2">{page + 1} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={page === totalPages - 1}
                        className={`size-8 ${darkMode ? "text-copyLight bg-foregroundLight" : "bg-gray-100 text-gray-800"} p-0.5 rounded-full border border-gray-300 shadow-sm shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-x-[2px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}>
                        <ArrowRight size={"100%"} /></button>
                </div>
            </div>
        </section>
    );
}

ViewChanger.propTypes = {
    setView: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired
};
