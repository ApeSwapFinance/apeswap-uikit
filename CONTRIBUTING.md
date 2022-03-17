# 🐵 Contributing to the ApeSwap DAO

Hello fellow ape! 🍌 Thanks so much for taking the time our to consider contributing to the ever-growing ApeSwap DAO.   
  
While all contributions are appreciated & welcome, we favor & prioritize tasks/grants on our [issues backlog](https://github.com/ApeSwapFinance/apeswap-uikit/issues). There are a range of opportunities for individuals and teams across all skill levels -- most with financial incentives attached to them!  

Additionally, if you have suggestions on contribution ideas, but don't see a grant for them, please don't hesistate to reach out to [Obie Dobo](https://t.me/obiedobo) with your ideas.  
  
## Contribution Details

If you choose to take on a contribution (even more importantly a grant task or project), there are a few crucial considerations & rules to be aware of:  
  
- We review in first come first serve basis, so long as the PRs are high quality, meet requirements, and are relevant.
- Please tag `obiedobo` in the reviewers of your PR.
- Ensure your code is working locally before submitting a PR.
- No debugging console logs, but error messages which do not loop may be helpful for debugging production code.
- PRs with excessive changes to files like the `package-lock.json` will be automatically reverted. Please review before you submit.
- Branch off of & submit your pull requests into the latest `staging` branch.
- Use components in the [official ApeSwap UI Kit](https://github.com/ApeSwapFinance/apeswap-uikit) for contributions.

## Getting Up & Running

Getting up and running with the `apeswap-frontend` repo is a super simple, 2 step process:

1. Clone the repo
2. Install dependencies

To do this, open a terminal and run the following commands:

```
git clone git@github.com:ApeSwapFinance/apeswap-uikit.git
cd apeswap-uikit
yarn
```

Once everything is downloaded & installed, simply run `yarn build` to build the ui-kit.  
Once everything is built, run `yarn storybook` to see all of the components in the ui-kit.  

and don't forget to setup your IDE with `eslint` and `prettier`!

## Project structure

- **components** contains generic components used inside the application.
- **hooks** contains generic hooks.
- **theme** contains different theme files
- **util** contains utility tools for styling
- **widgets** contains generic widgets

## Tests

Run tests with `yarn test`.
