import { Typography } from '@/components/Typography';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { appActions } from '@/models/AppModel/slice';
import { ThemeType, appModel } from '@/models/AppModel/AppModel';
import { Select } from '@/components/Select';

const CommonAppSettings = () => {
  const dispatch = useAppDispatch();
  const { theme: appTheme } = useAppSelector((state) => state.app);

  console.log(`Current app theme ${appTheme}`);

  const onThemeChange = (value: string) => {
    appModel.setTheme(value as ThemeType);
    dispatch(appActions.setTheme(value as ThemeType));
  };

  return (
    <>
      <Typography>Common preferences</Typography>
      <Select
        mode="rows"
        selected={{ label: '', value: appTheme } || null}
        onChange={onThemeChange}
        placeholder="Select used theme"
        options={[
          { label: 'auto', value: 'auto' },
          { label: 'Dark', value: 'dark' },
          { label: 'Light', value: 'light' },
        ]}
      />
    </>
  );
};

export default CommonAppSettings;
