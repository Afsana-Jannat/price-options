

const Link = ({ route }) => {
    return (

        <li className="mr-7" >
            <a href={route.path}>{route.name}</a>
        </li>

    );
};

export default Link;