db.createUser(
    {
        user: "mongoracer",
        pwd: "iloveracing12345",
        roles: [
            {
                role: "readWrite",
                db: "racingGameDB"
            }
        ]
    }
)