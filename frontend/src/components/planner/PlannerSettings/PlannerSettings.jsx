import React from "react";
import DateControl from "./settings/DateControl";
import LayoutSelector from "./settings/LayoutSelector";
import ThemeSelector from "./settings/ThemeSelector";
import OrientationControl from "./settings/OrientationControl";
import LanguageControl from "./settings/LanguageControl";
import WeekStartControl from "./settings/WeekStartControl";
import LunarDateControl from "./settings/LunarDateControl";

const PlannerControls = ({
  startDate,
  duration,
  selectedLayouts,
  layouts,
  currentTheme,
  themes,
  onDateChange,
  onDurationChange,
  onLayoutChange,
  onThemeChange,
  orientation,
  onOrientationChange,
  language,
  onLanguageChange,
  weekStart,
  onWeekStartChange,
  lunarDate,
  onLunarDateChange,
}) => {
  return (
    <div className="space-y-4">
      {/* 整體配置設置 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          整體配置設置
        </h2>
        <div className="space-y-4">
          <OrientationControl
            orientation={orientation}
            onOrientationChange={onOrientationChange}
          />
          <ThemeSelector
            currentTheme={currentTheme}
            themes={themes}
            onThemeChange={onThemeChange}
          />
        </div>
      </div>

      {/* 日期區間設置 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          日期區間設置
        </h2>
        <div className="space-y-4">
          <WeekStartControl
            weekStart={weekStart}
            onWeekStartChange={onWeekStartChange}
          />
          <DateControl
            startDate={startDate}
            duration={duration}
            onDateChange={onDateChange}
            onDurationChange={onDurationChange}
          />
        </div>
      </div>

      {/* 版面設置 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">版面設置</h2>
        <div className="space-y-4">
          <LayoutSelector
            selectedLayouts={selectedLayouts}
            onLayoutChange={onLayoutChange}
            layouts={layouts}
          />
        </div>
      </div>

      {/* 語言及附加功能設置 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          語言及附加功能設置
        </h2>
        <div className="space-y-4">
          <LanguageControl
            language={language}
            onLanguageChange={onLanguageChange}
          />
          <LunarDateControl
            lunarDate={lunarDate}
            onLunarDateChange={onLunarDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PlannerControls;
