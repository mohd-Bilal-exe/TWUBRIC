import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ darkMode, fromDate, setFromDate, toDate, setToDate, filterByDate, clearDateFilters, sortFollowers, sortCriteria, clearSort }) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row px-8 justify-between py-2 pb-4 ${darkMode ? "text-copy bg-foreground" : "text-copyLight bg-foreground/10"}`}>
            <div className="flex flex-col lg:flex-row gap-1 items-center mb-4 lg:mb-0">
                <h1 className="font-semibold mb-2 lg:mb-0 lg:mr-2">Filter By Date:</h1>
                <div className="flex flex-row gap-1 items-center">
                    <div className="relative mr-2">
                        <DatePicker
                            selected={fromDate}
                            onChange={date => setFromDate(date)}
                            selectsStart
                            startDate={fromDate}
                            endDate={toDate}
                            placeholderText="From Date"
                            className="py-1 px-4 border border-gray-300 rounded-full shadow-lg w-full"
                        />
                    </div>
                    <div className="relative mr-2">
                        <DatePicker
                            selected={toDate}
                            onChange={date => setToDate(date)}
                            selectsEnd
                            startDate={fromDate}
                            endDate={toDate}
                            minDate={fromDate}
                            placeholderText="To Date"
                            className="py-1 px-4 border border-gray-300 rounded-full shadow-lg w-full"
                        />
                    </div>
                    <button
                        onClick={filterByDate}
                        className={`h-fit text-xs px-3 py-1 bg-blue-500/30 border border-blue-500 rounded-full shadow-lg shadow-blue-500/30 font-semibold uppercase transition-all duration-300 hover:translate-y-[-5px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(59,130,246,0.3)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}
                    >
                        Filter
                    </button>
                    <button
                        onClick={clearDateFilters}
                        className="h-fit text-xs px-3 py-1 bg-red-500/40 border border-red-500 rounded-full shadow-lg shadow-red-500/30 font-semibold uppercase transition-all duration-300 hover:translate-y-[-5px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(239,68,68,0.2)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none"
                    >
                        Clear Date Filters
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-1 items-center">
                <h1 className="font-semibold mb-2 lg:mb-0 lg:mr-2">Sort By:</h1>
                <div className="flex flex-row gap-1 items-center">
                    <button
                        onClick={() => sortFollowers('username')}
                        className={`text-xs px-3 py-1 rounded-full border-2 border-gray-300 shadow-lg shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-y-[-5px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none ${sortCriteria === 'username' ? 'bg-gray-900/70 text-white border-blue-500' : 'bg-gray-100 text-gray-800'}`}
                    >
                        Username
                    </button>
                    <button
                        onClick={() => sortFollowers('join_date')}
                        className={`text-xs px-3 py-1 rounded-full border-2 border-gray-300 shadow-lg shadow-copy/20 font-semibold uppercase transition-all duration-300 hover:translate-y-[-5px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none ${sortCriteria === 'join_date' ? 'bg-gray-900/70 text-white border-blue-500' : 'bg-gray-100 text-gray-800'}`}
                    >
                        Join Date
                    </button>
                    <button
                        onClick={clearSort}
                        className="text-xs px-3 py-1 bg-yellow-500/30 border border-yellow-500 shadow-lg shadow-yellow-500/20 rounded-full font-semibold uppercase transition-all duration-300 hover:translate-y-[-5px] hover:rounded-3xl hover:shadow-[0px_4px_0px_rgba(202,138,4,0.3)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none"
                    >
                        Clear Sort
                    </button>
                </div>
            </div>
        </div>
    );
};

Filters.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    fromDate: PropTypes.instanceOf(Date),
    setFromDate: PropTypes.func.isRequired,
    toDate: PropTypes.instanceOf(Date),
    setToDate: PropTypes.func.isRequired,
    filterByDate: PropTypes.func.isRequired,
    clearDateFilters: PropTypes.func.isRequired,
    sortFollowers: PropTypes.func.isRequired,
    sortCriteria: PropTypes.string.isRequired,
    clearSort: PropTypes.func.isRequired,
};

export default Filters;
