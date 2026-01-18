function Progress() {
    const aptSolved = JSON.parse(localStorage.getItem("aptSolved") || "[]");
    const dsaSolved = JSON.parse(localStorage.getItem("dsaSolved") || "[]");
    const mockAttempts = localStorage.getItem("mockAttempts") || 0;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Your Progress</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded">
                    <h2 className="text-lg font-semibold">Aptitude</h2>
                    <p className="text-3xl mt-2">{aptSolved.length}</p>
                    <p className="text-gray-500">Questions solved</p>
                </div>

                <div className="p-6 bg-white shadow rounded">
                    <h2 className="text-lg font-semibold">DSA</h2>
                    <p className="text-3xl mt-2">{dsaSolved.length}</p>
                    <p className="text-gray-500">Problems solved</p>
                </div>

                <div className="p-6 bg-white shadow rounded">
                    <h2 className="text-lg font-semibold">Mock Tests</h2>
                    <p className="text-3xl mt-2">{mockAttempts}</p>
                    <p className="text-gray-500">Attempts</p>
                </div>
            </div>
        </div>
    );
}

export default Progress;
