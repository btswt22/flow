for line in $(cat 1_20160306.txt); do
  curl -i -XPOST 'http://localhost:8086/write?db=hourly_counter_db' --data-binary "$line";
done

for line in $(head 1_20160304.txt); do
  echo "$line"
done


curl -i -XPOST 'http://24.14.64.152/write?db=hourly_counter_db' --data-binary '	hourly_counter,sensor=1 counter=1 1457291416000000000';


SELECT (SELECT sum(counter) FROM hourly_counter_db..hourly_counter WHERE time >= '" + query_dt + "' and time <= '" + query_dt + "' + 1d GROUP BY time(30m)