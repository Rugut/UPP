
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Регл)
	///</summary>
	[DataContract]
	public enum ДоходыФСС_НС
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a760fa20-0576-49bb-806f-2c6142aaff0a\", \"Представление\":\"Облагается\"}")]
		Облагается = 0,
		[EnumMember(Value = "{\"Ссылка\":\"0960827d-3fd0-43cd-ae99-0800429de4f7\", \"Представление\":\"НеОблагается\"}")]
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