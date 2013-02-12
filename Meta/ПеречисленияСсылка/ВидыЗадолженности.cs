
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///Виды задолженности: дебиторская, кредиторская
		///</summary>
	public enum ВидыЗадолженности
	{
		ПустаяСсылка = - 1,
	///<summary>
	///Дебиторская
	///</summary>
		Дебиторская = 0,
	///<summary>
	///Кредиторская
	///</summary>
		Кредиторская = 1,
	}
	public static partial class ВидыЗадолженности_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Дебиторская
		///</summary>
		public static readonly Guid Дебиторская = new Guid("e9a92b8c-7e3c-ef7f-4216-a3e4eabde08b");
		///<summary>
		///Кредиторская
		///</summary>
		public static readonly Guid Кредиторская = new Guid("ebf89cb0-9714-a0ba-4414-d0d74b211015");
		public static ВидыЗадолженности Получить(this ВидыЗадолженности Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыЗадолженности Получить(this ВидыЗадолженности Значение, Guid Ссылка)
		{
			if(Ссылка == Дебиторская)
			{
				return ВидыЗадолженности.Дебиторская;
			}
			else if(Ссылка == Кредиторская)
			{
				return ВидыЗадолженности.Кредиторская;
			}
			return ВидыЗадолженности.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыЗадолженности Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыЗадолженности Значение)
		{
			switch (Значение)
			{
				case ВидыЗадолженности.Дебиторская: return Дебиторская;
				case ВидыЗадолженности.Кредиторская: return Кредиторская;
			}
			return Guid.Empty;
		}
	}
}