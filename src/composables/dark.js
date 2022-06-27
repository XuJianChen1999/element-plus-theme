/*
 * @Description: 
 * @Author: xjc
 * @Date: 2022-06-27 11:27:09
 * @LastEditTime: 2022-06-27 11:27:48
 * @LastEditors: xjc
 */
import {useDark, useToggle} from '@vueuse/core'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)