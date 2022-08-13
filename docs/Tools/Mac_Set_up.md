# Set up

## Mac Shortcuts

set **Tile Window to Right(Left) of Screen** in preference -> keyboard -> app

with ctrl + cmd + right arrow. 

## Terminal

- ### Open Sublime with subs

1. Check if this works

```bash
()/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
```
2. Add new folder "bin" in usr/local/ if it was not yet exist.
3. echo $PATH

```bash
sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subls
```



## Sublime

- build

  command + B

### install package

<-> remove package

cmd + shift + p and type "Package Control: Install Package"

find the package you want 

#### theme : gruvbox

personel setting:

```
{
  "theme": "gruvbox.sublime-theme",
  "color_scheme": "Packages/gruvbox/gruvbox (Dark) (Soft).sublime-color-scheme",
  "font_size": 20,
  "bold_folder_labels": true,
  "highlight_line": true,
  "highlight_modified_tabs": true,
  "material_theme_accent_graphite": true,
  "material_theme_compact_sidebar": true,
  "sidebar_default": true,
  "scroll_past_end": true,
  "scroll_speed": 5.0,  
}
```

#### BracketHighlighter

#### SidebarEnhancement

#### Anaconda

preference -> settings -> package settings -> user 

**last line you need to find where your python is located**

```bash
which python3
```



```
{
    "auto_formatting": true,
    "autoformat_ignore":
    [
    ],
    "pep8_ignore":
    [
        "E501"
    ],
    "anaconda_linter_underlines": false,
    "anaconda_linter_mark_style": "none",
    "display_signatures": false,
    "disable_anaconda_completion": true,
    "python_interpreter": "/usr/bin/python3"
}
```

#### build with different python version

Tools -> build system -> add new one and name it with extension ".sulime.build"

```
//python 2
{
    "cmd": ["/usr/bin/python2.7", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "quiet": true
}

//python3
{
    "cmd": ["/usr/bin/python3", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "quiet": true
}
```

## VScode

### Extension

- python
- color theme e.g. predawn, gruvbox
- icon theme
- blackformatter

### Settings

```
{
    "window.zoomLevel": 1,
    "workbench.colorTheme": "Predawn",
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontSize": 20,
    "workbench.settings.editor": "json",
    "workbench.settings.openDefaultSettings":true,
    "workbench.settings.useSplitJSON": true
}
```

### shortcut

## pip3

commands

- pip3 list -o 

  show package, Version , Latest, Type

- pip3 install -U

  u for upgrade

- pip3 freeze > requirements.txt

  output all of packages and version number

- pip3 install -r requirements.txt

## Virtualenv

### Install

```bash
pip3 install virtualenv
```

 如果出現warning,

```
WARNING: The script virtualenv is installed in '/Users/yehs1225/Library/Python/3.8/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
```

解決辦法如下

```bash
echo 'export PATH=/Users/yehs1225/Library/Python/3.8/bin:$PATH' >>~/.bashrc
source ~/.bashrc
pip3 uninstall virtualenv
pip3 install virtualenv
```

### Operate

### build an virtual environment

```bash
mkdir Environments
virtualenv project1_env
```

enter the environment

```bash
source project1_env/bin/activate
```

install some packages and output

```bash
pip freeze --local > requirements.txt
cat requirements.txt
```

leave the virtual environment

```bash
deactivate
```

remove the virtual environment

```bash
rm -rf project1_env
```

### build an virtual environment in specific version(2.7)

```bash
virtualenv -p /usr/bin/python2.7 py27_env
```


enter the environment

```
source py27_env/bin/activate
```

install the requirments

```bash
pip install -r requirements.txt
```

## Venv

python內建的虛擬環境操作工具，不用安裝。使用方式和virtualenv 一樣。

```bash
python3 -m venv test_env 
source test_env/bin/activate
deactivate
```

建造根global有相同packages的環境

```bash
python3 -m venv venv --system-site-packages
```

