import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-4 font-poppins">
          <p className="text-timberWolf font-medium">Feel free to reach out via any of the links below:</p>

          <a
            href="mailto:seimoroiyoto@gmail.com"
            className="text-timberWolf font-medium underline"
          >
            Email: seimoroiyoto@gmail.com
          </a>

          <a
            href="https://github.com/AceCodeLabs"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Github: github.com/AceCodeLabs
          </a>

          <a
            href="https://ace777-x.bsky.social"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Bluesky: ace777-x.bsky.social
          </a>

          <a
            href="https://ace777-x.medium.com"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Medium: ace777-x.medium.com
          </a>

          <a
            href="https://mastodon.social/@ace777_x"
            target="_blank"
            rel="noreferrer"
            className="text-timberWolf font-medium underline"
          >
            Mastodon: mastodon.social/@ace777_x
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
