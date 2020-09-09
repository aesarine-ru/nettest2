import React from "react";
import theme from "theme";
import { Theme, Button, Icon, Input } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Button>
			Button
		</Button>
		<Icon category="md" icon={MdFace} />
		<Input />
	</Theme>;
});