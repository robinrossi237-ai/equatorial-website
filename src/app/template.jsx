/**
 * Transition entre les pages : un rideau bleu nuit à bord jaune balaie l'écran
 * à chaque changement de page (le composant est recréé à chaque navigation).
 */
export default function Template({ children }) {
  return (
    <>
      <div className="page-curtain" aria-hidden="true" />
      <div className="page-enter">{children}</div>
    </>
  );
}
