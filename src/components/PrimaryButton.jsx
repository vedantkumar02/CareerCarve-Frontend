import { componentStyles } from "../styles";

/* ----- Style Classes ----- */
const { btnPrimary } = componentStyles.primaryBtnStyles;

export const PrimaryButton = (props) => {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            className={btnPrimary}
            onClick={props.action}
        >
            {props.children}
        </button>
    );
};
