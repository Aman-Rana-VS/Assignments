import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/spacing';

type TTopNavStyles = {
  container: ViewStyle;
  text: TextStyle;
};
export const topnavStyles: TTopNavStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: SPACING.space_16,
    height: SPACING.space_56,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
    width: SPACING.space_375,
  },
  text: {
    color: COLORS.neutral700,
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
});
