import empty from '../assets/13525-empty.gif'

const EmptyList = () => {
    return (
        <div className="flex justify-center">
            <img src={empty} className="max-w-xs w-full" alt="" />
        </div>
    );
}

export default EmptyList;