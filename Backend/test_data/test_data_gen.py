"""
python test_data_gen.py --sensor-id <id> --date <YYYYMMDD>

output should be a text file.
"""

import sys
import argparse
import random
import datetime


class GenData(object):

	def __init__(self, sensor_id, input_date):
		self._sensor_id = sensor_id
		self._date = input_date

	def run(self):
		data_list = self.gen_random_data()
		self.write_output(data_list)

	def gen_random_data(self):
		""" return -- list of time series data
		Generate random data indicating a person walked by
		Data includes: timestamp, direction, and indicator value 1
		Example data:
		<measurement>[,<tag-key>=<tag-value>...] <field-key>=<field-value>[,<field2-key>=<field2-value>...] [unix-nano-timestamp]
		hourly_counter,sensor=1,direction=l counter=1 1434067467000000000
		"""
		output_data = []
		current_time = self._date
		direction = ['l', 'r']

		for i in range(1000):
			delta = random.randint(1, 86)
			current_time = current_time + datetime.timedelta(seconds=delta)
			entry_direction = random.choice(direction)
			entry_text = "hourly_counter,sensor=%s,direction=%s counter=1 %s" % (
				self._sensor_id,
				entry_direction,
				int((current_time - datetime.datetime(1970,1,1)).total_seconds())*1000000000)
			output_data.append(entry_text)

		return output_data

	def write_output(self, data_to_write):
		""" return None
		Write data to an output file.
		Arguments:
		data_to_write -- list, the data to write to output file
		output_file -- file object, the file to write to
		"""
		output_file_name = "./%s_%s.txt" % (self._sensor_id, self._date.strftime('%Y%m%d'))
		with open(output_file_name, 'w') as output_file:
			for line in data_to_write:
				output_file.write("%s\n" % line)

def main():
	parser = argparse.ArgumentParser(description = "Process inputs for random data generation.")
	parser.add_argument('sensor_id', help='ID for sensor')
	parser.add_argument('data_date', help='Format: YYYYMMDD.')
	args = parser.parse_args()

	sensor_id = args.sensor_id
	input_date = args.data_date
	date_object = datetime.datetime.strptime(input_date, '%Y%m%d')

	data_generator = GenData(sensor_id, date_object)
	data_generator.run()

if __name__ == '__main__':
	sys.exit(main())