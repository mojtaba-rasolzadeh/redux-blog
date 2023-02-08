import { useDispatch } from 'react-redux';

import {reactionAdded } from '../reducers/blogSlice';

const reactionEmoji = {
    rocket: '🚀',
    eyes: '👀',
    hooray: '🎉',
    dislike:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500 hover:text-red-700"><path d="M18.905 12.75a1.25 1.25 0 01-2.5 0v-7.5a1.25 1.25 0 112.5 0v7.5zM8.905 17v1.3c0 .268-.14.526-.395.607A2 2 0 015.905 17c0-.995.182-1.948.514-2.826.204-.54-.166-1.174-.744-1.174h-2.52c-1.242 0-2.26-1.01-2.146-2.247.193-2.08.652-4.082 1.341-5.974C2.752 3.678 3.833 3 5.005 3h3.192a3 3 0 011.342.317l2.733 1.366A3 3 0 0013.613 5h1.292v7h-.963c-.684 0-1.258.482-1.612 1.068a4.012 4.012 0 01-2.165 1.73c-.433.143-.854.386-1.012.814-.16.432-.248.9-.248 1.388z" /></svg>,  
    like: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-700 hover:text-emerald-900"><path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" /></svg>,
};

const ReactionButton = ({id,reactions}) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full flex flex-wrap justify-center items-center sm:justify-end space-x-4 sm:space-x-6">
            {
                Object.entries(reactionEmoji).map(([name, emoji]) => (
                    <div key={name} className="flex items-center space-x-1">
                        <button onClick={() => dispatch(reactionAdded({ blogId: id, reaction: name }))}>
                            {emoji}
                        </button>
                        <span className="text-xs font-bold text-gray-600">{reactions[name]}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default ReactionButton;