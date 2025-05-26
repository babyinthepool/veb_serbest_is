  // Bütün kiçik şəkillərin id-lərini siyahıya alırıq
  const imageIds = ["sekil-1", "sekil-2", "sekil-3", "sekil-4", "sekil-5", "sekil-6"];

  // Hər biri üçün klik hadisəsi əlavə edirik
  imageIds.forEach(id => {
    const thumbnail = document.getElementById(id);
    thumbnail.addEventListener("click", function () {
      const poster = document.getElementById("poster");
      poster.src = this.src; // Böyük şəkli kiçik şəklin src-si ilə əvəz edirik
    });
  });
