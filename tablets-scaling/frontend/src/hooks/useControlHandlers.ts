import { useCallback, useState } from "react";

interface UseControlHandlersProps {
	onSave?: (config: any) => void;
	onRun?: () => void;
	onStop?: () => void;
	config?: any;
}

export function useControlHandlers({
	onSave,
	onRun,
	onStop,
	config,
}: UseControlHandlersProps) {
	const [isRunning, setIsRunning] = useState(false);

	const handleSave = useCallback(() => {
		onSave?.(config);
	}, [config, onSave]);

	const handleRun = useCallback(() => {
		setIsRunning(true);
		onRun?.();
	}, [onRun]);

	const handleStop = useCallback(() => {
		setIsRunning(false);
		onStop?.();
	}, [onStop]);

	return {
		isRunning,
		handleSave,
		handleRun,
		handleStop,
	};
}
