
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Регл)
		///</summary>
	public enum ДоходыФСС_НС
	{
		ПустаяСсылка = - 1,
		Облагается = 0,
		НеОблагается = 1,//Не облагается
	}
	public static partial class ДоходыФСС_НС_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Облагается = new Guid("612c6f80-aa42-0aff-49bb-0576a760fa20");
		public static readonly Guid НеОблагается = new Guid("000899ae-9d42-f7e4-43cd-3fd00960827d");//Не облагается
		public static ДоходыФСС_НС Получить(this ДоходыФСС_НС Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ДоходыФСС_НС Получить(this ДоходыФСС_НС Значение, Guid Ссылка)
		{
			if(Ссылка == Облагается)
			{
				return ДоходыФСС_НС.Облагается;
			}
			else if(Ссылка == НеОблагается)
			{
				return ДоходыФСС_НС.НеОблагается;
			}
			return ДоходыФСС_НС.ПустаяСсылка;
		}
		public static byte[] Ключ(this ДоходыФСС_НС Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ДоходыФСС_НС Значение)
		{
			switch (Значение)
			{
				case ДоходыФСС_НС.Облагается: return Облагается;
				case ДоходыФСС_НС.НеОблагается: return НеОблагается;
			}
			return Guid.Empty;
		}
	}
}
