import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/51717305?s=460&u=4d6b974e71ea5621da8e06a7ae49660a9b5fee4e&v=4"
        alt="Vitor Hugo"
      />
      <div>
        <strong>Vitor Hugo</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
