import useAuth from "@/hooks/useAuth";
import { Award, Edit2, Mail, MapPin, User } from "lucide-react";
import React from "react";

const ProfileInfo = () => {
  const { userProfile } = useAuth();

  return (
    <div className="px-6 pb-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 mb-6">
        <figure className="relative">
          <img
            src={userProfile.profileImage || null}
            alt={userProfile.name}
            className="w-24 h-24 rounded-2xl border-4 border-base-200 object-cover"
          />
        </figure>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {userProfile.name}
            </h2>
            <span className="badge badge-secondary capitalize">
              {userProfile.role}
            </span>
            <span className="badge bg-secondary/20 text-secondary">
              {userProfile.status}
            </span>
          </div>
        </div>
        <button className="btn btn-primary sm:self-center">
          <Edit2 className="w-4 h-4" />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Full Name</p>
            <p className="font-medium text-foreground">{userProfile.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email Address</p>
            <p className="font-medium text-foreground">{userProfile.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Address</p>
            <p className="font-medium text-foreground">{userProfile.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Account Status</p>
            <p className="font-medium text-foreground capitalize">
              {userProfile.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
