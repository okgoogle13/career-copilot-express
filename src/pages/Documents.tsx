import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DocumentCard } from "@/components/dashboard/DocumentCard";
import { CreateDocumentDialog } from "@/components/documents/CreateDocumentDialog";
import { DocumentFilters } from "@/components/documents/DocumentFilters";

const mockDocuments = [
  { id: 1, title: "Senior Developer Resume", lastUpdated: "2 days ago", type: "resume" },
  { id: 2, title: "Cover Letter - Google", lastUpdated: "5 days ago", type: "cover-letter" },
  { id: 3, title: "Community Support Worker Resume", lastUpdated: "1 week ago", type: "resume" },
  { id: 4, title: "Portfolio 2024", lastUpdated: "2 weeks ago", type: "portfolio" },
  { id: 5, title: "Academic CV", lastUpdated: "1 month ago", type: "cv" },
  { id: 6, title: "Cover Letter - Microsoft", lastUpdated: "1 month ago", type: "cover-letter" },
];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [documentType, setDocumentType] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Filter and sort documents
  const filteredDocuments = mockDocuments
    .filter((doc) => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = documentType === "all" || doc.type === documentType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header - Control Bar */}
        <div className="flex flex-col gap-6">
          {/* Title Row */}
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-heading font-semibold text-white">
              Documents
            </h1>
            <CreateDocumentDialog />
          </div>

          {/* Filters Row */}
          <DocumentFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            documentType={documentType}
            onTypeChange={setDocumentType}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Documents Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-heading font-medium text-muted-foreground">
              Your Documents
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredDocuments.length} {filteredDocuments.length === 1 ? "document" : "documents"}
            </p>
          </div>
          
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  title={doc.title}
                  lastUpdated={doc.lastUpdated}
                  type={doc.type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-surface-container rounded-[28px]">
              <p className="text-muted-foreground">No documents found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Documents;
