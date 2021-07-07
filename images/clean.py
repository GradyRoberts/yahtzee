import glob, os

for f in glob.glob("tmp*.png"):
        try:
            os.remove(f)
        except OSError:
            print("Error removing " + f)