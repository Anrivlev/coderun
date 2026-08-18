import sys


def main():
    jewels = input()
    stones = input()
    
    jewelsSet = set(jewels)
    jewelsInStonesCount = 0
    
    for stone in stones:
        if stone in jewelsSet:
            jewelsInStonesCount += 1
    
    print(jewelsInStonesCount)


# if __name__ == '__main__':
    main()
