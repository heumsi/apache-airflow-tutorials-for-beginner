# Virtualenv 사용하기

## Graph View

![img.png](./img.png)

## Code

<<< @/../examples/dags/06_taskflow_api/04_virtualenv.py

## Web UI & Logs

![img_1.png](./img_1.png)

### `print_emoji`

![img_2.png](./img_2.png)

```
[2022-01-31, 16:10:01 UTC] {process_utils.py:164} INFO - Output:
[2022-01-31, 16:10:03 UTC] {process_utils.py:168} INFO - created virtual environment CPython3.8.12.final.0-64 in 1296ms
[2022-01-31, 16:10:03 UTC] {process_utils.py:168} INFO -   creator CPython3Posix(dest=/private/var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios, clear=False, no_vcs_ignore=False, global=True)
[2022-01-31, 16:10:03 UTC] {process_utils.py:168} INFO -   seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/Users/hardy/Library/Application Support/virtualenv)
[2022-01-31, 16:10:03 UTC] {process_utils.py:168} INFO -     added seed packages: pip==21.3.1, setuptools==60.2.0, wheel==0.37.1
[2022-01-31, 16:10:03 UTC] {process_utils.py:168} INFO -   activators BashActivator,CShellActivator,FishActivator,NushellActivator,PowerShellActivator,PythonActivator
[2022-01-31, 16:10:03 UTC] {process_utils.py:160} INFO - Executing cmd: /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/bin/pip install emoji==1.6.3
[2022-01-31, 16:10:03 UTC] {process_utils.py:164} INFO - Output:
[2022-01-31, 16:10:06 UTC] {process_utils.py:168} INFO - Collecting emoji==1.6.3
[2022-01-31, 16:10:06 UTC] {process_utils.py:168} INFO -   Using cached emoji-1.6.3-py3-none-any.whl
[2022-01-31, 16:10:11 UTC] {process_utils.py:168} INFO - Installing collected packages: emoji
[2022-01-31, 16:10:11 UTC] {process_utils.py:168} INFO - Successfully installed emoji-1.6.3
[2022-01-31, 16:10:11 UTC] {process_utils.py:168} INFO - WARNING: You are using pip version 21.3.1; however, version 22.0.2 is available.
[2022-01-31, 16:10:11 UTC] {process_utils.py:168} INFO - You should consider upgrading via the '/private/var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/bin/python -m pip install --upgrade pip' command.
[2022-01-31, 16:10:11 UTC] {process_utils.py:160} INFO - Executing cmd: /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/bin/python /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/script.py /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/script.in /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/script.out /var/folders/bq/dbkq4_t56lnff573240fmxcw0000gn/T/venv8zur8ios/string_args.txt
[2022-01-31, 16:10:11 UTC] {process_utils.py:164} INFO - Output:
[2022-01-31, 16:10:14 UTC] {process_utils.py:168} INFO - Python is 👍
```

## Keywords

- Taskflow API
- Virtualenv
