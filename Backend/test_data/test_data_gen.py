"""
python test_data_gen.py --sensor-id <id> --date <YYYYMMDD>

output should be a text file.
"""

import sys
import argparse


class GenData(object):
	def __init__(self, sensor_id, input_date):
		pass


	def gen_random_data(self):
		"""
		Generate random data indicating a person walked by
		Data includes: timestamp, direction, and indicator value 1

		"""
		pass

	def write_output(self, data_to_write, output_file):
		"""
		Write data to an output file.
		Arguments:
		data_to_write -- string, the data to write to output file
		output_file -- file object, the file to write to
		"""
		output_file.write(data_to_write)


def main():
	parser = argparse.ArgumentParser(description = "Process inputs for random data generation.")
	parser.add_argument('sensor_id', help='ID for sensor')
	parser.add_argument('data_date', help='Date that data was recorded.')
	args = parser.parse_args()
	sensor_id = args.sensor_id
	input_date = args.data_date


if __name__ == '__main__':
	sys.exit(main())