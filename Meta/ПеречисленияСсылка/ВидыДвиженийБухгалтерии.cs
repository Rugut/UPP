
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыДвиженийБухгалтерии
	{
		ПустаяСсылка = - 1,
		Дебет = 0,
		Кредит = 1,
	}
	public static partial class ВидыДвиженийБухгалтерии_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Дебет = new Guid("3fd27ab6-071e-4af5-4000-3bb44f9fbfea");
		public static readonly Guid Кредит = new Guid("1b847c97-2a16-d8a2-4ab5-09cafdcefb80");
		public static ВидыДвиженийБухгалтерии Получить(this ВидыДвиженийБухгалтерии Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДвиженийБухгалтерии Получить(this ВидыДвиженийБухгалтерии Значение, Guid Ссылка)
		{
			if(Ссылка == Дебет)
			{
				return ВидыДвиженийБухгалтерии.Дебет;
			}
			else if(Ссылка == Кредит)
			{
				return ВидыДвиженийБухгалтерии.Кредит;
			}
			return ВидыДвиженийБухгалтерии.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДвиженийБухгалтерии Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДвиженийБухгалтерии Значение)
		{
			switch (Значение)
			{
				case ВидыДвиженийБухгалтерии.Дебет: return Дебет;
				case ВидыДвиженийБухгалтерии.Кредит: return Кредит;
			}
			return Guid.Empty;
		}
	}
}