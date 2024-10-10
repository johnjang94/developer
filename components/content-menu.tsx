interface ContentMenuProps {
  onAboutClick: () => void;
  onProjectsClick: () => void;
}

export default function ContentMenu({
  onAboutClick,
  onProjectsClick,
}: ContentMenuProps) {
  return (
    <div className="flex flex-col space-y-5 items-start md:mx-10">
      <button className="mt-10" onClick={onAboutClick}>
        About
      </button>
      <button onClick={onProjectsClick}>Projects</button>
      <a href="mailto:jscolbe9675@gmail.com">Contact</a>
    </div>
  );
}
