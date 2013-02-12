
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ТоварТара
	{
		ПустаяСсылка = - 1,
	///<summary>
	///Объединяет в себе товары (купленные и принятые), материалы и продукцию
	///</summary>
		Товар = 0,
	///<summary>
	///Возвратная тара (собственная и полученная у поставщиков)
	///</summary>
		Тара = 1,
	}
	public static partial class ТоварТара_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Объединяет в себе товары (купленные и принятые), материалы и продукцию
		///</summary>
		public static readonly Guid Товар = new Guid("8bbfb193-33c4-314f-4ff6-645e18384a56");
		///<summary>
		///Возвратная тара (собственная и полученная у поставщиков)
		///</summary>
		public static readonly Guid Тара = new Guid("68b2e086-7609-144d-47ce-7fcf6ee57b0d");
		public static ТоварТара Получить(this ТоварТара Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТоварТара Получить(this ТоварТара Значение, Guid Ссылка)
		{
			if(Ссылка == Товар)
			{
				return ТоварТара.Товар;
			}
			else if(Ссылка == Тара)
			{
				return ТоварТара.Тара;
			}
			return ТоварТара.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТоварТара Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТоварТара Значение)
		{
			switch (Значение)
			{
				case ТоварТара.Товар: return Товар;
				case ТоварТара.Тара: return Тара;
			}
			return Guid.Empty;
		}
	}
}