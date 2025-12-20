import { ChefHat, Shield } from "lucide-react";
import { users } from "../../../../constants";
import ProfileInfo from "../../../../components/Profile/ProfileInfo";
import RoleRequestBtn from "../../../../components/Profile/RoleRequestBtn";
import DashboardPageHeader from "../../../../components/Shared/Header/DashboardPageHeader";

const ProfilePage = () => {
  const user = users[1];

  return (
    <div>
      <DashboardPageHeader
        title="My Profile"
        subTitle="Manage your account information and preferences"
      ></DashboardPageHeader>

      <div className="bg-card rounded-2xl border border-base-300 card-elevated overflow-hidden">
        <div className="h-32 bg-linear-to-r from-primary to-primary/60" />
        <ProfileInfo user={user}></ProfileInfo>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <RoleRequestBtn
          title="Become a Chef"
          subTitle="Start selling your home-cooked meals"
          icon={<ChefHat className="w-6 h-6 text-secondary" />}
          btnLabel="Request Chef Access"
        ></RoleRequestBtn>
        <RoleRequestBtn
          title="Become an Admin"
          subTitle="Help manage the platform"
          icon={<Shield className="w-6 h-6 text-primary" />}
          btnLabel="Request Admin Access"
          btnClasses="btn-secondary"
        ></RoleRequestBtn>
      </div>
    </div>
  );
};

export default ProfilePage;
