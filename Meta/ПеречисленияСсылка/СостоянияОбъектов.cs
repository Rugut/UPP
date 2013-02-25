
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum СостоянияОбъектов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"9d3093c1-d861-4105-b08e-1d094cb0923b\", \"Представление\":\"Подготовлен\"}")]
		Подготовлен = 0,
		[EnumMember(Value = "{\"Ссылка\":\"8f2e04c6-e860-4a06-a907-633c505052d6\", \"Представление\":\"Утвержден\"}")]
		Утвержден = 1,
		[EnumMember(Value = "{\"Ссылка\":\"c0316856-4baf-4059-b6dd-3fc83efe0326\", \"Представление\":\"Отложен\"}")]
		Отложен = 2,
		[EnumMember(Value = "{\"Ссылка\":\"fcbcd6a4-a209-45e0-a2fe-7dc75f5be566\", \"Представление\":\"Согласован\"}")]
		Согласован = 3,
		[EnumMember(Value = "{\"Ссылка\":\"edf3b172-3d7c-4fa0-8b8d-49325c6386f1\", \"Представление\":\"Отклонен\"}")]
		Отклонен = 4,
	}
	public static partial class СостоянияОбъектов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Подготовлен = new Guid("091d8eb0-b04c-3b92-4105-d8619d3093c1");
		public static readonly Guid Утвержден = new Guid("3c6307a9-5050-d652-4a06-e8608f2e04c6");
		public static readonly Guid Отложен = new Guid("c83fddb6-fe3e-2603-4059-4bafc0316856");
		public static readonly Guid Согласован = new Guid("c77dfea2-5b5f-66e5-45e0-a209fcbcd6a4");
		public static readonly Guid Отклонен = new Guid("32498d8b-635c-f186-4fa0-3d7cedf3b172");
		public static СостоянияОбъектов Получить(this СостоянияОбъектов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СостоянияОбъектов Получить(this СостоянияОбъектов Значение, Guid Ссылка)
		{
			if(Ссылка == Подготовлен)
			{
				return СостоянияОбъектов.Подготовлен;
			}
			else if(Ссылка == Утвержден)
			{
				return СостоянияОбъектов.Утвержден;
			}
			else if(Ссылка == Отложен)
			{
				return СостоянияОбъектов.Отложен;
			}
			else if(Ссылка == Согласован)
			{
				return СостоянияОбъектов.Согласован;
			}
			else if(Ссылка == Отклонен)
			{
				return СостоянияОбъектов.Отклонен;
			}
			return СостоянияОбъектов.ПустаяСсылка;
		}
		public static byte[] Ключ(this СостоянияОбъектов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СостоянияОбъектов Значение)
		{
			switch (Значение)
			{
				case СостоянияОбъектов.Подготовлен: return Подготовлен;
				case СостоянияОбъектов.Утвержден: return Утвержден;
				case СостоянияОбъектов.Отложен: return Отложен;
				case СостоянияОбъектов.Согласован: return Согласован;
				case СостоянияОбъектов.Отклонен: return Отклонен;
			}
			return Guid.Empty;
		}
	}
}