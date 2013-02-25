
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
	public enum ВыплаченностьЗарплаты
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"c52fa698-f5de-4cb6-b276-dbc07a71600c\", \"Представление\":\"НеВыплачено\"}")]
		НеВыплачено = 0,//Не выплачено
		[EnumMember(Value = "{\"Ссылка\":\"48498c7a-8b0d-4b59-ad53-ae7573302f18\", \"Представление\":\"Выплачено\"}")]
		Выплачено = 1,
		[EnumMember(Value = "{\"Ссылка\":\"24b7750d-6551-443f-a126-136edeeb3c46\", \"Представление\":\"Задепонировано\"}")]
		Задепонировано = 2,
	}
	public static partial class ВыплаченностьЗарплаты_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid НеВыплачено = new Guid("c0db76b2-717a-0c60-4cb6-f5dec52fa698");//Не выплачено
		public static readonly Guid Выплачено = new Guid("75ae53ad-3073-182f-4b59-8b0d48498c7a");
		public static readonly Guid Задепонировано = new Guid("6e1326a1-ebde-463c-443f-655124b7750d");
		public static ВыплаченностьЗарплаты Получить(this ВыплаченностьЗарплаты Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВыплаченностьЗарплаты Получить(this ВыплаченностьЗарплаты Значение, Guid Ссылка)
		{
			if(Ссылка == НеВыплачено)
			{
				return ВыплаченностьЗарплаты.НеВыплачено;
			}
			else if(Ссылка == Выплачено)
			{
				return ВыплаченностьЗарплаты.Выплачено;
			}
			else if(Ссылка == Задепонировано)
			{
				return ВыплаченностьЗарплаты.Задепонировано;
			}
			return ВыплаченностьЗарплаты.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВыплаченностьЗарплаты Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВыплаченностьЗарплаты Значение)
		{
			switch (Значение)
			{
				case ВыплаченностьЗарплаты.НеВыплачено: return НеВыплачено;
				case ВыплаченностьЗарплаты.Выплачено: return Выплачено;
				case ВыплаченностьЗарплаты.Задепонировано: return Задепонировано;
			}
			return Guid.Empty;
		}
	}
}