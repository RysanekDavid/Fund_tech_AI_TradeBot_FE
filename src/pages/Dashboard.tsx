import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  InputBase,
  Typography,
  LinearProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Folder as FolderIcon,
  Mail as MailIcon,
  AttachMoney as AttachMoneyIcon,
  PieChart as PieChartIcon,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard"); // Adjust the API endpoint as needed
        setData(response.data.lineData);
        setBarData(response.data.barData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#1e1e2d",
        color: "white",
      }}
    >
      <Box
        sx={{ width: "64px", flexShrink: 0, backgroundColor: "#252836", p: 4 }}
      />
      <Container sx={{ flexGrow: 1, overflow: "auto", p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography variant="h4" fontWeight="fontWeightBold">
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#2d303e",
                borderRadius: 1,
                p: 0.5,
              }}
            >
              <InputBase
                placeholder="Search here..."
                sx={{ color: "white", ml: 1, flex: 1 }}
              />
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Avatar alt="Admin" src="/placeholder.svg" />
          </Box>
        </Box>
        <Grid container spacing={3} mb={6}>
          <Grid item xs={3}>
            <Card sx={{ backgroundColor: "#31344a" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">932</Typography>
                  <Typography variant="subtitle1">Project</Typography>
                </Box>
                <FolderIcon sx={{ color: "#4e4b66" }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ backgroundColor: "#31344a" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">1,032</Typography>
                  <Typography variant="subtitle1">Inquiries</Typography>
                </Box>
                <MailIcon sx={{ color: "#4e4b66" }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ backgroundColor: "#31344a" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">102k</Typography>
                  <Typography variant="subtitle1">Investment</Typography>
                </Box>
                <AttachMoneyIcon sx={{ color: "#4e4b66" }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ backgroundColor: "#31344a" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">32k</Typography>
                  <Typography variant="subtitle1">Assets</Typography>
                </Box>
                <PieChartIcon sx={{ color: "#4e4b66" }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={6}>
          <Grid item xs={8}>
            <Card sx={{ backgroundColor: "#252836" }}>
              <CardHeader
                title="Project Statistic"
                action={
                  <Button
                    variant="outlined"
                    sx={{ color: "white", borderColor: "white" }}
                  >
                    Change Period
                  </Button>
                }
              />
              <CardContent>
                <LineChart width={600} height={300} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: "#252836", mt: 6 }}>
              <CardHeader title="Statistic" />
              <CardContent>
                <BarChart width={600} height={300} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: "#252836" }}>
              <CardHeader title="Email" />
              <CardContent>
                <BarChart width={300} height={200} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: "#252836", mt: 6 }}>
              <CardHeader title="Contacts" />
              <CardContent />
              <Box sx={{ textAlign: "right", p: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  View More
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: "#252836" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">7,642</Typography>
                  <Typography variant="subtitle1">
                    Total emails Subscriber.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Compose Email
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: "#252836" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">Upgrade Your Storage</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    sx={{ width: "100%", color: "white" }}
                  />
                </Box>
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: "#252836" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h5">Server Status</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
