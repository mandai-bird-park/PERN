#!/usr/bin/python
import psycopg2

def insert_test(rfid, weight, image_path):
    """ insert a new test into the test table """
    """ update everything into 1 sql text """
    sql = """INSERT INTO attendance(bird_id, aviary_id, weight, image_path)
             VALUES(%s, '1', %s, %s) RETURNING bird_id;"""

    if weight == "0.00":
        return False

    conn = None
    try:
        # read database configuration
        # connect to the PostgreSQL database
        # refer to database.ini
        conn = psycopg2.connect(host="192.168.1.109",database="mandai_bird_park", user="pi", password="pi")
        # create a new cursor
        cur = conn.cursor()
        # execute the INSERT statement
        cur.execute(sql, (rfid, weight, image_path))
        # cur.execute(sql2, rfid)
        # get the generated id back
        rfid = cur.fetchone()[0]
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

    return True

def fetch_test(enable):
    sql = """Select * From attendance"""

    data_out = ""

    conn = None
    try:
        # read database configuration
        # connect to the PostgreSQL database
        # refer to database.ini
        conn = psycopg2.connect(host="192.168.1.109",database="mandai_bird_park", user="pi", password="pi")
        # create a new cursor
        cur = conn.cursor()
        # execute the INSERT statement
        cur.execute(sql)
        # cur.execute(sql2, rfid)
        # get the generated id back
        row = cur.fetchone()

        while row is not None:
            for i in row:
                data_out += str(i) + "          " 
                # print(i)
                # print("|")
            data_out += "\n"
            row = cur.fetchone()
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

    if enable:
        return data_out
    else:
        return ""


if __name__ == '__main__':
    insert_test("0","0","0")
    
