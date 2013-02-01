
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Регл)
		///</summary>
	public enum ВидыУчетаПоПБУ18
	{
		ПустаяСсылка = - 1,
	///<summary>
	///Налоговый учет
	///</summary>
		НУ = 0,
	///<summary>
	///Учет постоянных разниц
	///</summary>
		ПР = 1,
	///<summary>
	///Учет временных разниц
	///</summary>
		ВР = 2,
	}
	public static partial class ВидыУчетаПоПБУ18_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Налоговый учет
		///</summary>
		public static readonly Guid НУ = new Guid("fffbfc82-bae1-859d-4b5c-e60440f3e05d");
		///<summary>
		///Учет постоянных разниц
		///</summary>
		public static readonly Guid ПР = new Guid("57fd0aab-655f-5beb-41f5-8ed70d499bd0");
		///<summary>
		///Учет временных разниц
		///</summary>
		public static readonly Guid ВР = new Guid("87bb509e-d440-0c7d-486c-e5f26649350d");
		public static ВидыУчетаПоПБУ18 Получить(this ВидыУчетаПоПБУ18 Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыУчетаПоПБУ18 Получить(this ВидыУчетаПоПБУ18 Значение, Guid Ссылка)
		{
			if(Ссылка == НУ)
			{
				return ВидыУчетаПоПБУ18.НУ;
			}
			else if(Ссылка == ПР)
			{
				return ВидыУчетаПоПБУ18.ПР;
			}
			else if(Ссылка == ВР)
			{
				return ВидыУчетаПоПБУ18.ВР;
			}
			return ВидыУчетаПоПБУ18.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыУчетаПоПБУ18 Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыУчетаПоПБУ18 Значение)
		{
			switch (Значение)
			{
				case ВидыУчетаПоПБУ18.НУ: return НУ;
				case ВидыУчетаПоПБУ18.ПР: return ПР;
				case ВидыУчетаПоПБУ18.ВР: return ВР;
			}
			return Guid.Empty;
		}
	}
}
