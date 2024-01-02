import Image from "next/image";
import React, { useState } from "react";
import siteConfig from "../../../siteConfig";
import { TailSpin } from "react-loader-spinner";

const Render = ({ renderInfo }) => {
  const [selectedResolutionIndex, setSelectedResolutionIndex] = useState(0);
  const [filteredFormats, setFilteredFormats] = useState(
    renderInfo.formats.filter((r) => !r.url.includes('manifest')).reverse().splice(1,10)
  );
  const isResolutionSelected = selectedResolutionIndex !== null;
  const handleResolutionChange = (index) => {
    setSelectedResolutionIndex(index);
  };
  const color = siteConfig.buttonColor;
  const [loading, setLoading] = useState(false);
  const handleDownloadButtonClick = async (url, fileName) => {
    try {
      setLoading(true);
      const corsProxyUrl = "";
      const proxyUrl = corsProxyUrl + url;
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch video file. Status: ${response.status}`);
      }

      const blob = await response.blob();

      // Check if the file is WebP or WebM and change the extension to ".mp4"
      console.log(fileName)
      const hasFileExtension = /\.\w+$/g.test(fileName);
      let modifiedFileName = hasFileExtension ? fileName : `${fileName}.mp4`;
  
      // Check if the file is WebP or WebM and change the extension to ".mp4"
      if (url.toLowerCase().endsWith(".webp") || url.toLowerCase().endsWith(".webm")) {
        modifiedFileName = `${modifiedFileName}.mp4`;
      }
      
console.log(modifiedFileName)
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = modifiedFileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading video:", error.message);
    } finally {
      setLoading(false);
    }
   // window.open(siteConfig.smartlink, "_blank");
  };


  const handleButtonClick = () => {
    if (siteConfig.functional == "yes") {
      window.open(siteConfig.smartlink, "_blank");
    }
  };

  return (
    <div className="flex items-center gap-[10px] flex-col justify-center mt-[10px] w-full">
      <p className="text-[18px] text-center leading-[1] max-w-[380px] lg:max-w-[540px] mb-4">
        {renderInfo.title}
      </p>
      {loading ? (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div className="centered-spinner" style={{ zIndex: 1001 }}>
            <TailSpin
              visible={loading}
              width={50}
              height={50}
              color={siteConfig.buttonColor}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] items-center lg:items-center rounded-[10px] px-[10px]">
        <div className="px-[10px] sm:px-0 mr-[20px] lg:mr-[30px]">
          <Image
            style={{ width: "auto", height: "auto" }}
            className="max-h-[220px] lg:max-h-[190px] rounded-[10px]"
            src={renderInfo.thumbnail}
            alt=""
            width={1200}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-[20px] justify-center lg:px-0 px-[40px] sm:px-0 sm:max-w-[300px] h-full lg:max-w-[220px] py-[15px] items-center">
          <div className="flex flex-col gap-[5px] lg:gap-[20px] w-full h-full">
         <div>

          <p className="text-start justify-start text-[12px] justify-center gap-[3px] flex items-center">
                Select resolution
                <ToolBox
                  text={"Select the resolution that you need"}
                  />
              </p>
          <select
            id="resolutionDropdown"
            className="rounded-lg py-2 px-3 text-[12px] border-2 border-gray-300"
            value={selectedResolutionIndex}
            onChange={(e) => handleResolutionChange(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '14px',
              appearance:'auto',
              border: '2px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fff',
              color: '#333',
              width: '200px',
            }}
            >
            {filteredFormats.map((resolution, index) => (
              <option
              key={index}
              value={index}
              style={{
                padding: '8px',
                fontSize: '18px',
                lineHeight:'10px',
                backgroundColor: '#fff',
                color: '#333',
              }}
              >
                {resolution.resolution}
              </option>
            ))}
          </select>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
              <button
                onClick={() =>
                  handleDownloadButtonClick(
                    filteredFormats[selectedResolutionIndex]?.url,
                    renderInfo.title
                  )
                }
                style={
                  {
                    "--main-color": siteConfig.buttonColor,
                    opacity: isResolutionSelected ? 1 : 0.5,
                  } as any
                }
                className="button-styling justify-center inline-flex rounded-lg py-3 px-5 text-white font-medium ease-in duration-300 hover:opacity-80"
                disabled={!isResolutionSelected}
              >
                Download
              </button>
            </div>
            <div className='w-full flex flex-col gap-[5px]'>
            <a
            target=""
            className={`${
              isResolutionSelected ? 'enabled-link' : 'disabled-link'
            } justify-center inline-flex rounded-lg py-3 px-5 bg-white text-[black] border-2 border-black font-medium ease-in duration-300 hover:bg-gray-100 dark:shadow-button dark:hover:button-gradient-hover transform hover:scale-110 flex items-center justify-center transition duration-500 ease-in-out`}
            href={siteConfig.promotedBrandSlug}
            //href={filteredFormats[selectedResolutionIndex]?.url}
          >
            Download HD
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;

const ToolBox = ({ text }) => {
  return (
    <span className="tooltip bg-[gray] w-[12px] h-[12px] flex items-center justify-center text-[12px] rounded-full text-[white]">
      <span className="tooltiptext">{text}</span>?
    </span>
  );
};
