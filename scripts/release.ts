import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'node:fs';

/**
 * Read data
 *
 * @param path Path to file
 */
function read(path: string): { version: string } {
  return JSON.parse(readFileSync(path).toString());
}

/**
 * Return a new version for workspace
 */
function getVersion(): string {
  const config = read('package.json');

  const [, , lastDay, lastRelease] = config.version.split('.');
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const version = day !== lastDay ? 0 : +lastRelease + 1;

  return `${year}.${month}.${day}.${version}`;
}

/**
 * Write version on package.json
 *
 * @param path Path to package.json
 * @param version New version
 */
function write(path: string, version: string): void {
  const config = read(path);
  config.version = version;
  writeFileSync(path, JSON.stringify(config, null, 2) + '\n');
}

/**
 * Update versions
 */
function updateVersion(version: string): void {
  write('package.json', version);
}

function createGitRelease(version: string): void {
  const branch = `release/v${version}`;

  execSync(`git checkout -b ${branch}`);
  execSync('git add package.json');
  execSync(`git commit -m "version up v${version}"`);
  execSync('git checkout develop');
  execSync(`git merge ${branch} --no-ff`);
  execSync(`git branch --delete ${branch}`);
  execSync(`git checkout main`);
  execSync(`git rebase develop`);
  execSync(`git push -u origin main develop`);
  execSync(`git checkout develop`);
}

function release(): void {
  try {
    const brunch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }).trim();

    if (brunch !== 'develop') {
      console.error(`Creating a new release is only available for the develop branch.\n Current brunch: ${brunch}\n`);
      return;
    }

    const lastCommitMessage = execSync('git log --format=%B -n 1 $(git log -1 --pretty=format:"%h") | cat -', {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024,
    }).trim();

    if (/Merge branch 'release\/v.+?' into develop/gm.test(lastCommitMessage)) {
      console.error(`No new changes detected. If you need to make a release, then use gitlab.\n`);
      return;
    }

    console.log('Starting a new release.');

    const version = getVersion();
    updateVersion(version);
    console.log('New version was updated on packages.');

    createGitRelease(version);
    console.log('Release was merged on main branch.');

    console.log('New version creation completed successfully.');
  } catch (e) {
    console.error('Creation a new release did not complete successfully' + '\n' + e);
  }
}

release();
