SELECT * FROM my_table WHERE created_at >= '{{ data_interval_start.strftime("%Y-%m-%d %H:%M%:%S") }}'
