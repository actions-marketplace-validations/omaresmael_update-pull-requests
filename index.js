const core = require("@actions/core");
const github = require("@actions/github");

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

async function run()
{
    const githubToken = core.getInput("GITHUB_TOKEN", { required: true });
    const octokit = new github.getOctokit(githubToken);

    currentPulls.forEach(pull => {
        pullNumber = pull.number
        octokit.rest.pulls.updateBranch({
        owner,
        repo,
        pull_number: pullNumber,
      });
    })

}

run();