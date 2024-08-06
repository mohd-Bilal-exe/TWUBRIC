import PropTypes from 'prop-types';
import { formatDate } from '../utils/dateTime';
import { motion } from 'framer-motion';

export default function UserCard({ Key, follower, handleRemove, isExpanded, onExpand, view, darkMode }) {
    return (
        <motion.div
            key={Key}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: (view === "list" && isExpanded) ? "auto" : view === "grid" ? "auto " : "200px" }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`p-4  ${view === "list" ? "w-[520px]" : "w-80"} bg-gradient-to-tl ${darkMode
                ? "from-foreground to-Lightcopy-lighter/30 text-copy"
                : "from-foreground/10 to-foreground/20 text-copyLight"
                } rounded-lg shadow-md flex flex-col items-center justify-between overflow-hidden cursor-pointer place-self-center transition-colors duration-300`}
            onClick={view === "list" ? onExpand : null}
        >
            <div id="info" className="w-full h-fit flex gap-5 justify-between items-center">
                <img src={follower.image} alt={follower.username} className="w-1/3 rounded-full" />
                <div className="mr-9 w-fit">
                    <h3 className={`font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>User Name</h3>
                    <h1 className="font-semibold text-medium">{follower.username}</h1>
                    <h3 className={` font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Full Name</h3>
                    <h1 className="text-md font-semibold text-medium">{follower.fullname}</h1>
                </div>
            </div>
            <>
                <div className="w-11/12 h-[1px] my-7 bg-gray-300" />
                <div className="w-full px-8 flex">
                    <span className="w-full flex flex-col justify-center text-lg gap-1">
                        <h3 className={`font-normal ml-1 ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Score</h3>
                        <h1 className="text-6xl tracking-tighter">{follower.twubric.total}</h1>
                    </span>
                    <div id="prop" className="grid grid-row-3">
                        <div>
                            <h3 className={`font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Friends</h3>
                            <h1>{follower.twubric.friends}</h1>
                        </div>
                        <div>
                            <h3 className={`font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Influence</h3>
                            <h1>{follower.twubric.influence}</h1>
                        </div>
                        <div>
                            <h3 className={`font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Chirpiness</h3>
                            <h1>{follower.twubric.chirpiness}</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 my-2 mt-4 flex justify-center items-center">
                    <span className="w-2/3">
                        <h3 className={`font-normal ${darkMode ? "text-white " : "text-Lightcopy-light"}`}>Date joined</h3>
                        {formatDate(follower.join_date)}
                    </span>
                    <button
                        className={`w-1/3 p-2 ${darkMode ? "bg-red-500/80 hover:bg-red-500" : "bg-red-500"} text-white rounded transition-colors duration-300`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(follower.uid);
                        }}
                    >
                        Remove
                    </button>
                </div>
            </>
        </motion.div>
    );
}

UserCard.propTypes = {
    Key: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    follower: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        join_date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        twubric: PropTypes.shape({
            total: PropTypes.number.isRequired,
            friends: PropTypes.number.isRequired,
            influence: PropTypes.number.isRequired,
            chirpiness: PropTypes.number.isRequired,
        }).isRequired,
        uid: PropTypes.string.isRequired,
    }).isRequired,
    handleRemove: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onExpand: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
};
