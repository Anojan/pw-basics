# Branching Strategy for Playwright E2E Project

This document outlines the branching strategy for the Playwright E2E project to ensure a smooth workflow for development, testing, and deployment.

## Branch Types

1. **Main Branch**
   - The `main` branch is the primary branch where the source code of HEAD always reflects a production-ready state.

2. **Development Branch**
   - The `develop` branch serves as an integration branch for features. It contains the latest delivered development changes for the next release.

3. **Feature Branches**
   - Feature branches are used to develop new features. They should be created from the `develop` branch and named using the format:
     ```
     feature/<feature-name>
     ```
   - Once the feature is complete, it should be merged back into the `develop` branch.

4. **Bugfix Branches**
   - Bugfix branches are used to address bugs in the codebase. They should be created from the `develop` branch and named using the format:
     ```
     bugfix/<bug-description>
     ```
   - After fixing the bug, merge the branch back into `develop`.

5. **Release Branches**
   - Release branches are created from the `develop` branch when preparing for a new production release. They should be named:
     ```
     release/<version-number>
     ```
   - This branch allows for last-minute fixes and preparation for deployment. Once ready, it should be merged into both `main` and `develop`.

6. **Hotfix Branches**
   - Hotfix branches are used to quickly address issues in the production code. They should be created from the `main` branch and named:
     ```
     hotfix/<issue-description>
     ```
   - After the hotfix is applied, merge the branch back into both `main` and `develop`.

## Workflow

1. **Creating a Branch**
   - Always create a new branch from the appropriate base branch (`develop` for features and bugfixes, `main` for hotfixes).

2. **Merging Branches**
   - Use pull requests to merge branches. Ensure that all tests pass and code reviews are conducted before merging.

3. **Deleting Branches**
   - After a branch has been merged, delete it to keep the repository clean.

## Conclusion

Following this branching strategy will help maintain a clean and organized codebase, facilitate collaboration among team members, and streamline the development process.