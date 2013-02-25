
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
	public enum ВидыСобственныхКонтрагентов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"7b2c0a64-5b14-4f04-952f-d341c60b6b46\", \"Представление\":\"Организация\"}")]
		Организация = 0,
		[EnumMember(Value = "{\"Ссылка\":\"e31bff22-72fc-486a-bb8e-9164ad97be58\", \"Представление\":\"ФизЛицо\"}")]
		ФизЛицо = 1,//Физ. лицо
	}
	public static partial class ВидыСобственныхКонтрагентов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Организация = new Guid("41d32f95-0bc6-466b-4f04-5b147b2c0a64");
		public static readonly Guid ФизЛицо = new Guid("64918ebb-97ad-58be-486a-72fce31bff22");//Физ. лицо
		public static ВидыСобственныхКонтрагентов Получить(this ВидыСобственныхКонтрагентов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСобственныхКонтрагентов Получить(this ВидыСобственныхКонтрагентов Значение, Guid Ссылка)
		{
			if(Ссылка == Организация)
			{
				return ВидыСобственныхКонтрагентов.Организация;
			}
			else if(Ссылка == ФизЛицо)
			{
				return ВидыСобственныхКонтрагентов.ФизЛицо;
			}
			return ВидыСобственныхКонтрагентов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСобственныхКонтрагентов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСобственныхКонтрагентов Значение)
		{
			switch (Значение)
			{
				case ВидыСобственныхКонтрагентов.Организация: return Организация;
				case ВидыСобственныхКонтрагентов.ФизЛицо: return ФизЛицо;
			}
			return Guid.Empty;
		}
	}
}