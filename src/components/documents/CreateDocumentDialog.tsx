import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const CreateDocumentDialog = () => {
  const [open, setOpen] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");

  const handleCreate = () => {
    if (!documentName || !documentType) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success(`Created ${documentType}: ${documentName}`);
    setOpen(false);
    setDocumentName("");
    setDocumentType("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="bg-[#9D4EDD] hover:bg-[#8B3DC9] text-white rounded-full px-6 h-12 font-medium shadow-lg shadow-[#9D4EDD]/20"
        >
          <Plus className="mr-2 h-5 w-5" />
          Create New Document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[28px] bg-surface-container border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground">Create New Document</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose a document type and give it a name to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="document-type" className="text-foreground">
              Document Type
            </Label>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger id="document-type" className="rounded-xl bg-surface-container-low border-border">
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl bg-surface-container border-border">
                <SelectItem value="resume">Resume</SelectItem>
                <SelectItem value="cover-letter">Cover Letter</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="cv">CV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="document-name" className="text-foreground">
              Document Name
            </Label>
            <Input
              id="document-name"
              placeholder="e.g., Senior Developer Resume"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="rounded-xl bg-surface-container-low border-border"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleCreate} 
            className="flex-1 rounded-full bg-[#9D4EDD] hover:bg-[#8B3DC9] text-white"
          >
            Create Document
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
