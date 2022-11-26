import { useContext } from 'react';
import AlertContext from '../../context/alerts/AlertContext';
import { IoCloseCircleSharp } from "react-icons/io5";

const Alert = () => {

    const { alert } = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-center mb-4 space-x-2">
            {alert.type === 'error' && (
                <IoCloseCircleSharp size={20} color='#b91c1c' />
            )}
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
}

export default Alert
