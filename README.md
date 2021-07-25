### Test

npm test

### Calling Bingo Numbers

url: localhost:3001/number/generate

json example:

{
    "newNumber": 16,
    "listNumber": [
        15,
        16,
        24,
        44,
        51,
        65
    ]
}


### Generating Bingo Cards

url: localhost:3001/card/generate

json example:

{
    "quantity": 2,
    "list": [
        {
            "card": [
                [
                    "B",
                    1,
                    8,
                    10,
                    11,
                    12
                ],
                [
                    "I",
                    24,
                    26,
                    27,
                    28,
                    30
                ],
                [
                    "N",
                    31,
                    34,
                    37,
                    42
                ],
                [
                    "G",
                    49,
                    50,
                    51,
                    56,
                    59
                ],
                [
                    "O",
                    67,
                    69,
                    72,
                    73,
                    75
                ]
            ]
        },
        {
            "card": [
                [
                    "B",
                    4,
                    5,
                    6,
                    7,
                    14
                ],
                [
                    "I",
                    16,
                    20,
                    21,
                    24,
                    29
                ],
                [
                    "N",
                    34,
                    36,
                    37,
                    42
                ],
                [
                    "G",
                    48,
                    49,
                    54,
                    57,
                    60
                ],
                [
                    "O",
                    64,
                    66,
                    72,
                    73,
                    75
                ]
            ]
        }
    ]
}

### Checking Bingo Cards

url: localhost:3001/card/check

json example:

"the player is the winner"

