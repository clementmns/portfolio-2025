"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

/**
 * useDialogRoute enables deep-linkable dialogs via a ?dialog=<id> query parameter.
 * Provide a unique id per dialog component (e.g. "skills", "hiring", "settings").
 */
export function useDialogRoute(id: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("dialog");
  const isOpen = active === id;
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const buildUrl = useCallback(
    (nextOpen: boolean) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (nextOpen) {
        params.set("dialog", id);
      } else {
        params.delete("dialog");
      }
      const qs = params.toString();
      return qs ? `${pathname}?${qs}` : pathname;
    },
    [id, pathname, searchParams]
  );

  const onOpenChange = useCallback(
    (next: boolean) => {
      setOpen(next);
      router.replace(buildUrl(next), { scroll: false });
    },
    [buildUrl, router]
  );

  return { open, onOpenChange, isRouteMatch: isOpen };
}
