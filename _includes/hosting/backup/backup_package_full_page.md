{% include hosting/backup/backup_intro.md %}
{% if distribution == "docker" %}
{% include hosting/backup/backup_docker.md %}
{% else %}
{% include hosting/backup/backup_package.md %}
{% endif %}
{% include hosting/backup/backup_files_list.md %}
{% include hosting/backup/backup_collaborators_keys.md %}