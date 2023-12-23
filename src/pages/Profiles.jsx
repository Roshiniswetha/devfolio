import { SOCIAL_LINKS } from "../constants";
// import { Icon } from "@/components/Icons";
// import styles from "./Profiles.module.scss";

const Profiles = () => {
  return (
    <div className="flex justify-around items-center mt-8">
    {SOCIAL_LINKS.map(({ name, url }) => (
        <div>
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
            <img
                key={name}
                src={`/icons/${name}.svg`}
                alt={name}
                width={50}
                height={50}
            />
          </a>
          </div>
        ))}
    </div>
  );
};

export default Profiles;
