export const headerIcon = '/favicon/pepe.png';

const PageHeaderIcon = props => {
    return (
        <img
            width={20}
            height={20}
            className="w-5 inline-block transition-transform"
            src={headerIcon}
            alt-text="favicon"
            alt="pepe the frog"
            {...props}
        />
    )
}

export default PageHeaderIcon
