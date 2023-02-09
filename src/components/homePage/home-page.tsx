import { FC, useState } from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";

interface Skill {
  id: number;
  label: string;
}

const Home: FC = () => {
  const [value2, setValue2] = useState<Skill | null>(null);

  const skills = [
    "skill1",
    "skill2",
    "skill3",
    "skill4",
    "some text1",
    "some text2",
    "some text2",
  ];

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  const handleChange2 = (_event: any, newValue: Skill | null) => {
    setValue2(newValue);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            paddingY: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom, #1e88e5, #0d47a1)",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "40px",
                  textAlign: "center",
                },
              }}
            >
              Discover your perfect home
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                textAlign: "center",
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "22px",
                  textAlign: "center",
                },
              }}
            >
              Let{`'`}s find a home that{`'`}s perfect for you
            </Typography>
          </Box>{" "}
          <Box
            sx={{
              width: { xs: "250px", sm: "350px", md: "400px" },
              marginTop: 3,
            }}
          >
            <Autocomplete
              sx={{
                background: "#bbdefb",
                borderRadius: 5,
              }}
              className="mt-2"
              options={skillOptions}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="address, description" />
              )}
              value={value2}
              onChange={handleChange2}
              isOptionEqualToValue={
                (option: Skill, value: Skill) => option.id === value.id // option: The option to test.
                //value: The value to test against.
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
