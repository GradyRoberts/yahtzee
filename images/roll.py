import os, random, tempfile
from PIL import Image


def roll(prev=[-1, -1, -1, -1, -1]):
    dice_vals = [1, 2, 3, 4, 5, 6]
    roll = random.choices(dice_vals, k=5)
    roll.sort()

    try:
        with Image.open("base.png") as base_im:
            locations = [(10, 10), (83, 10), (156, 10), (229, 10), (302, 10)]
            i = 0
            for die in roll:
                with Image.open("die_" + str(die) + ".png") as im:
                    base_im.paste(im, locations[i])
                i += 1
            temp_name = "tmp" + next(tempfile._get_candidate_names()) + ".png"
            while os.path.exists(temp_name):
                temp_name = "tmp" + next(tempfile._get_candidate_names()) + ".png"
            base_im.save(temp_name)
            return roll, temp_name
    except OSError as e:
        print(e)

roll()