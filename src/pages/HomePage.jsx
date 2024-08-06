import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import Filters from '../components/Filters';
import ViewChanger from '../components/ViewChanger';

export default function HomePage({ darkMode }) {
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);
    const [filteredFollowers, setFilteredFollowers] = useState([]);
    const [sortCriteria, setSortCriteria] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [view, setView] = useState("grid");
    const [expandedCard, setExpandedCard] = useState(null);

    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Error fetching data. Response was not ok');
                }
                const data = await response.json();
                setFollowers(data);
                setFilteredFollowers(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    const handleRemove = (id) => {
        setFollowers(followers.filter(follower => follower.uid !== id));
        setFilteredFollowers(filteredFollowers.filter(follower => follower.uid !== id));
    };

    const filterByDate = () => {
        let filtered = followers;
        if (fromDate) {
            filtered = filtered.filter(follower => new Date(follower.join_date * 1000) >= fromDate);
        }
        if (toDate) {
            filtered = filtered.filter(follower => new Date(follower.join_date * 1000) <= toDate);
        }
        setFilteredFollowers(filtered);
    };

    const clearDateFilters = () => {
        setFromDate(null);
        setToDate(null);
        setFilteredFollowers(followers);
    };

    const sortFollowers = (criteria) => {
        let sorted = [...filteredFollowers];
        if (sortCriteria === criteria) {
            sorted.reverse();
        } else {
            sorted.sort((a, b) => {
                if (criteria === 'username') {
                    return a.username.localeCompare(b.username);
                } else if (criteria === 'join_date') {
                    return new Date(a.join_date * 1000) - new Date(b.join_date * 1000);
                }
                return 0;
            });
        }
        setSortCriteria(criteria);
        setFilteredFollowers(sorted);
    };

    const clearSort = () => {
        setSortCriteria(null);
        setFilteredFollowers(followers);
    };

    const totalPages = Math.ceil(filteredFollowers.length / itemsPerPage);

    return (
        <div className="w-screen h-full overflow-x-hidden">
            <Filters
                darkMode={darkMode}
                fromDate={fromDate}
                setFromDate={setFromDate}
                toDate={toDate}
                setToDate={setToDate}
                filterByDate={filterByDate}
                clearDateFilters={clearDateFilters}
                sortFollowers={sortFollowers}
                sortCriteria={sortCriteria}
                clearSort={clearSort}
            />
            <ViewChanger setView={setView} page={page} setPage={setPage} totalPages={totalPages} darkMode={darkMode} setItemsPerPage={setItemsPerPage} />
            {filteredFollowers.length === 0 && <div className={`w-full h-full flex items-center justify-center text-xl text-copy`}>No Users</div>}
            <div className={`py-10 ${view === "grid" ? "flex flex-wrap gap-10 items-center justify-center" : "flex gap-3 flex-col items-center"} w-screen h-full overflow-hidden`}>
                {filteredFollowers.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map(follower => (
                    <UserCard
                        key={follower.uid}
                        Key={follower.uid}
                        follower={follower}
                        handleRemove={handleRemove}
                        view={view}
                        darkMode={darkMode}
                        isExpanded={expandedCard === follower.uid}
                        onExpand={() => setExpandedCard(expandedCard === follower.uid ? null : follower.uid)}
                    />
                ))}
            </div>
        </div>
    );
}
HomePage.propTypes = {
    darkMode: PropTypes.bool.isRequired
};