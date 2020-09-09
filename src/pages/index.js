import React from "react";
import theme from "theme";
import { Theme, Icon, Button } from "@quarkly/widgets";
import { MdAndroid } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Icon category="md" icon={MdAndroid} size="64px" />
		<Button>
			Button
		</Button>
	</Theme>;
});