const DetailsPage = async ({ params }) => {
    const { usersid } = await params;

    return (
        <div>
            <h1>User Details Page</h1>
            <p>User id: {usersid}</p>
        </div>
    );
};

export default DetailsPage;
