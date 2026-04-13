import { useState, createContext, useContext, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const appleEase = [0.25, 0.46, 0.45, 0.94] as const;
export const appleFastEase = [0.4, 0, 0.2, 1] as const;

interface HoverGroupContextType {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  groupId: string;
}

const HoverGroupContext = createContext<HoverGroupContextType>({
  hoveredId: null,
  setHoveredId: () => {},
  groupId: "default",
});

export const HoverGroup = ({
  children,
  groupId,
  className = "",
}: {
  children: ReactNode;
  groupId: string;
  className?: string;
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <HoverGroupContext.Provider value={{ hoveredId, setHoveredId, groupId }}>
      <div className={className} onMouseLeave={() => setHoveredId(null)}>
        {children}
      </div>
    </HoverGroupContext.Provider>
  );
};

export const HoverItem = ({
  children,
  itemId,
  className = "",
  isActive = false,
  onClick,
  as: Tag = "button",
  href,
}: {
  children: ReactNode;
  itemId: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
}) => {
  const { hoveredId, setHoveredId, groupId } = useContext(HoverGroupContext);
  const isHovered = hoveredId === itemId;

  const Comp = Tag as any;
  const linkProps = Tag === "a" ? { href } : {};

  return (
    <Comp
      className={`relative z-0 ${className}`}
      onMouseEnter={() => setHoveredId(itemId)}
      onClick={onClick}
      {...linkProps}
    >
      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.span
            layoutId={`hover-bg-${groupId}`}
            className="absolute inset-0 z-[-1] rounded-full"
            style={{
              background: "hsl(var(--foreground) / 0.06)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </AnimatePresence>
      {isActive && (
        <motion.span
          layoutId={`active-bg-${groupId}`}
          className="absolute inset-0 z-[-1] rounded-full"
          style={{
            background: "hsl(var(--primary))",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {children}
    </Comp>
  );
};
