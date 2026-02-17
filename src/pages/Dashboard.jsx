import MainLayout from "../layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>np
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
  <div className="bg-white p-4 rounded shadow">
    <p className="text-gray-500">Total Items</p>
    <h2 className="text-xl font-bold">120</h2>
  </div>

  <div className="bg-white p-4 rounded shadow">
    <p className="text-gray-500">Categories</p>
    <h2 className="text-xl font-bold">8</h2>
  </div>
</div>

    </MainLayout>
  );
};

export default Dashboard;
