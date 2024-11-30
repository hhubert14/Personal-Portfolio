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

Note: `git rebase -i <branch>` (e.g., git rebase -i HEAD~4) allows you to reorder commits, add/drop commits, etc.

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
