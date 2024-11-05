import React from "react";
function ContainerProyect({
  description,
  name,
  github,
  web,
  mobile,
  images,
  visits = [],
  isFull = true,
  isVideo = false,
}) {
  return (
    <div className="flex flex-col gap-5 rounded-lg justify-center items-center">
      <div
        className="flex flex-col shadowBox rounded-md"
        style={{
          maxWidth: isFull ? "100%" : "800px",
        }}
      >
        {isVideo ? (
          <div className="w-full flex">
            {images.map((img, index) => (
              <video
                key={index}
                style={img.style}
                className="w-full h-30 rounded-md"
                autoPlay
                controls
              >
                <source
                  className="w-full h-full"
                  src={img.src}
                  type="video/mp4"
                />
              </video>
            ))}
          </div>
        ) : (
          <div
            style={{ height: "300px" }}
            className="w-full flex border justify-center items-center"
          >
            {images.map((img, index) => (
              <a
                href={img.web}
                key={index}
                target="_blank"
                className="flex justify-center items-center w-full border"
                style={{ height: "300px", ...img.containerStyle }}
              >
                <img
                  className="rounded-md w-full h-full"
                  src={img.src}
                  alt={img.name}
                  style={{ height: "300px", ...img.style }}
                />
              </a>
            ))}
          </div>
        )}
        <div className="w-full p-10 rounded-md">
          <p className="font-general text-center text-5xl mb-5 font-semibold">
            {name}
          </p>
          <p className="font-general">{description}</p>
          <div className="mt-5">
            {visits.map((visit, index) => (
              <a
                className="flex items-center gap-5"
                key={index}
                href={visit.web}
                target="_blank"
              >
                <p className="font-general">{visit.name}</p>
                <img
                  className="w-8 h-8"
                  src="/web.svg"
                  alt="visit to web"
                />
              </a>
            ))}
          </div>
          {(github || web || mobile) && (
            <div className="flex justify-center items-center gap-5 my-7">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <span className="w-20 h-20 rounded-full flex justify-center items-center">
                    <img src="/github.png" className="w-16 h-16" />
                  </span>
                </a>
              )}
              {web && (
                <a href={web} target="_blank" rel="noopener noreferrer">
                  <span className="w-20 h-20 rounded-full flex justify-center items-center">
                    <img src="/web.svg" className="w-16 h-16" />
                  </span>
                </a>
              )}
              {mobile && (
                <a href={mobile} target="_blank" rel="noopener noreferrer">
                  <span className="w-16 h-16 rounded-full flex justify-center items-center bg-white">
                    <img src={"/mobile.svg"} className="w-16 h-16" />
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ContainerProyect;
