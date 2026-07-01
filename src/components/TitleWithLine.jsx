function TitleWithLine({
  title,
  titleColor = "text-[#16202D]",
  lineMaxWidth = "max-w-[520px]",
}) {
  return (
    <div className="mb-10">
      <div className="flex items-start sm:items-center gap-4">
        <h2 className={`font-extrabold text-3xl lg:text-4xl ${titleColor}`}>
          {title}
        </h2>

        <div
          className={`
              h-[2px]
    bg-[#FACC15]
    flex-1
    min-w-[180px]
    sm:min-w-[60px]
    mt-[18px]
    sm:mt-0

            ${lineMaxWidth}
          `}
        ></div>
      </div>
    </div>
  );
}

export default TitleWithLine;
