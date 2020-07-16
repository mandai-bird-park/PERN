#!/usr/bin/python
import psycopg2
import time
import serial                                                              #Serial imported for Serial communication

#   https://pythonforundergradengineers.com/python-arduino-LED.html#upload-the-arduino-example-sketch-physicalpixelino-onto-the-arduino

def fetch_data():
    sql = """Select * From trap"""

    data_out = ""

    conn = None
    try:
        # read database configuration
        # connect to the PostgreSQL database
        # refer to database.ini
        conn = psycopg2.connect(host="localhost",database="mandai_bird_park", user="postgres", password="!Control1")
        # create a new cursor
        cur = conn.cursor()
        # execute the statement
        cur.execute(sql)
        # cur.execute(sql2, rfid)
        # get the generated id back
        row = cur.fetchone()

        return row[2]
        # while row is not None:
        #     for i in row:
        #         data_out += str(i) + "          " 
        #         # print(i)
        #         # print("|")
        #     data_out += "\n"
        #     row = cur.fetchone()
        # commit the changes to the database
        conn.commit()
        # close communication with the database
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        return False # If unsuccessful transaction
    finally:
        if conn is not None:
            conn.close()

    return data_out

def trap():
    ser = serial.Serial('COM12', 9600)
    while(1):
        user_input = fetch_data()
        time.sleep(2) # wait for the serial connection to initialize
        if user_input =="on":
            print("State is on...")
            time.sleep(0.1) 
            ser.write(b'H')
        elif user_input == "swing":
            print("State is S...")
            time.sleep(0.1) 
            ser.write(b'S')
        else:
            print("State is off...")
            time.sleep(0.1)
            ser.write(b'L')

if __name__ == '__main__':
    while(1):
        trap()
