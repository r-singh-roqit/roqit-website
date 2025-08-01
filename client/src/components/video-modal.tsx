import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import demoVideo from "@assets/Roqit Version 1 Indian_1754031016554.mp4";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
          data-testid="button-close-video"
        >
          <X className="h-6 w-6" />
        </Button>
        
        {/* Video container */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <video
            controls
            autoPlay
            className="w-full h-auto"
            data-testid="video-demo"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}