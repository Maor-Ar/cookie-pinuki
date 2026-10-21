import { INSTAGRAM_DM_URL } from "@/config/site";
import { InstagramIcon } from "@/components/icons";

type OrderLinkProps = {
  children: React.ReactNode;
  className?: string;
  iconSize?: number;
};

export function OrderLink({
  children,
  className = "",
  iconSize = 18,
}: OrderLinkProps) {
  return (
    <a
      href={INSTAGRAM_DM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-teal inline-flex items-center justify-center gap-2 ${className}`}
    >
      <InstagramIcon size={iconSize} />
      {children}
    </a>
  );
}
