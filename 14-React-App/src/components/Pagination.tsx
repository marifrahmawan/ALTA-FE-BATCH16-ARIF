import { generatePagesToDisplay } from "@/utils/formatter";
import { Meta } from "@/utils/types/types";
import { useMemo } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type IProps = {
  meta?: Meta;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (page: string | number) => void;
};

const Pagination = (props: IProps) => {
  const { meta, onClickNext, onClickPrev, onClickPage } = props;

  const pagesToDisplay = useMemo(
    () => generatePagesToDisplay(meta?.currentPage, meta?.totalPages),
    [meta],
  );
  return (
    <div className="flex items-center justify-center gap-3 mt-9">
      <Button
        variant="outline"
        size="icon"
        disabled={meta?.currentPage === 1}
        onClick={onClickPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {meta &&
        pagesToDisplay.map((page, index) => {
          return (
            <Button
              variant="outline"
              size="icon"
              key={`${page}-${index}`}
              disabled={meta?.currentPage === page}
              onClick={() => onClickPage(page)}
            >
              {page}
            </Button>
          );
        })}

      <Button
        variant="outline"
        size="icon"
        disabled={meta?.currentPage === meta?.totalPages}
        onClick={onClickNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
