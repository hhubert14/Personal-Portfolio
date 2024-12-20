---
title: "Git commands"
category: "software engineering"
date: "16-11-2024"
---

# Git Commands Refresher

Source: https://learngitbranching.js.org/?locale=en_US

## Commands

### **Git Commit**

```bash
git commit
```

![Git Commit](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExczVqNjQxcm1jd3Z0ejl2bWVwM2k3a2NtcTNuYjU4OWgxaXdxOGJzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hkOdtbHUPy8clHPyJ2/giphy.gif)

Note: `git commit --amend` allows you to modify the most recent commit.

### **Git Branch and Checkout**

```bash
git branch newImage
```

![Git Branch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjdoZThxbDQzNTIzNW5oeXZ0ZDNrejl2ZnhjZ3YwandpY2x2dHV3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XUGhWmBMC1gmkcgUoC/giphy.gif)

```bash
git checkout newImage; git commit
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGo1dnY4MTFsZ2M5bXc3NTg0MnU5b3o3ZHU2MGRxdXVxc2ttaTFkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fqVWkAlW6qrnegDhkt/giphy.gif)

### **Git Merge**

```bash
git merge bugFix
```

![Git Merge](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGlhMTlidGNldDJiYXB6bjFmMjIzcTQ0djdwMXBzMW9jb2pvd3c0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LtNfbY5rcNsJzmg0Xw/giphy.gif)

```bash
git checkout bugFix; git merge main
```

![Git Merge](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNram5keWF4b3IybXllaHY0ZHRud2N6aThudWFtbHZzcWFkeXVjOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W0cOqOjt4kgLVlAG7Z/giphy.gif)

### **Git Rebase**

```bash
git rebase main
```

![Git Rebase](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGFwaWRmbWo1ZzRoejFzeHl2Nm53andhdXZpaHRxcTZpeThxbjh6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M52l71VNqolUYID0cT/giphy.gif)

```bash
git rebase bugFix
```

![Git Rebase](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVkN3gwYnF1bTlndnB0emNweWpvN2VvZzFoOWE4c2IxMmJubTNmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J8I0qvVyeoMIgiO02I/giphy.gif)

Note: The git rebase -i <branch> command (e.g., git rebase -i HEAD~4) allows you to interactively reorder commits, edit commit messages, squash commits, drop commits, and more.

Note: You can specify two branches after the git rebase command to rebase one branch onto another. The syntax is:

```bash
git rebase <upstream-branch> <working-branch>
```

### **Detach HEAD**

```bash
git checkout C1
```

![Detach HEAD](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJycTV6eHZ3bjIzenI0aml0dDFwcGs5MG85MXJvaG10cmlmY29ldiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GZPGsWCut49tSC2Zn/giphy.gif)

### **Relative Refs (^)**

```bash
git checkout main^
```

![Relative Refs (^)](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXF4NHI2YThsMGlsbzhzN3p2ODVneHNkbHB1OGFyb2ZzbXplenJ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yWNbxnobWOjYsNFNew/giphy.gif)

```bash
git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^
```

![Relative Refs (^)](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNiN2pobjFhZWU0cWlpdW1zczFmbWF6ZjZreXVxcHYzMnQ4amVycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3iqjxfywQoG9e3CUy9/giphy.gif)

### **Relative Refs #2 (~)**

```bash
git checkout HEAD~4
```

![Relative Refs (~)](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGd0dHdreXY3cHN5aGI2M2RwOGxyc2Yzb2hjN3FydjR1ZjM0ZnNpOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/un2k1nDySvOPAyjGYU/giphy.gif)

```bash
git branch -f main HEAD~3
```

![Relative Refs (~)](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FnaTJicHFlbXB6dnVtZmg5YTVhYnBoeWlwY2M1NXcxNHJlaG42MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvoib3aTE4tL6YPxk4/giphy.gif)

### **Reversing Changes in Git**

```bash
git reset HEAD~1
```

![Git Reset](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTk3c2RjOGZlN2lnZnhob2tjOTlldWEwYW1wa2trcnk5ZXFnaThwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N3gee6aVdOl818gsL6/giphy.gif)

```bash
git revert HEAD
```

![Git Revert](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmk0MGVkZmVya2Y5Y2VlaHlycnJibDFvMTAwOXFwazdtc3ZrYWxpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t06STvl0EZ8WQjIWek/giphy.gif)

### **Git Cherry-pick**

```bash
git cherry-pick C2 C4
```

![Git Cherry-pick](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBzNXo4NDdlODF5b3Z1M3R0M3diOW4yazM0aDhrNmRzMmV6bTFzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fz1sWV3FBcA0gavXr1/giphy.gif)

### **Git Tags**

```bash
git tag v1 C1
```

![Git Tags](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDl6OGVpczJrZHhrYTZnZ2Rwdmw2NjJiZmFpOW85czIzaW01aWtnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h2cgSKhPOuzXfn2WWr/giphy.gif)

Note: If you leave the commit off, git will just use whatever HEAD is at.

### **Git Describe**

![Commit Tree](/commit-tree.png)

```bash
git describe main
```

v1_2_gC2

```bash
git describe side
```

v2_1_gC4

Note: The output from `git describe branch` is in the form `<closest tag>_<number of commits since tag>_g<abbreviated commit hash>`

### **Git Checkout With Multiple Parents**

The number after ^ specifies which parant after a merge commit. So checkout branch^ refers to first parent, checkout branch^2 refers to second parent, etc.

```bash
git checkout main^
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHV2d25scmh3YWQzNnE4dm14eWtzYWtnMGttMXU3YjdxdTdtd2ttNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8w7ZRvXJrpvSIj5gAu/giphy.gif)

```bash
git checkout main^2
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGphOGVvajluY3UzdDFkMmhxcGw1Yng3a3ppc2pxMmx4M3NmNDZ1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gIotpF9uzdLBIXgbL7/giphy.gif)

```bash
git checkout HEAD~; git checkout HEAD^2; git checkout HEAD~2
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdqeHV5Zmg3eG50c21sbWNyb2NoYTNyamZoeGJmaGYydndpY3V2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MKIqnU11caicXPJpqA/giphy.gif)

```bash
git checkout HEAD~^2~2
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWF3eTZ1NThvZm8zMHVuMWN1ODhsdjRvN3duaHU2ZjZlaXdud2pnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/76hnxa0b37KGZRArWn/giphy.gif)

### **Git Clone**

```bash
git clone
```

![Git Clone](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FvbGdzeW53aWpzdml0dzdqazhtM3V2bzdkdXFvNGxvbWFhdnVybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JTy1hrfdwSiiCkz0e9/giphy.gif)

### **Remote Branches**

Remote branches have the special property that when you check them out, you are put into detached HEAD mode. Git does this on purpose because you can't work on these branches directly; you have to work elsewhere and then share your work with the remote (after which your remote branches will be updated).

```bash
git checkout o/main; git commit
```

![Git Checkout](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTU2OGpsMWd6bHIybXlzOHFmYnZqdHRsMXJ2OWk0ZjVybTA5bmJsaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YyYIB5CZZ3FQMMkO8x/giphy.gif)

### **Git Fetch**

```bash
git fetch
```

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmF2eGxvbWNxOHo3a2QxMjloazdyM3VmbTl0ZWx3NWdxcXFubGozYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7R6gwKP4Q30Tt9Wv0w/giphy.gif)

### **Git Pull**

```bash
git pull
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDJ0MGQ5MmcxYXdhcWQ2bmZvOWxibWZxZTIxNHN2NmkydHBpM3B0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9HyrXXBfqO0JGTaykT/giphy.gif)

Note: This is the same as git fetch; git merge o/main.

### **Git Push**

```bash
git push
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW5vcTFsMWU2dTFnZmU4MmVqNmVqNGNkb2dqc2pjcWhoaWYweDZybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0PkyP7WTqAczDWwVar/giphy.gif)

### **Diverged Work**

These are some ways to base your work off of the most recent version of the remote branch:

```bash
git fetch; git rebase o/main; git push
```

or

```bash
git pull --rebase; git push
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpld3BkZWN1eHVpYmF1NG41d290ajM4ejQzOXQ2eG5jemc3YjZpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1zUbPGVIX8DEeSfSA/giphy.gif)

```bash
git fetch; git merge o/main; git push
```

or

```bash
git pull; git push
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG02ZHQwZno5Z2x0bHNqb293c3hvcmFhbGh6NzA5NmRib3RnbWpnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EozbvSLB1ZGG5i0u12/giphy.gif)

### **Remote Tracking**

During a clone, git creates a remote branch for every branch on the remote (aka branches like o/main).

You can create a new branch that tracks a specific remote branch using the following command:

```bash
git checkout -b <branch> <remote>/<remote-branch>
```

```bash
git checkout -b foo o/main; git pull
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlxZmUzeWg0dTY4MGVoMnc5aTdlNmo4Y2Jqd283NHlvbDlmMXNmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nF0sSfWaAHLxnYKEHS/giphy.gif)

```bash
git checkout -b foo o/main; git commit; git push
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhkMzI5YWhid2x4ZmtxZTM3MHp5YWkzNml0dzdiYXg3aXppMm92bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V3PscPqpzxoSoO6ZnJ/giphy.gif)

Another way to set remote tracking on a branch is to simply use the git branch -u option. Running

```bash
git branch -u o/main foo
```

will set the foo branch to track o/main. If foo is currently checked out you can even leave it off:

```bash
git branch -u o/main
```

```bash
git branch -u o/main foo; git commit; git push
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZvbXQ4NGhvYmhqeHF3dHkwb25hbHgyNnFiYWN4Y3BnemJ2NzNkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fs88FmogiYCBO6QxoI/giphy.gif)

### **Push arguments**

To push a branch that does not exist on the remote without checking out the branch, you can use the following command:

```bash
git push origin <branch>
```

```bash
git checkout C0; git push origin main
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTMxdjdvdGhyeHR1ZHV2a2FtdG02eGZwNHJzYTNmM2xhZDkybmVmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CdSOn4mqQbP3TBYCLh/giphy.gif)

This command allows you to push commits from a local branch (`<source>`) to a different branch (`<destination>`) on the remote repository (origin):

```bash
git push origin <source>:<destination>
```

```bash
git push origin foo^:main
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmo0dHlwOHM4Y2llNmYwdHRpZmRpOWtsZGRzMXQweHE4N3BwYWplYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BzYeueETS5LxSqiByf/giphy.gif)

It can also create a branch on the remote if it doesn't exist:

```bash
git push origin main:newBranch
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVsemtjMDNhdXB4anFxN2xmNTZvb3Y2dXc0M3o0dnF3eDhuMGtuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Li8W9MGc6ROlUZ7n9u/giphy.gif)

### **Fetch arguments**

To fetch a branch that on the remote without checking out the branch, you can use the following command:

```bash
git fetch origin <branch>
```

```bash
git fetch origin foo
```

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlsd3dkcGs3c3dhdmVtNWRlZGQ4eDRteXIwZGVlOTZtaWQ2YmtteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aFKCraRutn3NvGCJLP/giphy.gif)

This command allows you to fetch commits from a remote branch (`<source>`) to a local branch (`<destination>`):

```bash
git fetch origin <source>:<destination>
```

```bash
git fetch origin C2:bar
```

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1pam9vcWw2dGJ0dGM3ZmZvYWx0cHdrNmdjYm13emg1b3N6aHVycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gvb9AYK4aMSQPA7pTH/giphy.gif)

It can also create a branch on locally if it doesn't exist:

```bash
git fetch origin C2:bar
```

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXMyNzUycTNmNDk1cjIxbDlzOGZpemQweGoyY2F3aGlrZHphZTZjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LYVF6aoCEoCHuK85j0/giphy.gif)

No arguments mean it downloads all the commits from the remote onto all the remote branches:

```bash
git fetch
```

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZvc21oOGV6cXRwN2FxaHc5dzZ0ZzU0aWgxbTYxazYxaTluYXg4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ODfqwviFZL9flmFvmI/giphy.gif)

### **Oddities of Source**

If you leave out `<source>` for `git push origin <source>:<destination>`, you can delete a branch on the remote:

```bash
git push origin :foo
```

![Git push](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDB5cGxpMTdzZGcxOXMxdmhvaXZ1MDF4dHhucGx5cXo2bG14b25peCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wb8BrpP7vd2Df4TaU0/giphy.gif)

If you leave out `<source>` for `git fetch origin <source>:<destination>`, you can create a new branch locally:

![Git fetch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnhsaWMyMWJ4bWYydjJ3MDR2dDM4am1iMzczdjZyNDU1dWZ1MWhzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6EVu9aIZaMFNdVCB1u/giphy.gif)

### **Pull Arguments**

git pull origin foo is equal to git fetch origin foo; git merge o/foo

git pull origin bar:bugFix is equal to git fetch origin bar:bugFix; git merge bugFix

```bash
git pull origin main
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZxdzEyY3Nqdmw5bjVtaTBhcXVnd2JpeDBzNXFpaDk3dHNxM3FrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G0VC61jeZKnVrMeLYZ/giphy.gif)

```bash
git pull origin main:foo
```

![Git pull](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNsd3MycTMxbWg2Mjh1YW84MzhwcDRyNTQzbm1mNWNxNzJvcGI3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tDR4S4XaKb4hHyc456/giphy.gif)
