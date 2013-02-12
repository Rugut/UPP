
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum ВидыВнутреннегоЗаказа
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(общ)
	///</summary>
		НаСклад = 0,//На склад
	///<summary>
	///(Общ)
	///</summary>
		ВПодразделение = 1,//В подразделение
	}
	public static partial class ВидыВнутреннегоЗаказа_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(общ)
		///</summary>
		public static readonly Guid НаСклад = new Guid("98d34b9d-7b3d-b5ac-4327-b1a74ae21c5b");//На склад
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВПодразделение = new Guid("3c377c81-6e3c-25d4-4a42-c45869d5e9a5");//В подразделение
		public static ВидыВнутреннегоЗаказа Получить(this ВидыВнутреннегоЗаказа Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыВнутреннегоЗаказа Получить(this ВидыВнутреннегоЗаказа Значение, Guid Ссылка)
		{
			if(Ссылка == НаСклад)
			{
				return ВидыВнутреннегоЗаказа.НаСклад;
			}
			else if(Ссылка == ВПодразделение)
			{
				return ВидыВнутреннегоЗаказа.ВПодразделение;
			}
			return ВидыВнутреннегоЗаказа.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыВнутреннегоЗаказа Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыВнутреннегоЗаказа Значение)
		{
			switch (Значение)
			{
				case ВидыВнутреннегоЗаказа.НаСклад: return НаСклад;
				case ВидыВнутреннегоЗаказа.ВПодразделение: return ВПодразделение;
			}
			return Guid.Empty;
		}
	}
}