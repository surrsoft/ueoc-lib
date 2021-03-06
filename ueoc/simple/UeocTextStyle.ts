export class UeocTextStyle {
  vColor: string
  vBgColor: string
  vSizePx: number
  vIsBold: boolean
  vIsItalic: boolean
  vIsUnderline: boolean

  color(color: string): this {
    this.vColor = color
    return this
  }

  bgColor(color: string): this {
    this.vBgColor = color
    return this
  }

  size(px: number): this {
    this.vSizePx = px
    return this
  }

  bold(enable: boolean = true): this {
    if (enable) {
      this.vIsBold = true
    }
    return this
  }

  italic(enable: boolean = true): this {
    if (enable) {
      this.vIsItalic = true
    }
    return this
  }

  underline(enable: boolean = true): this {
    if (enable) {
      this.vIsUnderline = true
    }
    return this
  }
}
