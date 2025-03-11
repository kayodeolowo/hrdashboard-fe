export  const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-8 bg-gray mb-4"
            style={{ width: '100%' }}
          ></div>
        ))}
      </div>
    );
  };