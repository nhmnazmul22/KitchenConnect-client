import { ChefHat, Shield } from "lucide-react";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import RoleRequestBtn from "@/components/Profile/RoleRequestBtn";
import DashboardPageHeader from "@/components/Shared/Header/DashboardPageHeader";
import useAuth from "@/hooks/useAuth";
import { sendRoleRequest } from "@/services/RequestRoleService";
import toast from "react-hot-toast";
import { useState } from "react";

const ProfilePage = () => {
  const { userProfile } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSendRoleRequest = async (requestType) => {
    try {
      setLoading(true);
      const payload = {
        userName: userProfile.name,
        userEmail: userProfile.email,
        requestType,
      };
      const result = await sendRoleRequest(payload);
      console.log(result);
      if (result.success) {
        toast.success(result.message || "Role request send successful");
        return;
      } else {
        toast.error(result.message || "Role request send failed");
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <DashboardPageHeader
        title="My Profile"
        subTitle="Manage your account information and preferences"
      ></DashboardPageHeader>

      <div className="bg-base-100 rounded-2xl border border-base-300 card-elevated overflow-hidden">
        <div className="h-32 bg-linear-to-r from-primary to-primary/60" />
        <ProfileInfo></ProfileInfo>
      </div>

      {userProfile.role !== "admin" && (
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {userProfile.role === "user" && (
            <RoleRequestBtn
              title="Become a Chef"
              subTitle="Start selling your home-cooked meals"
              icon={<ChefHat className="w-6 h-6 text-secondary" />}
              btnLabel="Request Chef Access"
              loading={loading}
              onClick={() => handleSendRoleRequest("chef")}
            ></RoleRequestBtn>
          )}
          <RoleRequestBtn
            title="Become an Admin"
            subTitle="Help manage the platform"
            icon={<Shield className="w-6 h-6 text-primary" />}
            btnLabel="Request Admin Access"
            btnClasses="btn-secondary"
            loading={loading}
            onClick={() => handleSendRoleRequest("admin")}
          ></RoleRequestBtn>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
