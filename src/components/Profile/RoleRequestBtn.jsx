const RoleRequestBtn = ({
  icon,
  title,
  subTitle,
  btnLabel,
  btnClasses,
  ...BtnProps
}) => {
  return (
    <div className="bg-base-100 rounded-2xl p-6 border border-base-300 card-elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{subTitle}</p>
        </div>
      </div>
      <button
        className={`btn btn-primary btn-shine w-full ${btnClasses}`}
        {...BtnProps}
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default RoleRequestBtn;
