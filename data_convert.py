import json
import yaml
from datetime import datetime

# Script to convert yml data files to json format while updating date format
def parse_mixed_date(date_str):
    # Define acceptable formats in order of priority
    formats = ["%b %Y", "%b. %Y", "%B %Y", "%Y-%m", "%m/%Y", "%Y.%m"]

    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue

    raise ValueError(f"No matching format found for date: {date_str}")


filename = "Araneae"

with open(filename+'.yml') as f:
  data = yaml.safe_load(f)

# 1. Define your input text and its exact match format
# Use %B for full month name (e.g., "October"), %b for short name (e.g., "Oct")
date_string = "Oct 2026"
input_format = "%b %Y"

for entry in data:
  for img in entry["images"]:
    date_string = img["date"]
    date_obj = parse_mixed_date(date_string)

    # optional: add -%d to include day defaulted to 01
    formatted_date = date_obj.strftime("%Y-%m")
    img["date"] = formatted_date

json_string = json.dumps(data, indent=2)
print(json_string)

with open(filename+'.json', "w") as f:
   f.write(json_string)