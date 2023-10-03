"use client";

const CVPath = "/CV.pdf";
export default function DownloadCV() {
  function downloadFile() {
    const link = document.createElement("a");

    link.style.display = "none";
    link.href = CVPath;

    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(link.href);
    link.parentNode?.removeChild(link);
  }
  return (
    <li className="text-white link-nav ease-in-out">
      <a
        href="#"
        onClick={() => {
          downloadFile();
        }}
      >
        CV
      </a>
    </li>
  );
}
