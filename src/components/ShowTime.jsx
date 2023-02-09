import { formatDistanceToNow, parseISO } from 'date-fns';

const ShowTime = ({ timestamp }) => {
    let time;

    if (timestamp) {
        const date = parseISO(timestamp);
        time = formatDistanceToNow(date);
    }

    return (
        <div>
            <p className="text-sm text-slate-500">
                {time}
            </p>
        </div>
    );
}

export default ShowTime;