#!/bin/bash

count=100
echo "{\"data\":["
for i in $(seq 1 ${count-1})
do echo "{\"id\":"$i,\"question\":\"Sample question $i\",\"options\":[{\"label\":\"A\",\"option\":\"option a\"},{\"label\":\"B\", \"option\":\"option B\"}]},
done 

echo "{\"id\":"$count,\"question\":\"Sample question $count\",\"options\":[{\"label\":\"A\",\"option\":\"option a\"},{\"label\":\"B\", \"option\":\"option B\"}]}
echo "]}"
