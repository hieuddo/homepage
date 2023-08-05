export const headerIcon = '/doge.png';

const PageHeaderIcon = props => {
    return (
        <img
            width={20}
            height={20}
            className="w-5 inline-block transition-transform"
            src={headerIcon}
            alt-text="favicon"
            {...props}
        />
    )
}

export default PageHeaderIcon
