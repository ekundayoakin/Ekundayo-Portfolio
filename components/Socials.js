// links
import Link from "next/link";

// icons
import { RiTwitterLine, RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/ekundayoakin"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://twitter.com/Fieryland"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={"https://linkedin.com/in/ekundayo-akinremi-763501192"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
