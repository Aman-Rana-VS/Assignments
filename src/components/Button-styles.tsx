import {StyleSheet} from 'react-native';
import {FONTS} from '../theme/typography';
import {COLORS} from '../theme/colors';
import {SPACING} from '../theme/theme';

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    borderRadius: SPACING.space_8,
    elevation: SPACING.space_10,
    flex: 1,
    gap: SPACING.space_8,
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_12,
  },
  buttonText: {
    color: COLORS.neutral700,
    fontFamily: FONTS.QUICKSAND_SEMIBOLD,
    fontSize: 12,
    height: SPACING.space_18,
    width: 30,
  },
});
