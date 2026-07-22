/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(grid): improve responsive item width calc',
  'fix(flatlist): preserve scroll position on resize',
  'refactor(section): simplify SuperGridSectionList',
  'docs(readme): update grid spacing examples',
  'perf(render): memoize item dimension helpers',
  'fix(android): correct column count at odd widths',
  'feat(api): add maxItemsPerRow override option',
  'test(grid): cover spacing and padding combinations',
  'style(list): tidy item container default styles',
  'chore(types): export FlatGrid prop interfaces',
  'fix(ios): avoid layout thrash on orientation change',
  'feat(example): demo dynamic item size grid',
  'docs(api): clarify additionalRowStyle usage',
  'refactor(utils): centralize dimension math',
  'chore(lint): resolve airbnb style warnings',
  'perf(list): reduce re-renders for static data',
  'fix(grid): handle empty data without crash',
  'feat(section): support custom section headers',
  'chore(build): refresh package metadata',
  'docs(changelog): note responsive grid fixes',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
