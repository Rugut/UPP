
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ВидыРабочихГрафиков
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		Пятидневка = 0,
	///<summary>
	///(Общ)
	///</summary>
		Шестидневка = 1,
	///<summary>
	///(Общ)
	///</summary>
		Сменный = 2,
		КалендарныеДни = 3,//Календарные дни
	}
	public static partial class ВидыРабочихГрафиков_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Пятидневка = new Guid("671c8caf-a687-8d2e-4ec2-c4fc4dba4830");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Шестидневка = new Guid("4ea369bf-f0c8-6fd2-408a-ad0bc661367d");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Сменный = new Guid("d0ee6e91-4282-5687-4cb6-8b88eaa213a4");
		public static readonly Guid КалендарныеДни = new Guid("c1e92e8d-7b5f-8bdd-40ec-aa80c643ce52");//Календарные дни
		public static ВидыРабочихГрафиков Получить(this ВидыРабочихГрафиков Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыРабочихГрафиков Получить(this ВидыРабочихГрафиков Значение, Guid Ссылка)
		{
			if(Ссылка == Пятидневка)
			{
				return ВидыРабочихГрафиков.Пятидневка;
			}
			else if(Ссылка == Шестидневка)
			{
				return ВидыРабочихГрафиков.Шестидневка;
			}
			else if(Ссылка == Сменный)
			{
				return ВидыРабочихГрафиков.Сменный;
			}
			else if(Ссылка == КалендарныеДни)
			{
				return ВидыРабочихГрафиков.КалендарныеДни;
			}
			return ВидыРабочихГрафиков.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыРабочихГрафиков Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыРабочихГрафиков Значение)
		{
			switch (Значение)
			{
				case ВидыРабочихГрафиков.Пятидневка: return Пятидневка;
				case ВидыРабочихГрафиков.Шестидневка: return Шестидневка;
				case ВидыРабочихГрафиков.Сменный: return Сменный;
				case ВидыРабочихГрафиков.КалендарныеДни: return КалендарныеДни;
			}
			return Guid.Empty;
		}
	}
}