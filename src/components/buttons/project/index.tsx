"use client";

import { Button } from "@/components/ui/button";
import { useProjectCreation } from "@/hooks/use-project";
import { Loader2, PlusIcon } from "lucide-react";

type Props = {};

const CreateProject = (props: Props) => {
  const { canCreate, createProject, isCreating } = useProjectCreation();
  return (
    <Button
      variant="default"
      onClick={() => createProject()}
      disabled={!canCreate || isCreating}
      className="flex items-center gap-2 cursor-pointer rounded-full"
    >
      {isCreating ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <PlusIcon className="h-4 w-4" />
      )}
      {isCreating ? "Creating..." : "New Project"}
    </Button>
  );
};

export default CreateProject;
