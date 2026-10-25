import json
import yaml
from datetime import datetime

# Script to convert yml data files to json format while updating date format


def parse_mixed_date(date_str):
    # Define acceptable formats in order of priority
    # %b matches abreviated month names while %B matches the full name
    formats = ["%b %Y", "%b. %Y", "%B %Y", "%Y-%m", "%m/%Y", "%Y.%m"]

    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue

    raise ValueError(f"No matching format found for date: {date_str}")


filename = "Coleoptera"

with open(filename+'.yml') as f:
  data = yaml.safe_load(f)

for entry in data:
  if not entry["name"]:
     continue
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