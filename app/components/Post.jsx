"use client";

import { useState } from "react";
import { Button, Tab, Tabs, Box } from "@mui/material";
import { AlarmClockCheck, AreaChart, ChevronRight } from "lucide-react";
import Image from "next/image";
import Post1 from "@/app/assets/post1.png";
import Post2 from "@/app/assets/post2.png";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": ` simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Post = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="post">
      <Image src={Post1} alt="post 1" />

      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Google" {...a11yProps(0)} />
        <Tab label="Trending" {...a11yProps(1)} />
        <Tab label="New" {...a11yProps(2)} />
      </Tabs>

      <CustomTabPanel value={activeTab} index={0}>
        <div className="tw-flex tw-flex-col tw-gap-y-2.5 tw-w-[300px] ">
          <h3 className="tw-text-[20px] tw-font-normal tw-text-[#252B42]">
            Loudest à la Madison #1 Lintegral
          </h3>
          <p className="tw-text-[#737373] tw-text-sm tw-font-normal tw-w-[270px]">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away.
          </p>
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-flex-row tw-items-center">
              <AlarmClockCheck color="#23A6F0" />
              <span className="tw-text-[12px] tw-font-normal tw-text-[#737373] tw-pl-1">
                22 April 2021
              </span>
            </div>

            <div className="tw-flex tw-flex-row tw-items-center">
              <AreaChart color="#23856D" />
              <span className="tw-text-[12px] tw-font-normal tw-text-[#737373] tw-pl-1">
                10 comments
              </span>
            </div>
          </div>
          <div className="tw-flex tw-justify-start">
            <Button
              endIcon={<ChevronRight />}
              className="tw-text-[14px] tw-text-[#737373] tw-pt-4 tw-font-bold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        Trending Content
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        New Content
      </CustomTabPanel>
    </div>
  );
};

export default Post;
