
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ВидыВыпуска
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		Выпуск = 0,
	///<summary>
	///(Общ)
	///</summary>
		Наработка = 1,
	}
	public static partial class ВидыВыпуска_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Выпуск = new Guid("50fc4faa-4b89-b252-4e6c-cb6111ff4bdc");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Наработка = new Guid("652fc099-1f7e-1da7-4448-e926c0c7475e");
		public static ВидыВыпуска Получить(this ВидыВыпуска Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыВыпуска Получить(this ВидыВыпуска Значение, Guid Ссылка)
		{
			if(Ссылка == Выпуск)
			{
				return ВидыВыпуска.Выпуск;
			}
			else if(Ссылка == Наработка)
			{
				return ВидыВыпуска.Наработка;
			}
			return ВидыВыпуска.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыВыпуска Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыВыпуска Значение)
		{
			switch (Значение)
			{
				case ВидыВыпуска.Выпуск: return Выпуск;
				case ВидыВыпуска.Наработка: return Наработка;
			}
			return Guid.Empty;
		}
	}
}
