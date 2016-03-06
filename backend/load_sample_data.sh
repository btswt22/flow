for line in $(cat 1_20160303.txt); do
  curl -i -XPOST 'http://localhost:8086/write?db=hourly_counter_db' --data-binary "$line";
done

for line in $(head 1_20160304.txt); do
  echo "$line"
done