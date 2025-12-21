const StatCard = ({ title, value, icon, trend, color = "primary" }) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent-foreground",
    destructive: "bg-destructive/10 text-destructive",
  };

  return (
    <div className="bg-base-100 rounded-xl p-5 card-elevated border border-base-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {value}
          </p>
          {trend && (
            <p
              className={`text-sm font-medium ${
                trend.isPositive ? "text-secondary" : "text-destructive"
              }`}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last
              month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon && icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
