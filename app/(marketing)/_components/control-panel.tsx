"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import jsPDF from "jspdf";
import {
  ClipboardIcon,
  ClipboardPasteIcon,
  DownloadIcon,
  LinkIcon,
  PaletteIcon,
  PrinterIcon,
  SettingsIcon,
} from "lucide-react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { useEffect, useRef, useState } from "react";

export default function ControlPanel() {
  const [URL, setURL] = useState("");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [fgColor, setFgColor] = useState("#000000");
  const [errorCorrection, setErrorCorrection] = useState("L");
  const [size, setSize] = useState(400);

  const canvasRef = useRef<HTMLDivElement>(null);
  const saveToPNG = () => {
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = size;
      newCanvas.height = size;

      const context = newCanvas.getContext("2d");
      if (context) {
        context.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);
      }

      const pngFile = newCanvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = "mujqrkod.cz QR kód";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    }
  };

  const saveToWEBP = () => {
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = size;
      newCanvas.height = size;

      // Draw the QR code on the new canvas
      const context = newCanvas.getContext("2d");
      if (context) {
        context.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height);
      }

      // Convert the new canvas to a PNG image
      const webpFile = newCanvas.toDataURL("image/webp");

      const downloadLink = document.createElement("a");
      downloadLink.download = "mujqrkod.cz QR kód";
      downloadLink.href = `${webpFile}`;
      downloadLink.click();
    }
  };

  const saveToClipboard = () => {
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      canvas.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);
        }
      });
    }
  };

  const saveToPDF = () => {
    const canvas = canvasRef.current?.children[0] as HTMLCanvasElement;
    if (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      pdf.setFontSize(12);
      pdf.text("mujqrkod.cz", 20, 20, { align: "center" });
      pdf.addImage(imgData, "PNG", 8, 28, 60, 60);
      pdf.output("dataurlnewwindow");
    }
  };

  useEffect(() => {
    console.log(errorCorrection);
  }, [errorCorrection]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      <div className="flex gap-6 py-4 lg:py-8 flex-col w-full lg:w-[750px]">
        <div className="rounded-2xl bg-background shadow-md p-8">
          <div className="flex items-center gap-2">
            <LinkIcon size={18} className="text-muted-foreground" />
            <h1 className="font-semibold text-xl">URL</h1>
          </div>
          <div className="mt-3">
            <label className="text-muted-foreground text-sm" htmlFor="url">
              Zadejte URL vašeho odkazu
            </label>
            <div className="flex items-center gap-3">
              <Input
                maxLength={200}
                className="rounded-2xl w-full p-2 pl-3 mt-1"
                type="text"
                id="url"
                value={URL}
                onChange={(e) => setURL(e.target.value)}
                placeholder="https://drie.cz"
              />
              <div
                onClick={async () => {
                  const text = navigator.clipboard.readText();
                  setURL(await text);
                }}
                className="p-3 cursor-pointer bg-muted rounded-2xl shadow-md"
              >
                <ClipboardPasteIcon size={18} />
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 py-4 font-medium">
            <PaletteIcon size={18} className="text-muted-foreground" />
            Barvy
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <p className="text-muted-foreground text-sm font-semibold mb-1">
                Barva pozadí
              </p>
              <div className="flex gap-4">
                <Input
                  type="text"
                  value={bgColor}
                  maxLength={7}
                  onChange={(e) => setBgColor(e.target.value)}
                />
                <input
                  className="w-16 h-10 ring-0 outline-0 border-0 ca"
                  type="color"
                  id="bgColor"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-muted-foreground text-sm font-semibold mb-1">
                Barva popředí
              </p>
              <div className="flex gap-4">
                <Input
                  type="text"
                  value={fgColor}
                  maxLength={7}
                  onChange={(e) => setFgColor(e.target.value)}
                />
                <input
                  className="w-16 h-10"
                  type="color"
                  id="fgColor"
                  maxLength={7}
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-background shadow-md p-8">
          <div className="flex items-center gap-2">
            <DownloadIcon size={18} className="text-muted-foreground" />
            <h1 className="font-semibold text-xl">Export</h1>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-3 select-none"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <SettingsIcon size={18} className="text-muted-foreground" />
                Nastavení
              </AccordionTrigger>
              <AccordionContent className="flex justify-between gap-4">
                <div className="w-full">
                  <p className="text-muted-foreground text-sm font-semibold mb-1">
                    Korekce chyb
                  </p>
                  <Select
                    onValueChange={(value) => {
                      setErrorCorrection(value as string);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="L - 7%" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">L - 7%</SelectItem>
                      <SelectItem value="M">M - 15%</SelectItem>
                      <SelectItem value="Q">Q - 25%</SelectItem>
                      <SelectItem value="H">H - 30%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <p className="text-muted-foreground text-sm font-semibold mb-1">
                    Velikost QR kódu
                  </p>
                  <Select
                    onValueChange={(value) => {
                      setSize(Number(value));
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="400px" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200">200px</SelectItem>
                      <SelectItem value="400">400px</SelectItem>
                      <SelectItem value="600">600px</SelectItem>
                      <SelectItem value="800">800px</SelectItem>
                      <SelectItem value="1000">1000px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex gap-2 mt-3 select-none *:cursor-pointer">
            <Badge
              onClick={saveToClipboard}
              variant="default"
              className="text-base"
            >
              Kopírovat
              <ClipboardIcon size={14} className="ml-2" />
            </Badge>
            <Badge
              variant="default"
              onClick={saveToPNG}
              className="text-base bg-blue-500 hover:bg-blue-400"
            >
              PNG
              <DownloadIcon size={14} className="ml-2" />
            </Badge>
            <Badge
              variant="default"
              onClick={saveToPDF}
              className="text-base bg-red-500 hover:bg-red-400"
            >
              PDF
              <PrinterIcon size={14} className="ml-2" />
            </Badge>
            <Badge
              onClick={saveToWEBP}
              variant="default"
              className="text-base bg-green-500 hover:bg-green-400"
            >
              WEBP
              <DownloadIcon size={14} className="ml-2" />
            </Badge>
          </div>
        </div>
      </div>
      <div className="gap-6 py-4 lg:py-8 flex-col w-full lg:w-[400px]">
        <div
          ref={canvasRef}
          className="rounded-2xl flex items-center justify-center bg-background shadow-md p-4"
        >
          <QRCodeCanvas
            size={350}
            bgColor={bgColor}
            fgColor={fgColor}
            value={URL}
            level={errorCorrection}
          />
        </div>
      </div>
    </div>
  );
}
