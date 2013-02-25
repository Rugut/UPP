
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидыКомплектации
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"8956a992-4937-4d41-9a1f-cb44b192914d\", \"Представление\":\"Сборка\"}")]
		Сборка = 0,
		[EnumMember(Value = "{\"Ссылка\":\"5b53842d-bbbe-497b-84e6-7b8f933acb37\", \"Представление\":\"Разборка\"}")]
		Разборка = 1,
	}
	public static partial class ВидыКомплектации_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Сборка = new Guid("44cb1f9a-92b1-4d91-4d41-49378956a992");
		public static readonly Guid Разборка = new Guid("8f7be684-3a93-37cb-497b-bbbe5b53842d");
		public static ВидыКомплектации Получить(this ВидыКомплектации Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыКомплектации Получить(this ВидыКомплектации Значение, Guid Ссылка)
		{
			if(Ссылка == Сборка)
			{
				return ВидыКомплектации.Сборка;
			}
			else if(Ссылка == Разборка)
			{
				return ВидыКомплектации.Разборка;
			}
			return ВидыКомплектации.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыКомплектации Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыКомплектации Значение)
		{
			switch (Значение)
			{
				case ВидыКомплектации.Сборка: return Сборка;
				case ВидыКомплектации.Разборка: return Разборка;
			}
			return Guid.Empty;
		}
	}
}